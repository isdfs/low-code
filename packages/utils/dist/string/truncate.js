"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = void 0;
/**
 * 截断字符串并添加省略号（如果需要）。
 *
 * @param {string} str - 要截断的字符串。
 * @param {number} maxLength - 字符串的最大长度。
 * @param {string} [suffix='...'] - 要添加的后缀（默认是'...'）。
 * @returns {string} 截断后的字符串。
 *
 * @example
 * const truncated = truncate('This is a long string', 10);
 * console.log(truncated); // 'This is...'
 */
function truncate(str, maxLength, suffix) {
    if (suffix === void 0) { suffix = '...'; }
    if (str.length > maxLength) {
        return str.slice(0, maxLength) + suffix;
    }
    return str;
}
exports.truncate = truncate;
