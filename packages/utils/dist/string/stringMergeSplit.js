"use strict";
/**
 * @module StringMergeSplit
 * @description 提供字符串的合并与拆分功能，支持复杂的合并与拆分规则。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringMergeSplit = void 0;
var StringMergeSplit = /** @class */ (function () {
    function StringMergeSplit() {
    }
    /**
     * @description 将多个字符串合并成一个，使用指定的分隔符
     * @param parts 要合并的字符串数组
     * @param delimiter 分隔符
     * @returns 合并后的字符串
     * @example
     * const merged = StringMergeSplit.merge(['apple', 'banana', 'cherry'], ', ');
     * console.log('Merged:', merged); // 输出 "apple, banana, cherry"
     */
    StringMergeSplit.merge = function (parts, delimiter) {
        if (delimiter === void 0) { delimiter = ''; }
        return parts.join(delimiter);
    };
    /**
     * @description 根据指定的分隔符拆分字符串，支持保留分隔符
     * @param input 要拆分的字符串
     * @param delimiter 分隔符
     * @param keepDelimiter 是否保留分隔符
     * @returns 拆分后的字符串数组
     * @example
     * const parts = StringMergeSplit.split('apple,banana,cherry', ',', true);
     * console.log('Parts:', parts); // 输出 ["apple", ",", "banana", ",", "cherry"]
     */
    StringMergeSplit.split = function (input, delimiter, keepDelimiter) {
        if (keepDelimiter === void 0) { keepDelimiter = false; }
        var parts = input.split(delimiter);
        if (!keepDelimiter)
            return parts;
        var result = [];
        for (var i = 0; i < parts.length; i++) {
            result.push(parts[i]);
            if (i < parts.length - 1) {
                result.push(delimiter);
            }
        }
        return result;
    };
    /**
     * @description 合并字符串数组并去除重复部分
     * @param parts 要合并的字符串数组
     * @returns 合并且去重后的字符串
     * @example
     * const mergedUnique = StringMergeSplit.mergeUnique(['apple', 'apple', 'banana', 'cherry', 'banana']);
     * console.log('Merged Unique:', mergedUnique); // 输出 "apple,banana,cherry"
     */
    StringMergeSplit.mergeUnique = function (parts) {
        var uniqueParts = Array.from(new Set(parts));
        return uniqueParts.join(',');
    };
    return StringMergeSplit;
}());
exports.StringMergeSplit = StringMergeSplit;
// 示例用法
/*
const merged = StringMergeSplit.merge(['apple', 'banana', 'cherry'], ', ');
console.log('Merged:', merged); // 输出 "apple, banana, cherry"

const parts = StringMergeSplit.split('apple,banana,cherry', ',', true);
console.log('Parts:', parts); // 输出 ["apple", ",", "banana", ",", "cherry"]

const mergedUnique = StringMergeSplit.mergeUnique(['apple', 'apple', 'banana', 'cherry', 'banana']);
console.log('Merged Unique:', mergedUnique); // 输出 "apple,banana,cherry"
*/
