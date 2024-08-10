"use strict";
/**
 * @module StringSimilarity
 * @description 提供字符串相似度比较功能，支持多种相似度计算算法，包括 Levenshtein 距离、Jaccard 相似系数等。
 */
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
exports.StringSimilarity = void 0;
var StringSimilarity = /** @class */ (function () {
    function StringSimilarity() {
    }
    /**
     * @description 计算两个字符串之间的 Levenshtein 距离
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 两个字符串之间的 Levenshtein 距离
     * @example
     * const distance = StringSimilarity.levenshteinDistance('kitten', 'sitting');
     * console.log('Levenshtein Distance:', distance); // 输出 3
     */
    StringSimilarity.levenshteinDistance = function (str1, str2) {
        var matrix = [];
        var len1 = str1.length;
        var len2 = str2.length;
        for (var i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }
        for (var j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }
        for (var i = 1; i <= len1; i++) {
            for (var j = 1; j <= len2; j++) {
                if (str1[i - 1] === str2[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1);
                }
            }
        }
        return matrix[len1][len2];
    };
    /**
     * @description 计算两个字符串的 Jaccard 相似系数
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 两个字符串的 Jaccard 相似系数，范围在 0 到 1 之间
     * @example
     * const similarity = StringSimilarity.jaccardSimilarity('night', 'nacht');
     * console.log('Jaccard Similarity:', similarity); // 输出 0.2
     */
    StringSimilarity.jaccardSimilarity = function (str1, str2) {
        var set1 = new Set(str1.split(''));
        var set2 = new Set(str2.split(''));
        var intersection = new Set(__spreadArray([], set1, true).filter(function (x) { return set2.has(x); }));
        var union = new Set(__spreadArray(__spreadArray([], set1, true), set2, true));
        return intersection.size / union.size;
    };
    /**
     * @description 计算两个字符串的余弦相似度
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 两个字符串的余弦相似度，范围在 0 到 1 之间
     * @example
     * const cosineSimilarity = StringSimilarity.cosineSimilarity('hello world', 'world hello');
     * console.log('Cosine Similarity:', cosineSimilarity); // 输出 1
     */
    StringSimilarity.cosineSimilarity = function (str1, str2) {
        var getVector = function (str) {
            var vec = {};
            str.split('').forEach(function (char) {
                vec[char] = (vec[char] || 0) + 1;
            });
            return vec;
        };
        var vec1 = getVector(str1);
        var vec2 = getVector(str2);
        var intersection = new Set(__spreadArray(__spreadArray([], Object.keys(vec1), true), Object.keys(vec2), true));
        var dotProduct = 0;
        var magnitude1 = 0;
        var magnitude2 = 0;
        intersection.forEach(function (char) {
            dotProduct += (vec1[char] || 0) * (vec2[char] || 0);
            magnitude1 += Math.pow((vec1[char] || 0), 2);
            magnitude2 += Math.pow((vec2[char] || 0), 2);
        });
        magnitude1 = Math.sqrt(magnitude1);
        magnitude2 = Math.sqrt(magnitude2);
        if (magnitude1 * magnitude2 === 0)
            return 0;
        return dotProduct / (magnitude1 * magnitude2);
    };
    return StringSimilarity;
}());
exports.StringSimilarity = StringSimilarity;
// 示例用法
/*
const distance = StringSimilarity.levenshteinDistance('kitten', 'sitting');
console.log('Levenshtein Distance:', distance); // 输出 3

const jaccard = StringSimilarity.jaccardSimilarity('night', 'nacht');
console.log('Jaccard Similarity:', jaccard); // 输出 0.2

const cosine = StringSimilarity.cosineSimilarity('hello world', 'world hello');
console.log('Cosine Similarity:', cosine); // 输出 1
*/
