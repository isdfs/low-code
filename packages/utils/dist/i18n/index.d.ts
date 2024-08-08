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
export { createI18n } from './createI18n';
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
export { createLocaleManager } from './localeManager';
