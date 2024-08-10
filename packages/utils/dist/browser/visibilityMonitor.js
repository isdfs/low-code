"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorVisibilityChange = exports.isPageVisible = void 0;
/**
 * 页面可见性监控模块，用于检测页面是否在用户视野内。
 *
 * 该方法可以用来判断当前页面是否在用户的视线内，并可以注册监听器以响应可见性变化。
 *
 * @returns {boolean} 若页面可见，则返回 true，否则返回 false。
 *
 * @example
 * ```
 * if (isPageVisible()) {
 *   console.log('页面当前是可见的');
 * } else {
 *   console.log('页面当前不可见');
 * }
 *
 * monitorVisibilityChange(visible => {
 *   if (visible) {
 *     console.log('页面现在可见');
 *   } else {
 *     console.log('页面现在不可见');
 *   }
 * });
 * ```
 */
function isPageVisible() {
    return document.visibilityState === 'visible';
}
exports.isPageVisible = isPageVisible;
/**
* 注册页面可见性变化的事件监听器。
*
* 当页面的可见性状态发生变化时，该方法会触发指定的回调函数，告诉开发者页面当前是否可见。
*
* @param {(visible: boolean) => void} callback - 页面可见性变化时的回调函数，参数表示页面是否可见。
*
* @example
* ```
* monitorVisibilityChange(visible => {
*   if (visible) {
*     console.log('页面现在可见');
*   } else {
*     console.log('页面现在不可见');
*   }
* });
* ```
*/
function monitorVisibilityChange(callback) {
    document.addEventListener('visibilitychange', function () {
        callback(isPageVisible());
    });
}
exports.monitorVisibilityChange = monitorVisibilityChange;
