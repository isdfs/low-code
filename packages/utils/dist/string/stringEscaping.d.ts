/**
 * @module StringEscaping
 * @description 提供字符串的转义与反转义功能，支持常见的 HTML、URL、正则表达式等特殊字符的处理。
 */
export declare class StringEscaping {
    /**
     * @description 转义 HTML 特殊字符
     * @param input 要转义的字符串
     * @returns 转义后的字符串
     * @example
     * const escapedHtml = StringEscaping.escapeHtml('<div>Hello & World</div>');
     * console.log('Escaped HTML:', escapedHtml); // 输出 "&lt;div&gt;Hello &amp; World&lt;/div&gt;"
     */
    static escapeHtml(input: string): string;
    /**
     * @description 反转义 HTML 特殊字符
     * @param input 要反转义的字符串
     * @returns 反转义后的字符串
     * @example
     * const unescapedHtml = StringEscaping.unescapeHtml('&lt;div&gt;Hello &amp; World&lt;/div&gt;');
     * console.log('Unescaped HTML:', unescapedHtml); // 输出 "<div>Hello & World</div>"
     */
    static unescapeHtml(input: string): string;
    /**
     * @description 转义正则表达式中的特殊字符
     * @param input 要转义的字符串
     * @returns 转义后的字符串
     * @example
     * const escapedRegex = StringEscaping.escapeRegex('Hello. * (World)');
     * console.log('Escaped Regex:', escapedRegex); // 输出 "Hello\. \* \(World\)"
     */
    static escapeRegex(input: string): string;
    /**
     * @description 转义 URL 中的特殊字符
     * @param input 要转义的字符串
     * @returns 转义后的字符串
     * @example
     * const escapedUrl = StringEscaping.escapeUrl('https://example.com/foo?bar=baz&qux=quux');
     * console.log('Escaped URL:', escapedUrl); // 输出 "https%3A%2F%2Fexample.com%2Ffoo%3Fbar%3Dbaz%26qux%3Dquux"
     */
    static escapeUrl(input: string): string;
    /**
     * @description 反转义 URL 中的特殊字符
     * @param input 要反转义的字符串
     * @returns 反转义后的字符串
     * @example
     * const unescapedUrl = StringEscaping.unescapeUrl('https%3A%2F%2Fexample.com%2Ffoo%3Fbar%3Dbaz%26qux%3Dquux');
     * console.log('Unescaped URL:', unescapedUrl); // 输出 "https://example.com/foo?bar=baz&qux=quux"
     */
    static unescapeUrl(input: string): string;
}
