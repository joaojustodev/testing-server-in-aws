"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
exports.app = app;
app.use(cors_1.default());
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).json({ message: "OK!" });
});
app.get("/:name", (req, res) => {
    const { name } = req.params;
    res.status(201).json({ messaje: `Hellow ${name}` });
});
