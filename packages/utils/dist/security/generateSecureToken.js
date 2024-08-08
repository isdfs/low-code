"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSecureToken = void 0;
/**
 * 生成一个安全的随机令牌。
 * @param length - 令牌的长度，默认为32。
 * @returns 生成的随机令牌字符串。
 */
function generateSecureToken(length) {
    if (length === void 0) { length = 32; }
    var array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array, function (byte) { return byte.toString(16).padStart(2, '0'); }).join('');
}
exports.generateSecureToken = generateSecureToken;
