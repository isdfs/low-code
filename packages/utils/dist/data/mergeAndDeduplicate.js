"use strict";
// src/data/mergeAndDeduplicate.ts
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeAndDeduplicate = void 0;
/**
 * 合并两个数组并去重
 *
 * @template T
 * @param {T[]} arr1 - 第一个数组
 * @param {T[]} arr2 - 第二个数组
 * @returns {T[]} 合并且去重后的数组
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [3, 4, 5];
 * const result = mergeAndDeduplicate(array1, array2);
 * console.log(result); // [1, 2, 3, 4, 5]
 */
function mergeAndDeduplicate(arr1, arr2) {
    var set = new Set(__spreadArray(__spreadArray([], arr1, true), arr2, true));
    return Array.from(set);
}
exports.mergeAndDeduplicate = mergeAndDeduplicate;
