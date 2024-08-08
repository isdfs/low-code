"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique = void 0;
/**
 * 获取数组中的唯一值，去除重复项。
 *
 * @param {T[]} array - 要处理的数组。
 * @returns {T[]} 包含唯一值的新数组。
 *
 * @example
 * const uniqueArray = unique([1, 2, 2, 3, 4, 4]);
 * console.log(uniqueArray); // [1, 2, 3, 4]
 */
function unique(array) {
    return Array.from(new Set(array));
}
exports.unique = unique;
