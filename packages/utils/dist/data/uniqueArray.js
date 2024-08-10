"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniqueArray = void 0;
/**
 * 从数组中移除重复项，返回去重后的新数组。
 * @param array - 要去重的数组。
 * @returns 返回去重后的数组。
 */
function uniqueArray(array) {
    return Array.from(new Set(array));
}
exports.uniqueArray = uniqueArray;
