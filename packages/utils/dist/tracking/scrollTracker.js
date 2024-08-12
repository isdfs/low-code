"use strict";
/**
 * 滚动事件埋点模块。
 *
 * 该模块用于捕获页面滚动事件，并将滚动深度数据发送到指定的服务器。
 *
 * @param {string} [url='/track'] - 接收滚动事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackScrollDepth();
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackScrollDepth = void 0;
/**
 * 捕获滚动深度并发送数据。
 *
 * @param {string} [url='/track'] - 接收滚动事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackScrollDepth();
 * ```
 */
function trackScrollDepth(url) {
    if (url === void 0) { url = '/track'; }
    window.addEventListener('scroll', function () {
        var scrollDepth = Math.max(window.scrollY + window.innerHeight, document.documentElement.scrollHeight, document.body.scrollHeight);
        var data = {
            event: 'scroll_depth',
            depth: scrollDepth,
            timestamp: new Date().toISOString(),
        };
        navigator.sendBeacon(url, JSON.stringify(data));
    });
}
exports.trackScrollDepth = trackScrollDepth;
