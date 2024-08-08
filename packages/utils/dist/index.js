"use strict";
// src/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = isNumber;
exports.capitalize = capitalize;
exports.debounce = debounce;
/**
 * 检查一个值是否为数字
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是数字则返回 true，否则返回 false
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
/**
 * 将字符串的首字母大写
 * @param {string} str - 要转换的字符串
 * @returns {string} - 首字母大写后的字符串
 */
function capitalize(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 延迟时间，单位为毫秒
 * @returns {Function} - 防抖后的函数
 */
function debounce(func, wait) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            clearTimeout(timeout);
            func.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
