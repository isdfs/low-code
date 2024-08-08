"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyObject = exports.deepClone2 = void 0;
/**
 * 深度克隆一个对象或数组。
 *
 * @param {T} obj - 要克隆的对象或数组。
 * @returns {T} 克隆后的新对象或数组。
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * console.log(clone); // { a: 1, b: { c: 2 } }
 */
var deepClone_1 = require("./deepClone");
Object.defineProperty(exports, "deepClone2", { enumerable: true, get: function () { return deepClone_1.deepClone2; } });
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
var isEmptyObject_1 = require("./isEmptyObject");
Object.defineProperty(exports, "isEmptyObject", { enumerable: true, get: function () { return isEmptyObject_1.isEmptyObject; } });
