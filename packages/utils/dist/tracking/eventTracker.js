"use strict";
/**
 * 事件埋点模块。
 *
 * 该模块提供了捕获用户事件（如点击、表单提交等）的功能，并将事件数据发送到指定的服务器。
 *
 * @example
 * ```
 * trackEvent('button_click', { buttonId: 'submit-button', page: 'home' });
 * ```
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.trackEvent = void 0;
/**
 * 发送事件数据到指定的服务器。
 *
 * @param {string} eventName - 事件名称。
 * @param {Record<string, any>} eventData - 事件关联的详细数据。
 * @param {string} [url='/track'] - 接收事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackEvent('button_click', { buttonId: 'submit-button', page: 'home' });
 * ```
 */
function trackEvent(eventName, eventData, url) {
    if (url === void 0) { url = '/track'; }
    var data = __assign({ event: eventName, timestamp: new Date().toISOString() }, eventData);
    navigator.sendBeacon(url, JSON.stringify(data));
}
exports.trackEvent = trackEvent;
