"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseString = void 0;
/**
 * 反转字符串。
 *
 * @param {string} str - 要反转的字符串。
 * @returns {string} 反转后的字符串。
 *
 * @example
 * const reversed = reverseString('hello');
 * console.log(reversed); // 'olleh'
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}
exports.reverseString = reverseString;
