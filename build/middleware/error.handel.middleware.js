"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var errorHandelMiddleware = function (error, _req, res, _next) {
    var status = error.status || 500;
    var message = error.message || 'something error please check yourself';
    res.status(status).json({
        status: 'error',
        message: message,
    });
};
exports.default = errorHandelMiddleware;
