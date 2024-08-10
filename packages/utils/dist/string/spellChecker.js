"use strict";
/**
 * @module SpellChecker
 * @description 提供字符串的拼写检查与自动更正功能，支持自定义词典和拼写建议。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpellChecker = void 0;
var SpellChecker = /** @class */ (function () {
    function SpellChecker(customDictionary) {
        if (customDictionary === void 0) { customDictionary = []; }
        this.dictionary = new Set(customDictionary);
    }
    /**
     * @description 检查字符串中是否存在拼写错误
     * @param word 要检查的单词
     * @returns 如果拼写正确，返回 true；否则返回 false
     * @example
     * const spellChecker = new SpellChecker(['hello', 'world']);
     * const isCorrect = SpellChecker.check('helllo');
     * console.log('Is Correct:', isCorrect); // 输出 false
     */
    SpellChecker.prototype.check = function (word) {
        return this.dictionary.has(word.toLowerCase());
    };
    /**
     * @description 自动更正拼写错误的单词
     * @param word 要更正的单词
     * @returns 更正后的单词或原单词（如果没有找到替代品）
     * @example
     * const corrected = spellChecker.autoCorrect('helllo');
     * console.log('Corrected:', corrected); // 输出 "hello"
     */
    SpellChecker.prototype.autoCorrect = function (word) {
        var _this = this;
        if (this.check(word))
            return word;
        var bestMatch = word;
        var minDistance = Infinity;
        this.dictionary.forEach(function (dictWord) {
            var distance = _this.levenshteinDistance(word, dictWord);
            if (distance < minDistance) {
                minDistance = distance;
                bestMatch = dictWord;
            }
        });
        return bestMatch;
    };
    /**
     * @description 计算两个单词之间的 Levenshtein 距离
     * @param word1 第一个单词
     * @param word2 第二个单词
     * @returns 两个单词之间的 Levenshtein 距离
     */
    SpellChecker.prototype.levenshteinDistance = function (word1, word2) {
        var matrix = [];
        var len1 = word1.length;
        var len2 = word2.length;
        for (var i = 0; i <= len1; i++) {
            matrix[i] = [i];
        }
        for (var j = 0; j <= len2; j++) {
            matrix[0][j] = j;
        }
        for (var i = 1; i <= len1; i++) {
            for (var j = 1; j <= len2; j++) {
                if (word1[i - 1] === word2[j - 1]) {
                    matrix[i][j] = matrix[i - 1][j - 1];
                }
                else {
                    matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1);
                }
            }
        }
        return matrix[len1][len2];
    };
    return SpellChecker;
}());
exports.SpellChecker = SpellChecker;
// 示例用法
/*
const spellChecker = new SpellChecker(['hello', 'world']);
const isCorrect = spellChecker.check('helllo');
console.log('Is Correct:', isCorrect); // 输出 false

const corrected = spellChecker.autoCorrect('helllo');
console.log('Corrected:', corrected); // 输出 "hello"
*/
