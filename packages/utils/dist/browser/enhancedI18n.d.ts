/**
 * 增强版国际化模块，支持动态加载语言包、多语言实时切换和缓存。
 * @module EnhancedI18n
 */
export interface LanguagePack {
    [key: string]: string;
}
declare class EnhancedI18n {
    private languagePack;
    private currentLanguage;
    private cache;
    /**
     * 初始化语言包。
     * @param {string} language - 初始化的语言。
     * @param {LanguagePack} pack - 语言包内容。
     */
    initialize(language: string, pack: LanguagePack): void;
    /**
     * 动态加载新的语言包。
     * @param {string} language - 需要加载的语言。
     * @param {() => Promise<LanguagePack>} loader - 语言包加载函数。
     * @returns {Promise<void>}
     */
    loadLanguagePack(language: string, loader: () => Promise<LanguagePack>): Promise<void>;
    /**
     * 获取当前语言包中某个键对应的翻译。
     * @param {string} key - 键值。
     * @returns {string} 翻译后的字符串。
     */
    translate(key: string): string;
    /**
     * 实时切换语言。
     * @param {string} language - 需要切换的语言。
     */
    switchLanguage(language: string): void;
}
declare const enhancedI18n: EnhancedI18n;
export default enhancedI18n;
