/**
 * @module StringSimilarity
 * @description 提供字符串相似度比较功能，支持多种相似度计算算法，包括 Levenshtein 距离、Jaccard 相似系数等。
 */
export declare class StringSimilarity {
    /**
     * @description 计算两个字符串之间的 Levenshtein 距离
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 两个字符串之间的 Levenshtein 距离
     * @example
     * const distance = StringSimilarity.levenshteinDistance('kitten', 'sitting');
     * console.log('Levenshtein Distance:', distance); // 输出 3
     */
    static levenshteinDistance(str1: string, str2: string): number;
    /**
     * @description 计算两个字符串的 Jaccard 相似系数
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 两个字符串的 Jaccard 相似系数，范围在 0 到 1 之间
     * @example
     * const similarity = StringSimilarity.jaccardSimilarity('night', 'nacht');
     * console.log('Jaccard Similarity:', similarity); // 输出 0.2
     */
    static jaccardSimilarity(str1: string, str2: string): number;
    /**
     * @description 计算两个字符串的余弦相似度
     * @param str1 第一个字符串
     * @param str2 第二个字符串
     * @returns 两个字符串的余弦相似度，范围在 0 到 1 之间
     * @example
     * const cosineSimilarity = StringSimilarity.cosineSimilarity('hello world', 'world hello');
     * console.log('Cosine Similarity:', cosineSimilarity); // 输出 1
     */
    static cosineSimilarity(str1: string, str2: string): number;
}
