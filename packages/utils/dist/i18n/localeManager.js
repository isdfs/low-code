"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocaleManager = void 0;
/**
 * 国际化管理器，用于动态加载和切换语言包。
 *
 * @template T - 语言包的类型。
 * @param {() => Promise<Record<string, T>>} loadLocales - 异步加载所有语言包的函数。
 * @returns {{
*   setLocale: (locale: string) => void,
*   t: (key: keyof T) => string
* }} - 包含设置当前语言和翻译字符串的方法。
*
* @example
* const localeManager = createLocaleManager(() => fetch('/locales').then(res => res.json()));
* localeManager.setLocale('en');
* console.log(localeManager.t('hello')); // 输出: Hello
*/
function createLocaleManager(loadLocales) {
    var locales = {};
    var currentLocale = 'en';
    loadLocales().then(function (loadedLocales) {
        locales = loadedLocales;
    });
    function setLocale(locale) {
        if (locales[locale]) {
            currentLocale = locale;
        }
        else {
            console.warn("Locale '".concat(locale, "' not found"));
        }
    }
    function t(key) {
        var _a;
        var translation = (_a = locales[currentLocale]) === null || _a === void 0 ? void 0 : _a[key];
        return translation ? String(translation) : String(key);
    }
    return {
        setLocale: setLocale,
        t: t,
    };
}
exports.createLocaleManager = createLocaleManager;
