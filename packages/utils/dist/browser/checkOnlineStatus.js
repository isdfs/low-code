"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorOnlineStatus = exports.isOnline = void 0;
/**
 * 检测浏览器的在线状态。
 *
 * 该方法用于检测当前浏览器是否连接到网络，并可以注册网络状态变化的监听器。
 *
 * @returns {boolean} 若浏览器在线，则返回 true，否则返回 false。
 *
 * @example
 * ```
 * const online = isOnline();
 * console.log(`当前网络状态: ${online ? '在线' : '离线'}`);
 *
 * monitorOnlineStatus(
 *   () => console.log('网络恢复在线！'),
 *   () => console.log('网络已断开！')
 * );
 * ```
 */
function isOnline() {
    return navigator.onLine;
}
exports.isOnline = isOnline;
/**
* 注册网络状态变化的事件监听器。
*
* 通过此方法，你可以在网络状态发生变化时执行相应的操作。
*
* @param {() => void} onOnline - 当网络恢复在线时触发的回调函数。
* @param {() => void} onOffline - 当网络离线时触发的回调函数。
*
* @example
* ```
* monitorOnlineStatus(
*   () => console.log('网络恢复在线！'),
*   () => console.log('网络已断开！')
* );
* ```
*/
function monitorOnlineStatus(onOnline, onOffline) {
    window.addEventListener('online', onOnline);
    window.addEventListener('offline', onOffline);
}
exports.monitorOnlineStatus = monitorOnlineStatus;
