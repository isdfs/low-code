"use strict";
/**
 * 会话管理器模块，用于管理用户会话。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionManager = void 0;
var SessionManager = /** @class */ (function () {
    function SessionManager(sessionKey) {
        this.sessionKey = sessionKey;
    }
    /**
     * 创建新的会话。
     * @param data 会话数据。
     */
    SessionManager.prototype.createSession = function (data) {
        localStorage.setItem(this.sessionKey, JSON.stringify(data));
    };
    /**
     * 获取当前会话数据。
     * @returns 当前会话数据，如果会话已过期或不存在则返回null。
     */
    SessionManager.prototype.getSession = function () {
        var sessionData = localStorage.getItem(this.sessionKey);
        if (!sessionData) {
            return null;
        }
        var session = JSON.parse(sessionData);
        if (Date.now() > session.expiresAt) {
            this.destroySession();
            return null;
        }
        return session;
    };
    /**
     * 销毁当前会话。
     */
    SessionManager.prototype.destroySession = function () {
        localStorage.removeItem(this.sessionKey);
    };
    /**
     * 检查会话是否有效。
     * @returns 如果会话有效，返回true；否则返回false。
     */
    SessionManager.prototype.isSessionValid = function () {
        return this.getSession() !== null;
    };
    return SessionManager;
}());
exports.SessionManager = SessionManager;
/**
 * 使用示例：
 * ```typescript
 * const sessionManager = new SessionManager('user_session');
 *
 * sessionManager.createSession({
 *   userId: '12345',
 *   token: 'abcdefg',
 *   expiresAt: Date.now() + 3600000, // 1小时后过期
 * });
 *
 * if (sessionManager.isSessionValid()) {
 *   console.log('会话有效:', sessionManager.getSession());
 * } else {
 *   console.log('会话已过期或不存在');
 * }
 *
 * sessionManager.destroySession();
 * ```
 */
