"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createI18n = void 0;
/**
 * 创建一个简单的国际化（i18n）处理工具。
 *
 * @param {Record<string, Record<string, string>>} translations - 包含各语言的翻译字典。
 * @param {string} defaultLocale - 默认语言代码。
 * @returns {{
*  setLocale: (locale: string) => void,
*  t: (key: string) => string
* }} - 包含设置当前语言和翻译字符串的方法。
*
* @example
* const i18n = createI18n({
*   en: { hello: "Hello" },
*   fr: { hello: "Bonjour" }
* }, 'en');
* console.log(i18n.t('hello')); // "Hello"
* i18n.setLocale('fr');
* console.log(i18n.t('hello')); // "Bonjour"
*/
function createI18n(translations, defaultLocale) {
    var currentLocale = defaultLocale;
    function setLocale(locale) {
        if (translations[locale]) {
            currentLocale = locale;
        }
        else {
            console.warn("Locale ".concat(locale, " not found, fallback to default."));
        }
    }
    function t(key) {
        return translations[currentLocale][key] || key;
    }
    return {
        setLocale: setLocale,
        t: t,
    };
}
exports.createI18n = createI18n;
