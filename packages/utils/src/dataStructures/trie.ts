/**
 * Trie（前缀树）数据结构模块，用于快速检索字符串前缀和自动补全。
 */

class TrieNode {
  public children: Map<string, TrieNode> = new Map();
  public isEndOfWord: boolean = false;
}

export class Trie {
  private root: TrieNode = new TrieNode();

  /**
   * 向Trie中插入一个单词。
   * @param word 要插入的单词。
   */
  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isEndOfWord = true;
  }

  /**
   * 检查Trie中是否包含某个单词。
   * @param word 要检查的单词。
   * @returns 返回布尔值，表示是否包含该单词。
   */
  contains(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isEndOfWord;
  }

  /**
   * 查找所有以某个前缀开头的单词。
   * @param prefix 要查找的前缀。
   * @returns 返回所有匹配前缀的单词数组。
   */
  findWordsWithPrefix(prefix: string): string[] {
    let node = this.root;
    for (const char of prefix) {
      if (!node.children.has(char)) {
        return [];
      }
      node = node.children.get(char)!;
    }
    return this.collectAllWords(node, prefix);
  }

  private collectAllWords(node: TrieNode | any, prefix: string): string[] {
    const words: string[] = [];

    if (node.isEndOfWord) {
      words.push(prefix);
    }

    for (const [char, childNode] of node.children) {
      words.push(...this.collectAllWords(childNode, prefix + char));
    }

    return words;
  }
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
