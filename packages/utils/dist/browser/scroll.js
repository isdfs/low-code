"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToBottom = exports.scrollToTop = void 0;
/**
 * 页面滚动到顶部。
 *
 * 该方法用于将页面平滑滚动到顶部。适用于返回顶部的功能。
 *
 * @returns {void}
 *
 * @example
 * ```
 * scrollToTop();
 * ```
 */
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
exports.scrollToTop = scrollToTop;
/**
* 页面滚动到底部。
*
* 该方法用于将页面平滑滚动到底部。适用于滚动到底部加载更多内容的功能。
*
* @returns {void}
*
* @example
* ```
* scrollToBottom();
* ```
*/
function scrollToBottom() {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
}
exports.scrollToBottom = scrollToBottom;
