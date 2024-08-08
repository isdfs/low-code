"use strict";
// src/security/encrypt.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrypt = exports.encrypt = void 0;
/**
 * 简单的加密函数（Caesar Cipher）
 *
 * @param {string} text - 要加密的文本
 * @param {number} shift - 位移量
 * @returns {string} 加密后的文本
 *
 * @example
 * const encrypted = encrypt('hello', 3); // khoor
 */
function encrypt(text, shift) {
    return text.split('').map(function (char) {
        var code = char.charCodeAt(0);
        return String.fromCharCode(code + shift);
    }).join('');
}
exports.encrypt = encrypt;
/**
* 简单的解密函数（Caesar Cipher）
*
* @param {string} text - 要解密的文本
* @param {number} shift - 位移量
* @returns {string} 解密后的文本
*
* @example
* const decrypted = decrypt('khoor', 3); // hello
*/
function decrypt(text, shift) {
    return encrypt(text, -shift);
}
exports.decrypt = decrypt;
