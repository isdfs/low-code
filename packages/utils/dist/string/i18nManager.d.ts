/**
 * @module I18nManager
 * @description 提供字符串的国际化（i18n）与本地化（l10n）支持，包含多语言翻译、日期/货币格式化等功能。
 */
interface TranslationDictionary {
    [key: string]: string;
}
interface LocaleData {
    [locale: string]: TranslationDictionary;
}
export declare class I18nManager {
    private localeData;
    private currentLocale;
    constructor(defaultLocale: string, translations: LocaleData);
    /**
     * @description 设置当前使用的语言环境
     * @param locale 语言环境代码，如 'en-US', 'zh-CN'
     */
    setLocale(locale: string): void;
    /**
     * @description 获取当前语言环境的翻译
     * @param key 翻译键
     * @param params 可选，参数对象，用于占位符替换
     * @returns 翻译后的字符串
     * @example
     * ```typescript
     * const translations = {
     *   'en-US': { 'greeting': 'Hello, {name}!' },
     *   'zh-CN': { 'greeting': '你好，{name}！' }
     * };
     * const i18n = new I18nManager('en-US', translations);
     * i18n.setLocale('zh-CN');
     * const result = i18n.translate('greeting', { name: 'Alice' });
     * console.log(result); // 输出 "你好，Alice！"
     * ```
     */
    translate(key: string, params?: Record<string, string | number>): string;
    /**
     * @description 格式化日期为当前语言环境的格式
     * @param date 要格式化的日期对象
     * @param options 可选，格式化选项
     * @returns 格式化后的日期字符串
     * @example
     * ```typescript
     * const result = i18n.formatDate(new Date(), { year: 'numeric', month: 'long', day: 'numeric' });
     * console.log(result); // 输出 "2024年8月10日" （在 zh-CN 语言环境下）
     * ```
     */
    formatDate(date: Date, options?: Intl.DateTimeFormatOptions): string;
    /**
     * @description 格式化数字为当前语言环境的货币格式
     * @param amount 要格式化的数值
     * @param currency 货币代码，如 'USD', 'CNY'
     * @returns 格式化后的货币字符串
     * @example
     * ```typescript
     * const result = i18n.formatCurrency(12345.67, 'USD');
     * console.log(result); // 输出 "$12,345.67" （在 en-US 语言环境下）
     * ```
     */
    formatCurrency(amount: number, currency: string): string;
}
export {};
