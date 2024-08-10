/**
 * @module StringSimilarity
 * @description 提供字符串相似度比较功能，支持多种相似度计算算法，包括 Levenshtein 距离、Jaccard 相似系数等。
 */

export class StringSimilarity {

  /**
   * @description 计算两个字符串之间的 Levenshtein 距离
   * @param str1 第一个字符串
   * @param str2 第二个字符串
   * @returns 两个字符串之间的 Levenshtein 距离
   * @example
   * const distance = StringSimilarity.levenshteinDistance('kitten', 'sitting');
   * console.log('Levenshtein Distance:', distance); // 输出 3
   */
  static levenshteinDistance(str1: string, str2: string): number {
      const matrix = [];
      const len1 = str1.length;
      const len2 = str2.length;

      for (let i = 0; i <= len1; i++) {
          matrix[i] = [i];
      }
      for (let j = 0; j <= len2; j++) {
          matrix[0][j] = j;
      }

      for (let i = 1; i <= len1; i++) {
          for (let j = 1; j <= len2; j++) {
              if (str1[i - 1] === str2[j - 1]) {
                  matrix[i][j] = matrix[i - 1][j - 1];
              } else {
                  matrix[i][j] = Math.min(matrix[i - 1][j] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j - 1] + 1);
              }
          }
      }

      return matrix[len1][len2];
  }

  /**
   * @description 计算两个字符串的 Jaccard 相似系数
   * @param str1 第一个字符串
   * @param str2 第二个字符串
   * @returns 两个字符串的 Jaccard 相似系数，范围在 0 到 1 之间
   * @example
   * const similarity = StringSimilarity.jaccardSimilarity('night', 'nacht');
   * console.log('Jaccard Similarity:', similarity); // 输出 0.2
   */
  static jaccardSimilarity(str1: string, str2: string): number {
      const set1 = new Set(str1.split(''));
      const set2 = new Set(str2.split(''));
      const intersection = new Set([...set1].filter(x => set2.has(x)));
      const union = new Set([...set1, ...set2]);
      return intersection.size / union.size;
  }

  /**
   * @description 计算两个字符串的余弦相似度
   * @param str1 第一个字符串
   * @param str2 第二个字符串
   * @returns 两个字符串的余弦相似度，范围在 0 到 1 之间
   * @example
   * const cosineSimilarity = StringSimilarity.cosineSimilarity('hello world', 'world hello');
   * console.log('Cosine Similarity:', cosineSimilarity); // 输出 1
   */
  static cosineSimilarity(str1: string, str2: string): number {
      const getVector = (str: string) => {
          const vec: Record<string, number> = {};
          str.split('').forEach(char => {
              vec[char] = (vec[char] || 0) + 1;
          });
          return vec;
      };

      const vec1 = getVector(str1);
      const vec2 = getVector(str2);

      const intersection = new Set([...Object.keys(vec1), ...Object.keys(vec2)]);
      let dotProduct = 0;
      let magnitude1 = 0;
      let magnitude2 = 0;

      intersection.forEach(char => {
          dotProduct += (vec1[char] || 0) * (vec2[char] || 0);
          magnitude1 += (vec1[char] || 0) ** 2;
          magnitude2 += (vec2[char] || 0) ** 2;
      });

      magnitude1 = Math.sqrt(magnitude1);
      magnitude2 = Math.sqrt(magnitude2);

      if (magnitude1 * magnitude2 === 0) return 0;

      return dotProduct / (magnitude1 * magnitude2);
  }
}

// 示例用法
/*
const distance = StringSimilarity.levenshteinDistance('kitten', 'sitting');
console.log('Levenshtein Distance:', distance); // 输出 3

const jaccard = StringSimilarity.jaccardSimilarity('night', 'nacht');
console.log('Jaccard Similarity:', jaccard); // 输出 0.2

const cosine = StringSimilarity.cosineSimilarity('hello world', 'world hello');
console.log('Cosine Similarity:', cosine); // 输出 1
*/
