"use strict";
/**
 * 浏览器 Service Worker 管理模块，提供 Service Worker 的注册、更新、移除等功能。
 * @module ServiceWorkerManager
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
var ServiceWorkerManager = /** @class */ (function () {
    function ServiceWorkerManager(swUrl) {
        if (swUrl === void 0) { swUrl = '/service-worker.js'; }
        this.swUrl = swUrl;
    }
    /**
     * 注册 Service Worker。
     * @returns {Promise<ServiceWorkerRegistration | null>} 返回 Service Worker 注册信息。
     */
    ServiceWorkerManager.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registration, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!('serviceWorker' in navigator)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.serviceWorker.register(this.swUrl)];
                    case 2:
                        registration = _a.sent();
                        console.log('Service Worker registered with scope:', registration.scope);
                        this.addLifecycleListeners(registration);
                        return [2 /*return*/, registration];
                    case 3:
                        error_1 = _a.sent();
                        console.error('Service Worker registration failed:', error_1);
                        return [2 /*return*/, null];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        console.warn('Service Worker is not supported in this browser.');
                        return [2 /*return*/, null];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 更新 Service Worker。
     */
    ServiceWorkerManager.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegistration()];
                    case 1:
                        registration = _a.sent();
                        if (registration) {
                            registration.update();
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 移除 Service Worker。
     */
    ServiceWorkerManager.prototype.unregister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var registration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getRegistration()];
                    case 1:
                        registration = _a.sent();
                        if (!registration) return [3 /*break*/, 3];
                        return [4 /*yield*/, registration.unregister()];
                    case 2:
                        _a.sent();
                        console.log('Service Worker unregistered.');
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 获取当前 Service Worker 的注册信息。
     * @returns {Promise<ServiceWorkerRegistration | null>} 返回 Service Worker 注册信息。
     */
    ServiceWorkerManager.prototype.getRegistration = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.serviceWorker.getRegistration(this.swUrl)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 添加 Service Worker 生命周期事件监听器。
     * @param {ServiceWorkerRegistration} registration - Service Worker 注册信息。
     */
    ServiceWorkerManager.prototype.addLifecycleListeners = function (registration) {
        if (registration.installing) {
            console.log('Service Worker installing');
            registration.installing.onstatechange = this.handleStateChange;
        }
        if (registration.waiting) {
            console.log('Service Worker installed and waiting');
            registration.waiting.onstatechange = this.handleStateChange;
        }
        if (registration.active) {
            console.log('Service Worker active');
            registration.active.onstatechange = this.handleStateChange;
        }
    };
    /**
     * 处理 Service Worker 状态变化事件。
     * @param {Event} event - 事件对象。
     */
    ServiceWorkerManager.prototype.handleStateChange = function (event) {
        var sw = event.target;
        console.log('Service Worker state changed to:', sw.state);
    };
    return ServiceWorkerManager;
}());
exports.default = ServiceWorkerManager;
