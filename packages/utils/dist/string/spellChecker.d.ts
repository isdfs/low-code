/**
 * @module SpellChecker
 * @description 提供字符串的拼写检查与自动更正功能，支持自定义词典和拼写建议。
 */
export declare class SpellChecker {
    private dictionary;
    constructor(customDictionary?: string[]);
    /**
     * @description 检查字符串中是否存在拼写错误
     * @param word 要检查的单词
     * @returns 如果拼写正确，返回 true；否则返回 false
     * @example
     * const spellChecker = new SpellChecker(['hello', 'world']);
     * const isCorrect = SpellChecker.check('helllo');
     * console.log('Is Correct:', isCorrect); // 输出 false
     */
    check(word: string): boolean;
    /**
     * @description 自动更正拼写错误的单词
     * @param word 要更正的单词
     * @returns 更正后的单词或原单词（如果没有找到替代品）
     * @example
     * const corrected = spellChecker.autoCorrect('helllo');
     * console.log('Corrected:', corrected); // 输出 "hello"
     */
    autoCorrect(word: string): string;
    /**
     * @description 计算两个单词之间的 Levenshtein 距离
     * @param word1 第一个单词
     * @param word2 第二个单词
     * @returns 两个单词之间的 Levenshtein 距离
     */
    private levenshteinDistance;
}
