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
export declare function createLocaleManager<T>(loadLocales: () => Promise<Record<string, T>>): {
    setLocale: (locale: string) => void;
    t: (key: keyof T) => string;
};
