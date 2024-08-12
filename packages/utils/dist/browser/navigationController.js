"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reloadPage = exports.goForward = exports.goBack = exports.navigateTo = void 0;
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
function navigateTo(url) {
    window.location.href = url;
}
exports.navigateTo = navigateTo;
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
function goBack() {
    window.history.back();
}
exports.goBack = goBack;
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
function goForward() {
    window.history.forward();
}
exports.goForward = goForward;
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
function reloadPage() {
    window.location.reload();
}
exports.reloadPage = reloadPage;
