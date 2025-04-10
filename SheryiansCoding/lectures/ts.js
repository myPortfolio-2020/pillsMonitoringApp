"use strict";
// example of forEach
// forEach loop doesnot return, it iterates
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
Object.defineProperty(exports, "__esModule", { value: true });
var arr = [1, 2, 3, 4];
var arrForEach = arr.forEach(function (val) {
    console.log("".concat(val, "* ").concat(val, "=").concat(val * val));
});
console.log(arrForEach);
console.log(arr);
// map returns
// when to use map, when you want to create another array from an array
var mapArr = [1, 2, 3, 4];
var mapArrVal = mapArr.map(function (item) {
    return item * item;
});
console.log("mapArrVal", mapArrVal);
console.log("array", mapArr);
// Filter
//
var arrFilter = [22, 33, 44, 55, 122, 1, 2, 3];
var filterArr = arrFilter.filter(function (val) { return val > 30; });
var filterArr2 = arrFilter.filter(function (val) {
    if (val > 50) {
        return true;
    }
});
console.log(filterArr);
console.log(arrFilter);
console.log(filterArr2);
// find
// find as soon as condition meet
var arrayFind = [22, 33, 44];
var arrFind = arrayFind.find(function (val) {
    if (val > 13 && val !== 33) {
        return val;
    }
});
console.log(arrFind);
// indexOf
// find element index number,
// if does nt find then -1
var indexOffArr = [33, 44, 66];
var indexOff = indexOffArr.indexOf(100);
console.log(indexOff);
//object
var obj = {
    nm: "Harsh",
    age: 44,
};
var gama = "game zone red";
var obj2 = {
    nm: "kareem",
    game: gama,
    round: 4,
};
console.log(obj2.game);
console.log(obj2["game"]);
// freeze
console.log(obj2.round);
obj2.round = 6;
// after applying Object.freeze(objectNmae)
Object.freeze(obj2);
obj2.round = 12;
console.log(obj2.round);
// const findLength
var findLength = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(findLength.length);
var fnLength = function (a, b) {
    console.log("fnLength");
};
console.log(fnLength.length);
//
var returnOne = function () {
    return "hi";
};
var returnTwo = function () {
    return "bye";
};
console.log(returnTwo());
console.log(returnOne());
// synchronous and asynchronus
// synchronus - code runs line by line
// asyn - code sits in a seprate stack and when syn code done then it runs
var getData = function () { return __awaiter(void 0, void 0, void 0, function () {
    var data, res;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch("https://randomuser.me/api")];
            case 1:
                data = _a.sent();
                return [4 /*yield*/, data.json()];
            case 2:
                res = _a.sent();
                console.log(res.results[0]);
                return [2 /*return*/];
        }
    });
}); };
getData();
var chalk_1 = require("chalk");
console.log(chalk_1.default.green("Success! The operation was completed."));
console.log(chalk_1.default.red("Error! Something went wrong."));
console.log(chalk_1.default.blue("Info: This is a useful message."));
console.log(chalk_1.default.yellow("Warning! Be careful."));
console.log(chalk_1.default.bgMagenta.white("Highlighted text with a background color."));
