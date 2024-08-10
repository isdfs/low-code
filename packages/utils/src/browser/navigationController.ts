/**
 * 页面导航控制模块。
 * 
 * 该模块提供了控制页面导航的功能，如前进、后退、跳转到指定URL等。
 * 
 * @example
 * ```
 * navigateTo('https://www.example.com');
 * goBack();
 * goForward();
 * ```
 */

/**
 * 导航到指定的URL。
 * 
 * @param {string} url - 要导航到的URL。
 * @returns {void}
 * 
 * @example
 * ```
 * navigateTo('https://www.example.com');
 * ```
 */
export function navigateTo(url: string): void {
  window.location.href = url;
}

/**
* 页面回退到历史记录中的上一页。
* 
* @returns {void}
* 
* @example
* ```
* goBack();
* ```
*/
export function goBack(): void {
  window.history.back();
}

/**
* 页面前进到历史记录中的下一页。
* 
* @returns {void}
* 
* @example
* ```
* goForward();
* ```
*/
export function goForward(): void {
  window.history.forward();
}

/**
* 重新加载当前页面。
* 
* @returns {void}
* 
* @example
* ```
* reloadPage();
* ```
*/
export function reloadPage(): void {
  window.location.reload();
}
