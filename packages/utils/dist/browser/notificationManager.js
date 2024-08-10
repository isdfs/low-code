"use strict";
/**
 * 浏览器通知管理模块，提供统一的接口来处理浏览器通知。
 * @module NotificationManager
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
var NotificationManager = /** @class */ (function () {
    function NotificationManager() {
        if (!('Notification' in window)) {
            throw new Error('浏览器不支持通知功能');
        }
    }
    /**
     * 请求显示通知的权限。
     * @returns {Promise<NotificationPermission>} 用户的权限状态。
     */
    NotificationManager.prototype.requestPermission = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Notification.requestPermission()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * 显示通知。
     * @param {NotificationOptions} options - 通知的选项。
     * @returns {Notification | null} 创建的通知对象，或者在权限不足时返回null。
     */
    NotificationManager.prototype.showNotification = function (options) {
        if (Notification.permission !== 'granted') {
            console.warn('没有通知权限');
            return null;
        }
        return new Notification(options.title, {
            body: options.body,
            icon: options.icon,
            tag: options.tag
        });
    };
    /**
     * 监听通知点击事件。
     * @param {Notification} notification - 通知对象。
     * @param {() => void} callback - 用户点击通知时触发的回调函数。
     */
    NotificationManager.prototype.onClick = function (notification, callback) {
        notification.onclick = callback;
    };
    return NotificationManager;
}());
var notificationManager = new NotificationManager();
exports.default = notificationManager;
