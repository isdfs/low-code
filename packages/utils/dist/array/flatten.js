"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flatten = void 0;
/**
 * 将嵌套的数组展平成一个单一数组。
 *
 * @param array - 要展平的数组。
 * @returns 展平后的数组。
 */
function flatten(array) {
    return array.reduce(function (acc, val) { return Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val); }, []);
}
exports.flatten = flatten;
