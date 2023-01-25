"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var _a = process.env, NODE_ENV = _a.NODE_ENV, PORT = _a.PORT, DB_HOST = _a.DB_HOST, DB_PORT = _a.DB_PORT, DB_DATABASE = _a.DB_DATABASE, DB_DATABASE_TEST = _a.DB_DATABASE_TEST, DB_DATABASE_USER = _a.DB_DATABASE_USER, DB_DATABASE_PASS = _a.DB_DATABASE_PASS, BCRYPT_PASSWORD = _a.BCRYPT_PASSWORD, SALT_ROUNDS = _a.SALT_ROUNDS, TOKEN_SECRET = _a.TOKEN_SECRET;
exports.default = {
    port: PORT,
    host: DB_HOST,
    dbPort: DB_PORT,
    database: NODE_ENV === 'dev' ? DB_DATABASE : DB_DATABASE_TEST,
    user: DB_DATABASE_USER,
    pass: DB_DATABASE_PASS,
    pepper: BCRYPT_PASSWORD,
    salt: SALT_ROUNDS,
    tokenSecret: TOKEN_SECRET,
};
