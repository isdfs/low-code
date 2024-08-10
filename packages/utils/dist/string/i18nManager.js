"use strict";
/**
 * @module I18nManager
 * @description 提供字符串的国际化（i18n）与本地化（l10n）支持，包含多语言翻译、日期/货币格式化等功能。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.I18nManager = void 0;
var I18nManager = /** @class */ (function () {
    function I18nManager(defaultLocale, translations) {
        this.currentLocale = defaultLocale;
        this.localeData = translations;
    }
    /**
     * @description 设置当前使用的语言环境
     * @param locale 语言环境代码，如 'en-US', 'zh-CN'
     */
    I18nManager.prototype.setLocale = function (locale) {
        if (this.localeData[locale]) {
            this.currentLocale = locale;
        }
        else {
            throw new Error("Locale ".concat(locale, " not found"));
        }
    };
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
    I18nManager.prototype.translate = function (key, params) {
        var translation = this.localeData[this.currentLocale][key];
        if (!translation) {
            return key;
        }
        return translation.replace(/{(\w+)}/g, function (_, paramKey) {
            return params && params[paramKey] !== undefined ? String(params[paramKey]) : "{".concat(paramKey, "}");
        });
    };
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
    I18nManager.prototype.formatDate = function (date, options) {
        return new Intl.DateTimeFormat(this.currentLocale, options).format(date);
    };
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
    I18nManager.prototype.formatCurrency = function (amount, currency) {
        return new Intl.NumberFormat(this.currentLocale, { style: 'currency', currency: currency }).format(amount);
    };
    return I18nManager;
}());
exports.I18nManager = I18nManager;
