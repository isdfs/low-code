/**
 * @module RegexBuilder
 * @description 提供正则表达式的构建功能，通过链式调用轻松构建复杂的正则表达式。
 */

export class RegexBuilder {
  private pattern: string = '';

  /**
   * @description 匹配开头
   * @param str 要匹配的字符串
   * @returns 当前实例
   * @example
   * const regex = new RegexBuilder().startWith('Hello').build();
   * console.log('Regex:', regex); // 输出 /^Hello/
   */
  startWith(str: string): this {
      this.pattern += `^${str}`;
      return this;
  }

  /**
   * @description 匹配结尾
   * @param str 要匹配的字符串
   * @returns 当前实例
   * @example
   * const regex = new RegexBuilder().endWith('World').build();
   * console.log('Regex:', regex); // 输出 /World$/
   */
  endWith(str: string): this {
      this.pattern += `${str}$`;
      return this;
  }

  /**
   * @description 匹配任意字符
   * @param count 可选，指定匹配的字符数量
   * @returns 当前实例
   * @example
   * const regex = new RegexBuilder().anyChar().build();
   * console.log('Regex:', regex); // 输出 /./
   */
  anyChar(count?: number): this {
      this.pattern += count ? `.{${count}}` : '.';
      return this;
  }

  /**
   * @description 匹配数字
   * @param count 可选，指定匹配的数字数量
   * @returns 当前实例
   * @example
   * const regex = new RegexBuilder().digit().build();
   * console.log('Regex:', regex); // 输出 /\d/
   */
  digit(count?: number): this {
      this.pattern += count ? `\\d{${count}}` : '\\d';
      return this;
  }

  /**
   * @description 匹配特定的字符串
   * @param str 要匹配的字符串
   * @returns 当前实例
   * @example
   * const regex = new RegexBuilder().literal('abc').build();
   * console.log('Regex:', regex); // 输出 /abc/
   */
  literal(str: string): this {
      this.pattern += str;
      return this;
  }

  /**
   * @description 添加一个分组
   * @param builderFn 分组的构建函数
   * @returns 当前实例
   * @example
   * const regex = new RegexBuilder().group(g => g.literal('abc').digit()).build();
   * console.log('Regex:', regex); // 输出 /(abc\d)/
   */
  group(builderFn: (builder: RegexBuilder) => void): this {
      const groupBuilder = new RegexBuilder();
      builderFn(groupBuilder);
      this.pattern += `(${groupBuilder.build()})`;
      return this;
  }

  /**
   * @description 构建最终的正则表达式
   * @returns 构建好的正则表达式
   * @example
   * const regex = new RegexBuilder().startWith('Hello').anyChar(3).endWith('World').build();
   * console.log('Regex:', regex); // 输出 /^Hello.{3}World$/
   */
  build(): RegExp {
      return new RegExp(this.pattern);
  }
}

// 示例用法
/*
const regex1 = new RegexBuilder().startWith('Hello').anyChar(3).endWith('World').build();
console.log('Regex 1:', regex1); // 输出 /^Hello.{3}World$/

const regex2 = new RegexBuilder().group(g => g.literal('abc').digit()).build();
console.log('Regex 2:', regex2); // 输出 /(abc\d)/
*/
