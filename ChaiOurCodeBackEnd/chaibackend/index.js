"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// const express = require("express");
require("dotenv").config();
const app = (0, express_1.default)();
const port = process.env.PORT || 4000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// Always use /with path like /twitter
app.get("/twitter", (req, res) => {
    res.send("Rabab");
});
// you can send h1 to
app.get("/login", (req, res) => {
    res.send("<h1>this is h1<h1>");
});
const notesApi = [
    {
        nm: "ghasdj",
        basd: "asdnvabsnd",
    },
    {
        nm: "ghasdj",
        basd: "asdnvabsnd",
    },
    {
        nm: "ghasdj",
        basd: "asdnvabsnd",
    },
];
app.get("/apiNotes", (req, res) => {
    res.json(notesApi);
});
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
