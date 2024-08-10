/**
 * 增强版国际化模块，支持动态加载语言包、多语言实时切换和缓存。
 * @module EnhancedI18n
 */

export interface LanguagePack {
  [key: string]: string;
}

class EnhancedI18n {
  private languagePack: LanguagePack = {};
  private currentLanguage: string = 'en';
  private cache: Map<string, LanguagePack> = new Map();

  /**
   * 初始化语言包。
   * @param {string} language - 初始化的语言。
   * @param {LanguagePack} pack - 语言包内容。
   */
  initialize(language: string, pack: LanguagePack) {
      this.currentLanguage = language;
      this.languagePack = pack;
      this.cache.set(language, pack);
  }

  /**
   * 动态加载新的语言包。
   * @param {string} language - 需要加载的语言。
   * @param {() => Promise<LanguagePack>} loader - 语言包加载函数。
   * @returns {Promise<void>}
   */
  async loadLanguagePack(language: string, loader: () => Promise<LanguagePack>): Promise<void> {
      if (this.cache.has(language)) {
          this.languagePack = this.cache.get(language)!;
      } else {
          const pack = await loader();
          this.cache.set(language, pack);
          this.languagePack = pack;
      }
      this.currentLanguage = language;
  }

  /**
   * 获取当前语言包中某个键对应的翻译。
   * @param {string} key - 键值。
   * @returns {string} 翻译后的字符串。
   */
  translate(key: string): string {
      return this.languagePack[key] || key;
  }

  /**
   * 实时切换语言。
   * @param {string} language - 需要切换的语言。
   */
  switchLanguage(language: string) {
      if (this.cache.has(language)) {
          this.languagePack = this.cache.get(language)!;
          this.currentLanguage = language;
      } else {
          console.warn('语言包未加载，请使用 loadLanguagePack 方法加载');
      }
  }
}

const enhancedI18n = new EnhancedI18n();
export default enhancedI18n;
