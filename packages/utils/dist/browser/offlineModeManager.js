"use strict";
/**
 * 浏览器离线模式管理模块，提供离线模式下的资源缓存和加载管理功能。
 * @module OfflineModeManager
 */
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
        while (_) try {
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
var OfflineModeManager = /** @class */ (function () {
    function OfflineModeManager(cacheName) {
        if (cacheName === void 0) { cacheName = 'offline-cache'; }
        this.cache = null;
        this.cacheName = cacheName;
        this.initCache();
    }
    OfflineModeManager.prototype.initCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!('caches' in window)) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, caches.open(this.cacheName)];
                    case 1:
                        _a.cache = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        console.warn('Browser does not support the Cache API');
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OfflineModeManager.prototype.cacheResource = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cache)
                            return [2 /*return*/];
                        return [4 /*yield*/, fetch(url)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, this.cache.put(url, response.clone())];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfflineModeManager.prototype.loadResource = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cache)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, this.cache.match(url)];
                    case 1:
                        response = _a.sent();
                        if (response)
                            return [2 /*return*/, response];
                        return [2 /*return*/, fetch(url)];
                }
            });
        });
    };
    OfflineModeManager.prototype.clearCache = function () {
        return __awaiter(this, void 0, void 0, function () {
            var keys, _i, keys_1, key;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cache)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.cache.keys()];
                    case 1:
                        keys = _a.sent();
                        _i = 0, keys_1 = keys;
                        _a.label = 2;
                    case 2:
                        if (!(_i < keys_1.length)) return [3 /*break*/, 5];
                        key = keys_1[_i];
                        return [4 /*yield*/, this.cache.delete(key)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    OfflineModeManager.prototype.isResourceCached = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.cache)
                            return [2 /*return*/, false];
                        return [4 /*yield*/, this.cache.match(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response !== undefined];
                }
            });
        });
    };
    return OfflineModeManager;
}());
// 实例化并使用离线模式管理器
var offlineModeManager = new OfflineModeManager();
exports.default = offlineModeManager;
