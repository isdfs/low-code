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
export declare function createI18n(translations: Record<string, Record<string, string>>, defaultLocale: string): {
    setLocale: (locale: string) => void;
    t: (key: string) => string;
};
