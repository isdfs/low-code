"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorPageFocusChange = exports.isPageFocused = void 0;
/**
 * 页面焦点检测。
 *
 * 该方法用于检测当前页面是否处于用户焦点内，并可以监听焦点变化事件。
 *
 * @returns {boolean} 若页面处于焦点内，则返回 true，否则返回 false。
 *
 * @example
 * ```
 * if (isPageFocused()) {
 *   console.log('页面当前处于焦点内');
 * } else {
 *   console.log('页面当前不在焦点内');
 * }
 *
 * monitorPageFocusChange(isFocused => {
 *   console.log(`页面焦点变化: ${isFocused ? '获取焦点' : '失去焦点'}`);
 * });
 * ```
 */
function isPageFocused() {
    return document.hasFocus();
}
exports.isPageFocused = isPageFocused;
/**
* 监听页面焦点变化事件。
*
* 当用户切换页面焦点时触发指定的回调函数。
*
* @param {(isFocused: boolean) => void} callback - 页面焦点变化时的回调函数，参数表示页面是否处于焦点内。
*
* @returns {void}
*
* @example
* ```
* monitorPageFocusChange(isFocused => {
*   console.log(`页面焦点变化: ${isFocused ? '获取焦点' : '失去焦点'}`);
* });
* ```
*/
function monitorPageFocusChange(callback) {
    window.addEventListener('focus', function () { return callback(true); });
    window.addEventListener('blur', function () { return callback(false); });
}
exports.monitorPageFocusChange = monitorPageFocusChange;
