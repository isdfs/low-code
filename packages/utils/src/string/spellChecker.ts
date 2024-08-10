/**
 * @module SpellChecker
 * @description 提供字符串的拼写检查与自动更正功能，支持自定义词典和拼写建议。
 */

export class SpellChecker {

  private dictionary: Set<string>;

  constructor(customDictionary: string[] = []) {
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
  check(word: string): boolean {
      return this.dictionary.has(word.toLowerCase());
  }

  /**
   * @description 自动更正拼写错误的单词
   * @param word 要更正的单词
   * @returns 更正后的单词或原单词（如果没有找到替代品）
   * @example
   * const corrected = spellChecker.autoCorrect('helllo');
   * console.log('Corrected:', corrected); // 输出 "hello"
   */
  autoCorrect(word: string): string {
      if (this.check(word)) return word;

      let bestMatch = word;
      let minDistance = Infinity;

      this.dictionary.forEach(dictWord => {
          const distance = this.levenshteinDistance(word, dictWord);
          if (distance < minDistance) {
              minDistance = distance;
              bestMatch = dictWord;
          }
      });

      return bestMatch;
  }

  /**
   * @description 计算两个单词之间的 Levenshtein 距离
   * @param word1 第一个单词
   * @param word2 第二个单词
   * @returns 两个单词之间的 Levenshtein 距离
   */
  private levenshteinDistance(word1: string, word2: string): number {
      const matrix = [];
      const len1 = word1.length;
      const len2 = word2.length;

      for (let i = 0; i <= len1; i++) {
          matrix[i] = [i];
      }
      for (let j = 0; j <= len2; j++) {
          matrix[0][j] = j;
      }

      for (let i = 1; i <= len1; i++) {
          for (let j = 1; j <= len2; j++) {
              if (word1[i - 1] === word2[j - 1]) {
                  matrix[i][j] = matrix[i - 1][j - 1];
              } else {
                  matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1);
              }
          }
      }

      return matrix[len1][len2];
  }
}

// 示例用法
/*
const spellChecker = new SpellChecker(['hello', 'world']);
const isCorrect = spellChecker.check('helllo');
console.log('Is Correct:', isCorrect); // 输出 false

const corrected = spellChecker.autoCorrect('helllo');
console.log('Corrected:', corrected); // 输出 "hello"
*/
