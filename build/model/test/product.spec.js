"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var product_model_1 = __importDefault(require("../product.model"));
var database_1 = __importDefault(require("../../database"));
var productModel = new product_model_1.default();
describe('Product Model', function () {
    describe('Test methods exist', function () {
        it('should have an index method', function () {
            expect(productModel.index).toBeDefined();
        });
        it('should have a show method', function () {
            expect(productModel.show).toBeDefined();
        });
        it('should have a create method', function () {
            expect(productModel.create).toBeDefined();
        });
        it('should have a delete method', function () {
            expect(productModel.delete).toBeDefined();
        });
    });
    describe('Test Model logic', function () {
        var product = {
            name: 'product name',
            description: 'product description',
            price: 9.99,
            category: 'Electronics.'
        };
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var connection, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'DELETE FROM products;\n ALTER SEQUENCE products_id_seq RESTART WITH 1;\n';
                        return [4, connection.query(sql)];
                    case 2:
                        _a.sent();
                        connection.release();
                        return [2];
                }
            });
        }); });
        it('Create method should add a product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var createdProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, productModel.create(product)];
                    case 1:
                        createdProduct = _a.sent();
                        expect(createdProduct).toEqual(__assign(__assign({}, product), { id: createdProduct.id, price: createdProduct.price }));
                        return [2];
                }
            });
        }); });
        it('Index method should return a list of products', function () { return __awaiter(void 0, void 0, void 0, function () {
            var products;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, productModel.index()];
                    case 1:
                        products = _a.sent();
                        expect(products.length).toBe(1);
                        expect(products[0].name).toBe('product name');
                        return [2];
                }
            });
        }); });
        it('Show method should return the correct product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var returnedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, productModel.show(1)];
                    case 1:
                        returnedProduct = _a.sent();
                        expect(returnedProduct).toEqual(__assign(__assign({}, product), { id: 1, price: returnedProduct.price }));
                        return [2];
                }
            });
        }); });
        it('Edit method should return a product with edited attributes', function () { return __awaiter(void 0, void 0, void 0, function () {
            var returnedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, productModel.edit({
                            id: 1,
                            name: 'product name edited',
                            description: 'product description edited',
                            price: 10,
                            category: 'Electronics.'
                        })];
                    case 1:
                        returnedProduct = _a.sent();
                        expect(returnedProduct.name).toBe('product name edited');
                        expect(returnedProduct.description).toBe('product description edited');
                        return [2];
                }
            });
        }); });
        it('Delete method should remove the product', function () { return __awaiter(void 0, void 0, void 0, function () {
            var deletedProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, productModel.delete(1)];
                    case 1:
                        deletedProduct = _a.sent();
                        expect(deletedProduct.id).toBe(1);
                        return [2];
                }
            });
        }); });
    });
});
