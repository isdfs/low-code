"use strict";
/**
 * 点击事件埋点模块。
 *
 * 该模块用于捕获页面上的点击事件，并将点击事件数据发送到指定的服务器。
 *
 * @param {string} selector - 要捕获点击事件的元素选择器。
 * @param {string} [url='/track'] - 接收点击事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackClickEvent('.trackable-button');
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackClickEvent = void 0;
/**
 * 捕获点击事件并发送数据。
 *
 * @param {string} selector - 要捕获点击事件的元素选择器。
 * @param {string} [url='/track'] - 接收点击事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackClickEvent('.trackable-button');
 * ```
 */
function trackClickEvent(selector, url) {
    if (url === void 0) { url = '/track'; }
    document.querySelectorAll(selector).forEach(function (element) {
        element.addEventListener('click', function (event) {
            var data = {
                event: 'click',
                element: event.target.outerHTML,
                timestamp: new Date().toISOString(),
            };
            navigator.sendBeacon(url, JSON.stringify(data));
        });
    });
}
exports.trackClickEvent = trackClickEvent;
