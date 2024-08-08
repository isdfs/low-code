"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone2 = void 0;
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
function deepClone2(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepClone2 = deepClone2;
