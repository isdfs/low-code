"use strict";
/**
 * @module StringEscaping
 * @description 提供字符串的转义与反转义功能，支持常见的 HTML、URL、正则表达式等特殊字符的处理。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringEscaping = void 0;
var StringEscaping = /** @class */ (function () {
    function StringEscaping() {
    }
    /**
     * @description 转义 HTML 特殊字符
     * @param input 要转义的字符串
     * @returns 转义后的字符串
     * @example
     * const escapedHtml = StringEscaping.escapeHtml('<div>Hello & World</div>');
     * console.log('Escaped HTML:', escapedHtml); // 输出 "&lt;div&gt;Hello &amp; World&lt;/div&gt;"
     */
    StringEscaping.escapeHtml = function (input) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;',
        };
        return input.replace(/[&<>"']/g, function (m) { return map[m]; });
    };
    /**
     * @description 反转义 HTML 特殊字符
     * @param input 要反转义的字符串
     * @returns 反转义后的字符串
     * @example
     * const unescapedHtml = StringEscaping.unescapeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;');
     * console.log('Unescaped HTML:', unescapedHtml); // 输出 "<div>Hello & World</div>"
     */
    StringEscaping.unescapeHtml = function (input) {
        var map = {
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&quot;': '"',
            '&#039;': "'",
        };
        return input.replace(/&(?:amp|lt|gt|quot|#039);/g, function (m) { return map[m]; });
    };
    /**
     * @description 转义正则表达式中的特殊字符
     * @param input 要转义的字符串
     * @returns 转义后的字符串
     * @example
     * const escapedRegex = StringEscaping.escapeRegex('Hello. * (World)');
     * console.log('Escaped Regex:', escapedRegex); // 输出 "Hello\. \* \(World\)"
     */
    StringEscaping.escapeRegex = function (input) {
        return input.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    /**
     * @description 转义 URL 中的特殊字符
     * @param input 要转义的字符串
     * @returns 转义后的字符串
     * @example
     * const escapedUrl = StringEscaping.escapeUrl('https://example.com/foo?bar=baz&qux=quux');
     * console.log('Escaped URL:', escapedUrl); // 输出 "https%3A%2F%2Fexample.com%2Ffoo%3Fbar%3Dbaz%26qux%3Dquux"
     */
    StringEscaping.escapeUrl = function (input) {
        return encodeURIComponent(input);
    };
    /**
     * @description 反转义 URL 中的特殊字符
     * @param input 要反转义的字符串
     * @returns 反转义后的字符串
     * @example
     * const unescapedUrl = StringEscaping.unescapeUrl('https%3A%2F%2Fexample.com%2Ffoo%3Fbar%3Dbaz%26qux%3Dquux');
     * console.log('Unescaped URL:', unescapedUrl); // 输出 "https://example.com/foo?bar=baz&qux=quux"
     */
    StringEscaping.unescapeUrl = function (input) {
        return decodeURIComponent(input);
    };
    return StringEscaping;
}());
exports.StringEscaping = StringEscaping;
// 示例用法
/*
const escapedHtml = StringEscaping.escapeHtml('<div>Hello & World</div>');
console.log('Escaped HTML:', escapedHtml); // 输出 "&lt;div&gt;Hello &amp; World&lt;/div&gt;"

const unescapedHtml = StringEscaping.unescapeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;');
console.log('Unescaped HTML:', unescapedHtml); // 输出 "<div>Hello & World</div>"

const escapedRegex = StringEscaping.escapeRegex('Hello. * (World)');
console.log('Escaped Regex:', escapedRegex); // 输出 "Hello\\. \\* \\(World\\)"

const escapedUrl = StringEscaping.escapeUrl('https://example.com/foo?bar=baz&qux=quux');
console.log('Escaped URL:', escapedUrl); // 输出 "https%3A%2F%2Fexample.com%2Ffoo%3Fbar%3Dbaz%26qux%3Dquux"

const unescapedUrl = StringEscaping.unescapeUrl('https%3A%2F%2Fexample.com%2Ffoo%3Fbar%3Dbaz%26qux%3Dquux');
console.log('Unescaped URL:', unescapedUrl); // 输出 "https://example.com/foo?bar=baz&qux=quux"
*/
