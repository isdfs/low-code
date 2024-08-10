"use strict";
/**
 * API客户端模块，支持GET、POST、PUT、DELETE请求，以及请求和响应拦截器。
 */
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
exports.ApiClient = void 0;
var ApiClient = /** @class */ (function () {
    function ApiClient(config) {
        this.config = config;
    }
    /**
     * 发送GET请求。
     * @param endpoint 请求的API端点。
     * @param params 查询参数。
     * @returns 返回API响应结果。
     */
    ApiClient.prototype.get = function (endpoint, params) {
        return __awaiter(this, void 0, void 0, function () {
            var url;
            return __generator(this, function (_a) {
                url = new URL("".concat(this.config.baseUrl, "/").concat(endpoint));
                if (params) {
                    Object.entries(params).forEach(function (_a) {
                        var key = _a[0], value = _a[1];
                        return url.searchParams.append(key, value);
                    });
                }
                return [2 /*return*/, this.request(url.toString(), 'GET')];
            });
        });
    };
    /**
     * 发送POST请求。
     * @param endpoint 请求的API端点。
     * @param body 请求体数据。
     * @returns 返回API响应结果。
     */
    ApiClient.prototype.post = function (endpoint, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("".concat(this.config.baseUrl, "/").concat(endpoint), 'POST', body)];
            });
        });
    };
    /**
     * 发送PUT请求。
     * @param endpoint 请求的API端点。
     * @param body 请求体数据。
     * @returns 返回API响应结果。
     */
    ApiClient.prototype.put = function (endpoint, body) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("".concat(this.config.baseUrl, "/").concat(endpoint), 'PUT', body)];
            });
        });
    };
    /**
     * 发送DELETE请求。
     * @param endpoint 请求的API端点。
     * @returns 返回API响应结果。
     */
    ApiClient.prototype.delete = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.request("".concat(this.config.baseUrl, "/").concat(endpoint), 'DELETE')];
            });
        });
    };
    ApiClient.prototype.request = function (url, method, body) {
        return __awaiter(this, void 0, void 0, function () {
            var config, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        config = {
                            method: method,
                            headers: __assign({ 'Content-Type': 'application/json' }, (this.config.headers || {})),
                        };
                        if (body) {
                            config.body = JSON.stringify(body);
                        }
                        if (this.config.requestInterceptor) {
                            config = this.config.requestInterceptor(config);
                        }
                        return [4 /*yield*/, fetch(url, config)];
                    case 1:
                        response = _a.sent();
                        if (!this.config.responseInterceptor) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.config.responseInterceptor(response)];
                    case 2:
                        response = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!response.ok) {
                            throw new Error("\u8BF7\u6C42\u5931\u8D25\uFF0C\u72B6\u6001\u7801: ".concat(response.status));
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    return ApiClient;
}());
exports.ApiClient = ApiClient;
/**
 * 使用示例：
 * ```typescript
 * const apiClient = new ApiClient({
 *   baseUrl: 'https://api.example.com',
 *   headers: {
 *     Authorization: 'Bearer your-token',
 *   },
 *   requestInterceptor: (config) => {
 *     console.log('请求拦截器:', config);
 *     return config;
 *   },
 *   responseInterceptor: async (response) => {
 *     console.log('响应拦截器:', response);
 *     return response;
 *   },
 * });
 *
 * const data = await apiClient.get('users', { page: '1' });
 * console.log(data);
 * ```
 */
