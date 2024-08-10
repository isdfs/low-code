/**
 * @module PatternMatcher
 * @description 提供字符串的高级模式匹配与替换功能，支持复杂的正则表达式和自定义匹配规则。
 */
export declare class PatternMatcher {
    /**
     * @description 使用正则表达式查找字符串中的所有匹配项
     * @param input 要查找的字符串
     * @param pattern 正则表达式模式
     * @returns 匹配项的数组
     * @example
     * ```typescript
     * const matches = PatternMatcher.findAllMatches('The rain in Spain stays mainly in the plain.', /ain/g);
     * console.log(matches); // 输出 ["ain", "ain", "ain"]
     * ```
     */
    static findAllMatches(input: string, pattern: RegExp): string[];
    /**
     * @description 使用正则表达式替换字符串中的匹配项，并支持回调函数自定义替换逻辑
     * @param input 要替换的字符串
     * @param pattern 正则表达式模式
     * @param replacer 替换逻辑，可以是字符串或回调函数
     * @returns 替换后的字符串
     * @example
     * ```typescript
     * const replaced = PatternMatcher.replaceWithCallback('foo123bar456baz', /\d+/g, (match) => `[${match}]`);
     * console.log(replaced); // 输出 "foo[123]bar[456]baz"
     * ```
     */
    static replaceWithCallback(input: string, pattern: RegExp, replacer: (match: string) => string): string;
    /**
     * @description 根据自定义规则进行字符串替换
     * @param input 要替换的字符串
     * @param rules 替换规则的数组，每个规则包含要匹配的模式和对应的替换内容
     * @returns 替换后的字符串
     * @example
     * ```typescript
     * const rules = [{ pattern: /foo/g, replacement: 'bar' }, { pattern: /baz/g, replacement: 'qux' }];
     * const replaced = PatternMatcher.replaceWithRules('foo and baz', rules);
     * console.log(replaced); // 输出 "bar and qux"
     * ```
     */
    static replaceWithRules(input: string, rules: {
        pattern: RegExp;
        replacement: string;
    }[]): string;
}
