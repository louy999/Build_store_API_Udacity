"use strict";
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
var user_model_1 = __importDefault(require("../user.model"));
var database_1 = __importDefault(require("../../database"));
var userModel = new user_model_1.default();
describe('User Model', function () {
    describe('Test methods exist', function () {
        it('should have an index method', function () {
            expect(userModel.index).toBeDefined();
        });
        it('should have a show method', function () {
            expect(userModel.show).toBeDefined();
        });
        it('should have a create method', function () {
            expect(userModel.create).toBeDefined();
        });
        it('should have a delete method', function () {
            expect(userModel.delete).toBeDefined();
        });
        it('should have an Authenticate method', function () {
            expect(userModel.authenticate).toBeDefined();
        });
    });
    describe('Test Model logic', function () {
        var user = {
            email: 'test@test.com',
            userName: 'testUser',
            firstName: 'Test',
            lastName: 'User',
            password: 'test123'
        };
        afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
            var connection, sql;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, database_1.default.connect()];
                    case 1:
                        connection = _a.sent();
                        sql = 'DELETE FROM users; \nALTER SEQUENCE users_id_seq RESTART WITH 1;';
                        return [4, connection.query(sql)];
                    case 2:
                        _a.sent();
                        connection.release();
                        return [2];
                }
            });
        }); });
        it('Create method should return a User', function () { return __awaiter(void 0, void 0, void 0, function () {
            var createdUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.create(user)];
                    case 1:
                        createdUser = _a.sent();
                        expect(createdUser).toEqual({
                            id: createdUser.id,
                            email: 'test@test.com',
                            userName: 'testUser',
                            firstName: 'Test',
                            lastName: 'User'
                        });
                        return [2];
                }
            });
        }); });
        it('Index method should return All available users in DB', function () { return __awaiter(void 0, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.index()];
                    case 1:
                        users = _a.sent();
                        expect(users.length).toBe(1);
                        expect(users[0].userName).toBe('testUser');
                        return [2];
                }
            });
        }); });
        it('Show method should return testUser when called with ID (1)', function () { return __awaiter(void 0, void 0, void 0, function () {
            var returnedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.show(1)];
                    case 1:
                        returnedUser = _a.sent();
                        expect(returnedUser.id).toBe(1);
                        expect(returnedUser.email).toBe('test@test.com');
                        expect(returnedUser.userName).toBe('testUser');
                        expect(returnedUser.firstName).toBe('Test');
                        expect(returnedUser.lastName).toBe('User');
                        return [2];
                }
            });
        }); });
        it('Edit method should return a user with edited attributes', function () { return __awaiter(void 0, void 0, void 0, function () {
            var updatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.edit({
                            id: 1,
                            email: 'mo@mo.com',
                            userName: 'mohammedelzanaty',
                            firstName: 'Mohammed',
                            lastName: 'Elzanaty',
                            password: 'test123'
                        })];
                    case 1:
                        updatedUser = _a.sent();
                        expect(updatedUser.email).toBe('mo@mo.com');
                        expect(updatedUser.userName).toBe('mohammedelzanaty');
                        expect(updatedUser.firstName).toBe('Mohammed');
                        expect(updatedUser.lastName).toBe('Elzanaty');
                        return [2];
                }
            });
        }); });
        it('Authenticate method should return the authenticated user', function () { return __awaiter(void 0, void 0, void 0, function () {
            var authenticatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.authenticate('mohammedelzanaty', 'test123')];
                    case 1:
                        authenticatedUser = _a.sent();
                        if (authenticatedUser) {
                            expect(authenticatedUser.email).toBe('mo@mo.com');
                            expect(authenticatedUser.userName).toBe('mohammedelzanaty');
                            expect(authenticatedUser.firstName).toBe('Mohammed');
                            expect(authenticatedUser.lastName).toBe('Elzanaty');
                        }
                        return [2];
                }
            });
        }); });
        it('Authenticate method should return null for wrong credentials', function () { return __awaiter(void 0, void 0, void 0, function () {
            var authenticatedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.authenticate('mohammedelzanaty', 'fakeuser')];
                    case 1:
                        authenticatedUser = _a.sent();
                        expect(authenticatedUser).toBe(null);
                        return [2];
                }
            });
        }); });
        it('Delete method should delete user from DB', function () { return __awaiter(void 0, void 0, void 0, function () {
            var deletedUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, userModel.delete(1)];
                    case 1:
                        deletedUser = _a.sent();
                        expect(deletedUser.id).toBe(1);
                        return [2];
                }
            });
        }); });
    });
});
