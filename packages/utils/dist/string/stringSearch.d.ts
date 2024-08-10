/**
 * @module StringSearch
 * @description 提供字符串的高级查找与比较功能，支持模糊匹配、忽略大小写的比较、包含关系等操作。
 */
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
export declare function equalsIgnoreCase(str1: string, str2: string): boolean;
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
export declare function fuzzyContains(input: string, target: string): boolean;
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
export declare function findFirstUniqueChar(input: string): string | null;
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
export declare function similarity(str1: string, str2: string): number;
