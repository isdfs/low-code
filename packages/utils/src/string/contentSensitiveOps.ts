/**
 * @module ContentSensitiveOps
 * @description 提供内容敏感的字符串操作功能，包括敏感词过滤、内容审查和智能文本摘要生成等。
 */

export class ContentSensitiveOps {
    
  private sensitiveWords: string[];

  constructor(sensitiveWords: string[] = []) {
      this.sensitiveWords = sensitiveWords;
  }

  /**
   * @description 设置敏感词列表
   * @param words 敏感词数组
   */
  setSensitiveWords(words: string[]): void {
      this.sensitiveWords = words;
  }

  /**
   * @description 过滤字符串中的敏感词
   * @param input 要过滤的字符串
   * @param maskChar 掩码字符，默认为 '*'
   * @returns 过滤后的字符串
   * @example
   * ```typescript
   * const ops = new ContentSensitiveOps(['bad', 'ugly']);
   * const result = ops.filterSensitiveWords('This is a bad and ugly example.');
   * console.log(result); // 输出 "This is a *** and **** example."
   * ```
   */
  filterSensitiveWords(input: string, maskChar: string = '*'): string {
      const regex = new RegExp(this.sensitiveWords.join('|'), 'gi');
      return input.replace(regex, match => maskChar.repeat(match.length));
  }

  /**
   * @description 生成智能文本摘要，基于简单的关键词匹配
   * @param input 要生成摘要的字符串
   * @param maxLength 摘要的最大长度
   * @param keywords 关键词数组，用于提高摘要的相关性
   * @returns 智能摘要字符串
   * @example
   * ```typescript
   * const ops = new ContentSensitiveOps();
   * const result = ops.generateSummary('This is a long text about the importance of clean code and software engineering best practices.', 50, ['clean code', 'best practices']);
   * console.log(result); // 输出 "This is a long text about the importance of clean code..."
   * ```
   */
  generateSummary(input: string, maxLength: number, keywords: string[] = []): string {
      const keywordRegex = keywords.length > 0 ? new RegExp(keywords.join('|'), 'i') : null;
      let summary = input;

      if (keywordRegex) {
          const match = input.match(keywordRegex);
          if (match && match.index !== undefined) {
              summary = input.slice(match.index);
          }
      }

      return summary.length > maxLength ? summary.slice(0, maxLength) + '...' : summary;
  }

  /**
   * @description 内容审查，检查字符串中是否包含敏感内容
   * @param input 要检查的字符串
   * @returns 包含敏感内容返回 true，否则返回 false
   * @example
   * ```typescript
   * const ops = new ContentSensitiveOps(['secret']);
   * const result = ops.checkContent('This is a secret document.');
   * console.log(result); // 输出 true
   * ```
   */
  checkContent(input: string): boolean {
      const regex = new RegExp(this.sensitiveWords.join('|'), 'gi');
      return regex.test(input);
  }
}
