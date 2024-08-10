/**
 * @module RegexManager
 * @description 管理和使用正则表达式的高级工具模块，提供常用正则表达式库、正则模式组合、动态生成正则表达式等功能。
 */

export class RegexManager {
  private patterns: Record<string, RegExp>;

  constructor() {
      this.patterns = {};
  }

  /**
   * @description 添加一个命名的正则表达式模式
   * @param name 模式名称
   * @param pattern 正则表达式
   */
  addPattern(name: string, pattern: RegExp): void {
      this.patterns[name] = pattern;
  }

  /**
   * @description 获取命名的正则表达式模式
   * @param name 模式名称
   * @returns 对应的正则表达式
   * @example
   * ```typescript
   * const regexManager = new RegexManager();
   * regexManager.addPattern('email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
   * const emailPattern = regexManager.getPattern('email');
   * console.log(emailPattern.test('test@example.com')); // 输出 true
   * ```
   */
  getPattern(name: string): RegExp {
      if (!this.patterns[name]) {
          throw new Error(`Pattern with name ${name} does not exist`);
      }
      return this.patterns[name];
  }

  /**
   * @description 动态生成正则表达式
   * @param literals 字符串文字部分
   * @param placeholders 用于插入动态内容的正则表达式
   * @returns 生成的正则表达式
   * @example
   * ```typescript
   * const dynamicRegex = RegexManager.generateRegex`Hello, ${/[A-Za-z]+/}!`;
   * console.log(dynamicRegex.test('Hello, World!')); // 输出 true
   * ```
   */
  static generateRegex(literals: TemplateStringsArray, ...placeholders: RegExp[]): RegExp {
      const regexString = literals.reduce((acc, lit, i) => {
          const placeholder = placeholders[i] ? placeholders[i].source : '';
          return acc + lit + placeholder;
      }, '');
      return new RegExp(regexString);
  }

  /**
   * @description 使用命名的正则模式替换字符串中的匹配部分
   * @param name 模式名称
   * @param input 输入的字符串
   * @param replacement 用于替换的字符串
   * @returns 替换后的字符串
   * @example
   * ```typescript
   * const regexManager = new RegexManager();
   * regexManager.addPattern('digits', /\d+/g);
   * const result = regexManager.replacePattern('digits', 'abc123def', '###');
   * console.log(result); // 输出 "abc###def"
   * ```
   */
  replacePattern(name: string, input: string, replacement: string): string {
      const pattern = this.getPattern(name);
      return input.replace(pattern, replacement);
  }

  /**
   * @description 批量匹配多个命名正则模式
   * @param input 输入的字符串
   * @param patternNames 要匹配的模式名称数组
   * @returns 匹配结果的数组，每个元素包含匹配的字符串及其位置
   * @example
   * ```typescript
   * const regexManager = new RegexManager();
   * regexManager.addPattern('word', /\b\w+\b/g);
   * regexManager.addPattern('number', /\b\d+\b/g);
   * const matches = regexManager.matchMultiple('The answer is 42', ['word', 'number']);
   * console.log(matches); // 输出 [{ match: 'The', index: 0 }, { match: 'answer', index: 4 }, { match: 'is', index: 11 }, { match: '42', index: 14 }]
   * ```
   */
  matchMultiple(input: string, patternNames: string[]): { match: string; index: number }[] {
      const results: { match: string; index: number }[] = [];
      patternNames.forEach(name => {
          const pattern = this.getPattern(name);
          let match;
          while ((match = pattern.exec(input)) !== null) {
              results.push({ match: match[0], index: match.index });
          }
      });
      return results;
  }
}
