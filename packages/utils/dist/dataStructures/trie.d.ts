/**
 * Trie（前缀树）数据结构模块，用于快速检索字符串前缀和自动补全。
 */
export declare class Trie {
    private root;
    /**
     * 向Trie中插入一个单词。
     * @param word 要插入的单词。
     */
    insert(word: string): void;
    /**
     * 检查Trie中是否包含某个单词。
     * @param word 要检查的单词。
     * @returns 返回布尔值，表示是否包含该单词。
     */
    contains(word: string): boolean;
    /**
     * 查找所有以某个前缀开头的单词。
     * @param prefix 要查找的前缀。
     * @returns 返回所有匹配前缀的单词数组。
     */
    findWordsWithPrefix(prefix: string): string[];
    private collectAllWords;
}
/**
 * 使用示例：
 * ```typescript
 * const trie = new Trie();
 * trie.insert('apple');
 * trie.insert('app');
 * trie.insert('application');
 *
 * console.log(trie.contains('app')); // 输出: true
 * console.log(trie.contains('apricot')); // 输出: false
 *
 * const words = trie.findWordsWithPrefix('app');
 * console.log(words); // 输出: ['app', 'apple', 'application']
 * ```
 */
