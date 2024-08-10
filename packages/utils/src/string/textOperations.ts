/**
 * @module TextOperations
 * @description 提供复杂文本操作功能，包括文本归一化、文本标记化、关键词提取、句法分析等高级功能。
 */

export class TextOperations {

  /**
   * @description 文本归一化处理，包括去除多余空白、转换大小写、去除标点等
   * @param text 要归一化的文本
   * @param options 归一化选项，包括是否去除空白、转换大小写、去除标点等
   * @returns 归一化处理后的文本
   * @example
   * ```typescript
   * const normalizedText = TextOperations.normalize('  Hello, World!  ', { trim: true, toLowerCase: true, removePunctuation: true });
   * console.log(normalizedText); // 输出 "hello world"
   * ```
   */
  static normalize(text: string, options: { trim?: boolean; toLowerCase?: boolean; removePunctuation?: boolean } = {}): string {
      let normalizedText = text;

      if (options.trim) {
          normalizedText = normalizedText.trim();
      }

      if (options.toLowerCase) {
          normalizedText = normalizedText.toLowerCase();
      }

      if (options.removePunctuation) {
          normalizedText = normalizedText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
      }

      return normalizedText;
  }

  /**
   * @description 文本标记化，将文本拆分为单词或短语的数组
   * @param text 要标记化的文本
   * @returns 标记化后的数组
   * @example
   * ```typescript
   * const tokens = TextOperations.tokenize('Hello, World!');
   * console.log(tokens); // 输出 ["Hello", "World"]
   * ```
   */
  static tokenize(text: string): string[] {
      return text.split(/\s+/).map(token => token.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''));
  }

  /**
   * @description 关键词提取，基于简单的词频统计或指定的关键词列表
   * @param text 要提取关键词的文本
   * @param keywords 可选，指定的关键词列表
   * @returns 提取的关键词数组
   * @example
   * ```typescript
   * const keywords = TextOperations.extractKeywords('This is a simple text used for testing.', ['simple', 'text']);
   * console.log(keywords); // 输出 ["simple", "text"]
   * ```
   */
  static extractKeywords(text: string, keywords: string[] = []): string[] {
      const tokens = TextOperations.tokenize(text);
      const tokenFrequency: Record<string, number> = {};

      tokens.forEach(token => {
          if (!keywords.length || keywords.includes(token)) {
              tokenFrequency[token] = (tokenFrequency[token] || 0) + 1;
          }
      });

      return Object.keys(tokenFrequency).sort((a, b) => tokenFrequency[b] - tokenFrequency[a]);
  }

  /**
   * @description 句法分析，简单分析句子的语法结构（如主语、谓语、宾语等）
   * @param sentence 要分析的句子
   * @returns 分析后的语法结构对象
   * @example
   * ```typescript
   * const syntax = TextOperations.syntaxAnalysis('The cat eats the mouse.');
   * console.log(syntax); // 输出 { subject: 'The cat', predicate: 'eats', object: 'the mouse' }
   * ```
   */
  static syntaxAnalysis(sentence: string): { subject: string; predicate: string; object: string } {
      const tokens = sentence.split(' ');
      let subject = '';
      let predicate = '';
      let object = '';

      // 简单的规则：主语在谓语前，宾语在谓语后
      let foundPredicate = false;
      tokens.forEach(token => {
          if (foundPredicate) {
              object += (object ? ' ' : '') + token;
          } else if (/^(is|are|was|were|has|have|do|does|did|eats|runs|jumps)$/i.test(token)) {
              predicate = token;
              foundPredicate = true;
          } else {
              subject += (subject ? ' ' : '') + token;
          }
      });

      return { subject: subject.trim(), predicate: predicate.trim(), object: object.trim() };
  }
}
