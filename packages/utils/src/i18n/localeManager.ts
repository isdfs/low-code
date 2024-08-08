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
export function createLocaleManager<T>(
   loadLocales: () => Promise<Record<string, T>>
) {
   let locales: Record<string, T> = {};
   let currentLocale: string = 'en';

   loadLocales().then(loadedLocales => {
       locales = loadedLocales;
   });

   function setLocale(locale: string) {
       if (locales[locale]) {
           currentLocale = locale;
       } else {
           console.warn(`Locale '${locale}' not found`);
       }
   }

   function t(key: keyof T): string {
       const translation = locales[currentLocale]?.[key];
       return translation ? String(translation) : String(key);
   }

   return {
       setLocale,
       t,
   };
}
