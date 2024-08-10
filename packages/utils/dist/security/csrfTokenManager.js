"use strict";
/**
 * CSRF令牌管理器模块，用于生成和验证CSRF令牌，防止跨站请求伪造攻击。
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSRFTokenManager = void 0;
var crypto = __importStar(require("crypto"));
var CSRFTokenManager = /** @class */ (function () {
    /**
     * 创建一个CSRF令牌管理器实例。
     * @param secretKey 用于生成和验证CSRF令牌的密钥。
     */
    function CSRFTokenManager(secretKey) {
        this.secretKey = secretKey;
    }
    /**
     * 生成一个新的CSRF令牌。
     * @param sessionId 用户的会话ID，用于绑定令牌和会话。
     * @returns 生成的CSRF令牌。
     */
    CSRFTokenManager.prototype.generateToken = function (sessionId) {
        var timestamp = Math.floor(Date.now() / 1000).toString();
        var data = "".concat(sessionId, ":").concat(timestamp);
        var signature = this.createSignature(data);
        return "".concat(data, ":").concat(signature);
    };
    /**
     * 验证CSRF令牌的有效性。
     * @param token 要验证的CSRF令牌。
     * @param sessionId 用户的会话ID，用于验证令牌是否与会话绑定。
     * @param maxAge 最大有效期，单位为秒，默认3600秒（1小时）。
     * @returns 如果令牌有效，返回true；否则返回false。
     */
    CSRFTokenManager.prototype.verifyToken = function (token, sessionId, maxAge) {
        if (maxAge === void 0) { maxAge = 3600; }
        var _a = token.split(':'), tokenSessionId = _a[0], timestamp = _a[1], signature = _a[2];
        if (tokenSessionId !== sessionId) {
            return false;
        }
        var data = "".concat(tokenSessionId, ":").concat(timestamp);
        var expectedSignature = this.createSignature(data);
        if (signature !== expectedSignature) {
            return false;
        }
        var currentTime = Math.floor(Date.now() / 1000);
        var tokenTime = parseInt(timestamp, 10);
        if (currentTime - tokenTime > maxAge) {
            return false;
        }
        return true;
    };
    /**
     * 创建签名。
     * @param data 要签名的数据。
     * @returns 签名字符串。
     * @private
     */
    CSRFTokenManager.prototype.createSignature = function (data) {
        return crypto.createHmac('sha256', this.secretKey).update(data).digest('hex');
    };
    return CSRFTokenManager;
}());
exports.CSRFTokenManager = CSRFTokenManager;
/**
 * 使用示例：
 * ```typescript
 * const csrfManager = new CSRFTokenManager('your-secret-key');
 * const sessionId = 'user-session-id';
 * const token = csrfManager.generateToken(sessionId);
 * console.log(`生成的CSRF令牌: ${token}`);
 *
 * const isValid = csrfManager.verifyToken(token, sessionId);
 * console.log(`令牌是否有效: ${isValid}`);
 * ```
 */
