var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require("express");
var path = require("path");
var userModel = require("./models/user");
var cookieParser = require("cookie-parser");
var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());
// setup a middleware
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/login", function (req, res) {
    res.render("login");
});
app.get("/profile", isLoggedIn, function (req, res) {
    console.log(req.user);
    res.send("you can access profile");
});
app.post("/register", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, name, email, password, userName, age, user;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, password = _a.password, userName = _a.userName, age = _a.age;
                return [4 /*yield*/, userModel.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (user)
                    return [2 /*return*/, res.status(500).send("User already exist")];
                bcrypt.genSalt(10, function (err, salt) {
                    // console.log("salt", salt);
                    bcrypt.hash(password, salt, function (err, hash) { return __awaiter(_this, void 0, void 0, function () {
                        var user, token;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, userModel.create({
                                        name: name,
                                        email: email,
                                        userName: userName,
                                        age: age,
                                        password: hash,
                                    })];
                                case 1:
                                    user = _a.sent();
                                    token = jwt.sign({ email: email, userid: user._id }, "secretKey");
                                    res.cookie("token", token);
                                    res.send("registered");
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
        }
    });
}); });
app.post("/login", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, email, password, user;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, userModel.findOne({ email: email })];
            case 1:
                user = _b.sent();
                if (!user)
                    return [2 /*return*/, res.status(500).send("Something went wrong")];
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result) {
                        var token = jwt.sign({ email: email, userid: user._id }, "secretKey");
                        res.cookie("token", token);
                        res.status(200).send("you can Login");
                    }
                    else
                        res.redirect("/login");
                });
                return [2 /*return*/];
        }
    });
}); });
app.get("/logout", function (req, res) {
    res.cookie("token", "");
    res.redirect("/login");
});
function isLoggedIn(req, res, next) {
    if (req.cookies.token === "")
        res.send("you must be login");
    else {
        var data = jwt.verify(req.cookies.token, "secretKey");
        req.user = data;
    }
    next();
}
app.listen(3000, function () {
    console.log("Running!!!");
});
