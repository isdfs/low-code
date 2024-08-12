"use strict";
/**
 * 实时数据流埋点系统。
 *
 * 该模块将埋点数据作为实时流发送到服务器，适合实时监控用户行为的应用场景。
 *
 * @example
 * ```
 * const stream = new RealtimeEventStream('/stream');
 * stream.trackEvent('user_action', { action: 'click', element: 'button' });
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
exports.RealtimeEventStream = void 0;
var RealtimeEventStream = /** @class */ (function () {
    function RealtimeEventStream(url) {
        this.eventSource = null;
        this.url = url;
        this.initStream();
    }
    /**
     * 初始化实时事件流连接。
     * @returns {void}
     */
    RealtimeEventStream.prototype.initStream = function () {
        var _this = this;
        this.eventSource = new EventSource(this.url);
        this.eventSource.onmessage = function (event) {
            console.log('服务器推送的消息:', event.data);
        };
        this.eventSource.onerror = function (error) {
            console.error('事件流连接出错:', error);
            _this.closeStream();
        };
    };
    /**
     * 发送事件数据到服务器。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    RealtimeEventStream.prototype.trackEvent = function (eventName, eventData) {
        if (!this.eventSource || this.eventSource.readyState !== EventSource.OPEN) {
            console.error('实时事件流未连接');
            return;
        }
        var data = __assign({ event: eventName, timestamp: new Date().toISOString() }, eventData);
        fetch(this.url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        }).catch(function (error) { return console.error('发送实时事件出错:', error); });
    };
    /**
     * 关闭实时事件流连接。
     * @returns {void}
     */
    RealtimeEventStream.prototype.closeStream = function () {
        if (this.eventSource) {
            this.eventSource.close();
            this.eventSource = null;
        }
    };
    return RealtimeEventStream;
}());
exports.RealtimeEventStream = RealtimeEventStream;
