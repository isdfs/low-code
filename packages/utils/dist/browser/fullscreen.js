"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullscreen = exports.toggleFullscreen = void 0;
/**
 * 全屏模式切换。
 *
 * 该方法用于在浏览器中开启或退出全屏模式，可以应用于视频播放器、游戏等场景。
 *
 * @returns {void}
 *
 * @example
 * ```
 * toggleFullscreen(document.getElementById('myElement'));
 *
 * document.addEventListener('fullscreenchange', () => {
 *   if (isFullscreen()) {
 *     console.log('当前处于全屏模式');
 *   } else {
 *     console.log('已退出全屏模式');
 *   }
 * });
 * ```
 */
function toggleFullscreen(element) {
    if (!document.fullscreenElement) {
        element.requestFullscreen().catch(function (err) {
            console.error("\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F\u6A21\u5F0F: ".concat(err.message));
        });
    }
    else {
        document.exitFullscreen().catch(function (err) {
            console.error("\u65E0\u6CD5\u9000\u51FA\u5168\u5C4F\u6A21\u5F0F: ".concat(err.message));
        });
    }
}
exports.toggleFullscreen = toggleFullscreen;
/**
* 检测当前是否处于全屏模式。
*
* @returns {boolean} 若当前处于全屏模式，则返回 true，否则返回 false。
*
* @example
* ```
* if (isFullscreen()) {
*   console.log('当前处于全屏模式');
* } else {
*   console.log('未处于全屏模式');
* }
* ```
*/
function isFullscreen() {
    return !!document.fullscreenElement;
}
exports.isFullscreen = isFullscreen;
