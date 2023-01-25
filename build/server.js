"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var config_1 = __importDefault(require("./config"));
var error_handel_middleware_1 = __importDefault(require("./middleware/error.handel.middleware"));
var routes_1 = __importDefault(require("./routes"));
console.log(config_1.default);
var app = (0, express_1.default)();
var port = config_1.default.port || 3000;
app.use((0, morgan_1.default)('common'));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use('/api', routes_1.default);
app.get('/test', function (_req, res) {
    res.json({
        message: 'hello',
    });
});
app.use(error_handel_middleware_1.default);
app.listen(port, function () {
    console.log("server is start with port :".concat(port));
});
