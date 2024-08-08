"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalize = void 0;
/**
 * 将字符串的首字母大写。
 *
 * @param str - 要转换的字符串。
 * @returns 首字母大写后的字符串。
 */
function capitalize(str) {
    if (!str)
        return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
exports.capitalize = capitalize;
