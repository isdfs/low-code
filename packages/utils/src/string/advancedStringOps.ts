/**
 * @module AdvancedStringOps
 * @description 提供更高级的字符串操作功能，包括多模式匹配、字符串分组、异步字符串处理等。
 */

import { match } from 'assert';

/**
 * @description 多模式字符串匹配，返回所有匹配的字符串及其位置
 * @param input 要匹配的字符串
 * @param patterns 匹配模式的数组，可以是正则表达式或字符串
 * @returns 包含匹配结果的数组，每个元素包含匹配的字符串及其起始位置
 * @example
 * ```typescript
 * const result = AdvancedStringOps.multiMatch('abc123def456', [/abc/, /\d+/]);
 * console.log(result); // 输出 [{ match: 'abc', index: 0 }, { match: '123', index: 3 }, { match: '456', index: 9 }]
 * ```
 */
export function multiMatch(input: string, patterns: (RegExp | string)[]): { match: string; index: number }[] {
    const results: { match: string; index: number }[] = [];
    patterns.forEach(pattern => {
        let regex = pattern instanceof RegExp ? pattern : new RegExp(pattern, 'g');
        let match;
        while ((match = regex.exec(input)) !== null) {
            results.push({ match: match[0], index: match.index });
        }
    });
    return results;
}

/**
 * @description 将字符串按指定长度分组
 * @param input 要分组的字符串
 * @param size 每组的长度
 * @returns 分组后的字符串数组
 * @example
 * ```typescript
 * const result = AdvancedStringOps.groupBySize('abcdefgh', 3);
 * console.log(result); // 输出 ['abc', 'def', 'gh']
 * ```
 */
export function groupBySize(input: string, size: number): string[] {
    const result: string[] = [];
    for (let i = 0; i < input.length; i += size) {
        result.push(input.substr(i, size));
    }
    return result;
}

/**
 * @description 异步逐字符处理字符串
 * @param input 要处理的字符串
 * @param callback 处理每个字符的异步函数
 * @returns 处理后的字符串
 * @example
 * ```typescript
 * const result = await AdvancedStringOps.asyncProcess('hello', async (char) => {
 *   return char.toUpperCase();
 * });
 * console.log(result); // 输出 "HELLO"
 * ```
 */
export async function asyncProcess(input: string, callback: (char: string) => Promise<string>): Promise<string> {
    const result = [];
    for (const char of input) {
        result.push(await callback(char));
    }
    return result.join('');
}
