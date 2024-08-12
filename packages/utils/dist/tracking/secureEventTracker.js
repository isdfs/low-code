"use strict";
/**
 * 数据加密与安全性管理模块。
 *
 * 该模块在发送埋点数据前对其进行加密，确保数据在传输过程中不会被篡改或泄露。
 *
 * @example
 * ```
 * const secureTracker = new SecureEventTracker('/secure-track', 'my-secret-key');
 * secureTracker.trackEvent('login_attempt', { username: 'user123' });
 * ```
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecureEventTracker = void 0;
var crypto_js_1 = __importDefault(require("crypto-js"));
var SecureEventTracker = /** @class */ (function () {
    function SecureEventTracker(url, secretKey) {
        this.url = url;
        this.secretKey = secretKey;
    }
    /**
     * 跟踪事件并对数据进行加密后发送到服务器。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    SecureEventTracker.prototype.trackEvent = function (eventName, eventData) {
        var data = __assign({ event: eventName, timestamp: new Date().toISOString() }, eventData);
        var encryptedData = this.encryptData(JSON.stringify(data));
        this.sendEncryptedData(encryptedData);
    };
    /**
     * 使用AES算法对数据进行加密。
     * @param {string} data - 要加密的字符串数据。
     * @returns {string} 返回加密后的字符串。
     */
    SecureEventTracker.prototype.encryptData = function (data) {
        return crypto_js_1.default.AES.encrypt(data, this.secretKey).toString();
    };
    /**
     * 发送加密后的数据到服务器。
     * @param {string} encryptedData - 加密后的字符串数据。
     * @returns {void}
     */
    SecureEventTracker.prototype.sendEncryptedData = function (encryptedData) {
        fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ encryptedData: encryptedData }),
        }).catch(function (error) { return console.error('发送加密数据出错:', error); });
    };
    return SecureEventTracker;
}());
exports.SecureEventTracker = SecureEventTracker;
