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
export function equalsIgnoreCase(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2.toLowerCase();
}

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
export function fuzzyContains(input: string, target: string): boolean {
  const regex = new RegExp(target.split('').join('.*?'), 'i');
  return regex.test(input);
}

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
export function findFirstUniqueChar(input: string): string | null {
  const charCount: Record<string, number> = {};
  for (const char of input) {
      charCount[char] = (charCount[char] || 0) + 1;
  }
  for (const char of input) {
      if (charCount[char] === 1) {
          return char;
      }
  }
  return null;
}

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
export function similarity(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const dp: number[][] = [];

  for (let i = 0; i <= len1; i++) {
      dp[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
      dp[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
          if (str1[i - 1] === str2[j - 1]) {
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
          }
      }
  }

  const distance = dp[len1][len2];
  return 1 - distance / Math.max(len1, len2);
}
