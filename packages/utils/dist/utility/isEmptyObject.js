"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = void 0;
/**
 * 检查对象是否为空（没有可枚举的属性）。
 *
 * @param {object} obj - 要检查的对象。
 * @returns {boolean} 如果对象为空则返回true，否则返回false。
 *
 * @example
 * const isEmpty = isEmptyObject({});
 * console.log(isEmpty); // true
 */
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}
exports.isEmptyObject = isEmptyObject;
