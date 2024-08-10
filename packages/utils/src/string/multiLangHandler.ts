/**
 * @module MultiLangHandler
 * @description 提供字符串的多语言处理功能，支持根据用户的语言偏好自动选择正确的语言版本。
 */

interface LanguageStrings {
  [language: string]: string;
}

export class MultiLangHandler {

  private languageData: Record<string, LanguageStrings>;

  constructor(languageData: Record<string, LanguageStrings>) {
      this.languageData = languageData;
  }

  /**
   * @description 根据用户的语言偏好获取对应的字符串
   * @param key 字符串的键
   * @param preferredLanguages 用户的首选语言列表，按优先级排序
   * @returns 对应语言的字符串，如果没有匹配，则返回键本身
   * @example
   * ```typescript
   * const languageData = {
   *   greeting: { 'en': 'Hello', 'fr': 'Bonjour', 'zh-CN': '你好' }
   * };
   * const handler = new MultiLangHandler(languageData);
   * const greeting = handler.getLocalizedString('greeting', ['fr', 'zh-CN']);
   * console.log(greeting); // 输出 "Bonjour"
   * ```
   */
  getLocalizedString(key: string, preferredLanguages: string[]): string {
      const strings = this.languageData[key];
      if (!strings) {
          return key;
      }

      for (const lang of preferredLanguages) {
          if (strings[lang]) {
              return strings[lang];
          }
      }

      return strings['en'] || key;
  }

  /**
   * @description 为指定语言添加或更新字符串
   * @param key 字符串的键
   * @param language 语言代码
   * @param value 对应语言的字符串
   * @example
   * ```typescript
   * handler.addOrUpdateString('farewell', 'es', 'Adiós');
   * const farewell = handler.getLocalizedString('farewell', ['es']);
   * console.log(farewell); // 输出 "Adiós"
   * ```
   */
  addOrUpdateString(key: string, language: string, value: string): void {
      if (!this.languageData[key]) {
          this.languageData[key] = {};
      }
      this.languageData[key][language] = value;
  }
}


// 示例用法
/*
const languageData = {
    greeting: { 'en': 'Hello', 'fr': 'Bonjour', 'zh-CN': '你好' }
};
const handler = new MultiLangHandler(languageData);
const greeting = handler.getLocalizedString('greeting', ['fr', 'zh-CN']);
console.log('Greeting:', greeting); // 输出 "Bonjour"

handler.addOrUpdateString('farewell', 'es', 'Adiós');
const farewell = handler.getLocalizedString('farewell', ['es']);
console.log('Farewell:', farewell); // 输出 "Adiós"
*/
