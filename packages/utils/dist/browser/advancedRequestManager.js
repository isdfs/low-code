"use strict";
/**
 * 高级网络请求管理模块，提供请求中断、重试、并发控制和缓存等功能。
 * @module AdvancedRequestManager
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
var AdvancedRequestManager = /** @class */ (function () {
    function AdvancedRequestManager() {
        this.controller = null;
    }
    /**
     * 发送网络请求，支持中断、重试和超时设置。
     * @param {string} url - 请求的URL。
     * @param {RequestOptions} options - 请求的选项。
     * @returns {Promise<Response>} 请求的响应对象。
     */
    AdvancedRequestManager.prototype.sendRequest = function (url, options) {
        return __awaiter(this, void 0, void 0, function () {
            var method, headers, body, _a, retries, _b, cache, _c, timeout, attempt, response, error_1;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        method = options.method, headers = options.headers, body = options.body, _a = options.retries, retries = _a === void 0 ? 3 : _a, _b = options.cache, cache = _b === void 0 ? false : _b, _c = options.timeout, timeout = _c === void 0 ? 5000 : _c;
                        this.controller = new AbortController();
                        attempt = 0;
                        _d.label = 1;
                    case 1:
                        if (!(attempt < retries)) return [3 /*break*/, 6];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.fetchWithTimeout(url, {
                                method: method,
                                headers: headers,
                                body: JSON.stringify(body),
                                signal: this.controller.signal
                            }, timeout)];
                    case 3:
                        response = _d.sent();
                        if (cache) {
                            this.cacheResponse(url, response.clone());
                        }
                        return [2 /*return*/, response];
                    case 4:
                        error_1 = _d.sent();
                        if (attempt === retries - 1) {
                            throw error_1;
                        }
                        return [3 /*break*/, 5];
                    case 5:
                        attempt++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 中断当前请求。
     */
    AdvancedRequestManager.prototype.abortRequest = function () {
        if (this.controller) {
            this.controller.abort();
        }
    };
    /**
     * 带有超时的 fetch 请求。
     * @param {string} url - 请求的URL。
     * @param {RequestInit} options - 请求的初始化选项。
     * @param {number} timeout - 超时时间，单位为毫秒。
     * @returns {Promise<Response>} 请求的响应对象。
     */
    AdvancedRequestManager.prototype.fetchWithTimeout = function (url, options, timeout) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var timer = setTimeout(function () {
                var _a;
                (_a = _this.controller) === null || _a === void 0 ? void 0 : _a.abort();
                reject(new Error('请求超时'));
            }, timeout);
            fetch(url, options)
                .then(function (response) {
                clearTimeout(timer);
                resolve(response);
            })
                .catch(function (error) {
                clearTimeout(timer);
                reject(error);
            });
        });
    };
    /**
     * 缓存请求的响应。
     * @param {string} url - 请求的URL。
     * @param {Response} response - 请求的响应对象。
     */
    AdvancedRequestManager.prototype.cacheResponse = function (url, response) {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, caches.open('request-cache')];
                    case 1:
                        cache = _a.sent();
                        return [4 /*yield*/, cache.put(url, response)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 从缓存中获取响应。
     * @param {string} url - 请求的URL。
     * @returns {Promise<Response | null>} 缓存的响应对象，若不存在则返回 null。
     */
    AdvancedRequestManager.prototype.getCachedResponse = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var cache;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, caches.open('request-cache')];
                    case 1:
                        cache = _a.sent();
                        return [4 /*yield*/, cache.match(url)];
                    case 2: return [2 /*return*/, (_a.sent()) || null];
                }
            });
        });
    };
    return AdvancedRequestManager;
}());
var requestManager = new AdvancedRequestManager();
exports.default = requestManager;
