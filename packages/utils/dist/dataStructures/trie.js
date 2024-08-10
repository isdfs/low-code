"use strict";
/**
 * Trie（前缀树）数据结构模块，用于快速检索字符串前缀和自动补全。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trie = void 0;
var TrieNode = /** @class */ (function () {
    function TrieNode() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
    return TrieNode;
}());
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TrieNode();
    }
    /**
     * 向Trie中插入一个单词。
     * @param word 要插入的单词。
     */
    Trie.prototype.insert = function (word) {
        var node = this.root;
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var char = word_1[_i];
            if (!node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node = node.children.get(char);
        }
        node.isEndOfWord = true;
    };
    /**
     * 检查Trie中是否包含某个单词。
     * @param word 要检查的单词。
     * @returns 返回布尔值，表示是否包含该单词。
     */
    Trie.prototype.contains = function (word) {
        var node = this.root;
        for (var _i = 0, word_2 = word; _i < word_2.length; _i++) {
            var char = word_2[_i];
            if (!node.children.has(char)) {
                return false;
            }
            node = node.children.get(char);
        }
        return node.isEndOfWord;
    };
    /**
     * 查找所有以某个前缀开头的单词。
     * @param prefix 要查找的前缀。
     * @returns 返回所有匹配前缀的单词数组。
     */
    Trie.prototype.findWordsWithPrefix = function (prefix) {
        var node = this.root;
        for (var _i = 0, prefix_1 = prefix; _i < prefix_1.length; _i++) {
            var char = prefix_1[_i];
            if (!node.children.has(char)) {
                return [];
            }
            node = node.children.get(char);
        }
        return this.collectAllWords(node, prefix);
    };
    Trie.prototype.collectAllWords = function (node, prefix) {
        var words = [];
        if (node.isEndOfWord) {
            words.push(prefix);
        }
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var _b = _a[_i], char = _b[0], childNode = _b[1];
            words.push.apply(words, this.collectAllWords(childNode, prefix + char));
        }
        return words;
    };
    return Trie;
}());
exports.Trie = Trie;
/**
 * 使用示例：
 * ```typescript
 * const trie = new Trie();
 * trie.insert('apple');
 * trie.insert('app');
 * trie.insert('application');
 *
 * console.log(trie.contains('app')); // 输出: true
 * console.log(trie.contains('apricot')); // 输出: false
 *
 * const words = trie.findWordsWithPrefix('app');
 * console.log(words); // 输出: ['app', 'apple', 'application']
 * ```
 */
