"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorDarkModeChange = exports.isDarkMode = void 0;
/**
 * 检测浏览器是否处于暗模式。
 *
 * 该方法用于检测用户是否启用了操作系统或浏览器的暗模式，并可以监听暗模式的切换事件。
 *
 * @returns {boolean} 若当前处于暗模式，则返回 true，否则返回 false。
 *
 * @example
 * ```
 * if (isDarkMode()) {
 *   console.log('当前处于暗模式');
 * } else {
 *   console.log('当前处于明亮模式');
 * }
 *
 * monitorDarkModeChange(isDark => {
 *   console.log(`暗模式切换: ${isDark ? '暗模式' : '明亮模式'}`);
 * });
 * ```
 */
function isDarkMode() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
exports.isDarkMode = isDarkMode;
/**
* 监听暗模式切换事件。
*
* 当用户在系统或浏览器中切换暗模式时，触发指定的回调函数。
*
* @param {(isDark: boolean) => void} callback - 当检测到暗模式切换时执行的回调函数，参数表示当前是否为暗模式。
*
* @returns {void}
*
* @example
* ```
* monitorDarkModeChange(isDark => {
*   console.log(`暗模式切换: ${isDark ? '暗模式' : '明亮模式'}`);
* });
* ```
*/
function monitorDarkModeChange(callback) {
    var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', function (event) {
        callback(event.matches);
    });
}
exports.monitorDarkModeChange = monitorDarkModeChange;
