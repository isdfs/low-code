"use strict";
/**
 * @module StringSearch
 * @description 提供字符串的高级查找与比较功能，支持模糊匹配、忽略大小写的比较、包含关系等操作。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.similarity = exports.findFirstUniqueChar = exports.fuzzyContains = exports.equalsIgnoreCase = void 0;
/**
 * @description 忽略大小写的字符串比较
 * @param str1 字符串1
 * @param str2 字符串2
 * @returns 如果两个字符串相等，返回 true；否则返回 false
 * @example
 * ```typescript
 * const result = StringSearch.equalsIgnoreCase('Hello', 'hello');
 * console.log(result); // 输出 true
 * ```
 */
function equalsIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
exports.equalsIgnoreCase = equalsIgnoreCase;
/**
* @description 模糊查找字符串，返回是否包含目标字符串
* @param input 要查找的字符串
* @param target 目标字符串
* @returns 如果包含目标字符串，返回 true；否则返回 false
* @example
* ```typescript
* const result = StringSearch.fuzzyContains('abcdef', 'bcd');
* console.log(result); // 输出 true
* ```
*/
function fuzzyContains(input, target) {
    var regex = new RegExp(target.split('').join('.*?'), 'i');
    return regex.test(input);
}
exports.fuzzyContains = fuzzyContains;
/**
* @description 查找字符串的第一个非重复字符
* @param input 要查找的字符串
* @returns 第一个非重复字符，如果没有非重复字符则返回 null
* @example
* ```typescript
* const result = StringSearch.findFirstUniqueChar('swiss');
* console.log(result); // 输出 'w'
* ```
*/
function findFirstUniqueChar(input) {
    var charCount = {};
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var char = input_1[_i];
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (var _a = 0, input_2 = input; _a < input_2.length; _a++) {
        var char = input_2[_a];
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
exports.findFirstUniqueChar = findFirstUniqueChar;
/**
* @description 计算两个字符串的相似度，使用 Levenshtein 距离算法
* @param str1 字符串1
* @param str2 字符串2
* @returns 两个字符串的相似度，值范围从 0.0 到 1.0
* @example
* ```typescript
* const result = StringSearch.similarity('kitten', 'sitting');
* console.log(result); // 输出 0.5714285714285714
* ```
*/
function similarity(str1, str2) {
    var len1 = str1.length;
    var len2 = str2.length;
    var dp = [];
    for (var i = 0; i <= len1; i++) {
        dp[i] = [i];
    }
    for (var j = 0; j <= len2; j++) {
        dp[0][j] = j;
    }
    for (var i = 1; i <= len1; i++) {
        for (var j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    var distance = dp[len1][len2];
    return 1 - distance / Math.max(len1, len2);
}
exports.similarity = similarity;
