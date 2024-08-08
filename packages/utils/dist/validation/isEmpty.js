"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
/**
 * 检查对象、数组、字符串或 Map 是否为空
 *
 * @param {any} value - 需要检查的值
 * @returns {boolean} 返回是否为空
 *
 * @example
 * const empty = isEmpty([]);
 * console.log(empty); // true
 */
function isEmpty(value) {
    if (value == null)
        return true;
    if (Array.isArray(value) || typeof value === 'string')
        return value.length === 0;
    if (value instanceof Map || value instanceof Set)
        return value.size === 0;
    if (typeof value === 'object')
        return Object.keys(value).length === 0;
    return false;
}
exports.isEmpty = isEmpty;
