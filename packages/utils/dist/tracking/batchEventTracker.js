"use strict";
/**
 * 异步批量发送埋点数据模块。
 *
 * 该模块收集用户的交互数据，并在达到设定的条件时（如批量大小或时间间隔）批量发送数据到服务器。
 *
 * @example
 * ```
 * const tracker = new BatchEventTracker('/track', { batchSize: 10, flushInterval: 5000 });
 * tracker.trackEvent('button_click', { buttonId: 'submit-button', page: 'home' });
 * tracker.flush(); // 强制发送所有未发送的数据
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
exports.BatchEventTracker = void 0;
var BatchEventTracker = /** @class */ (function () {
    function BatchEventTracker(url, options) {
        if (options === void 0) { options = {}; }
        this.events = [];
        this.flushTimer = null;
        this.url = url;
        this.batchSize = options.batchSize || 10;
        this.flushInterval = options.flushInterval || 10000;
        this.storageKey = options.storageKey || 'event_tracker_cache';
        this.loadCachedEvents();
        this.startFlushTimer();
    }
    /**
     * 跟踪事件并将其添加到队列中。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    BatchEventTracker.prototype.trackEvent = function (eventName, eventData) {
        var event = __assign({ event: eventName, timestamp: new Date().toISOString() }, eventData);
        this.events.push(event);
        this.checkFlush();
    };
    /**
     * 检查是否需要发送数据（基于批量大小）。
     * @returns {void}
     */
    BatchEventTracker.prototype.checkFlush = function () {
        if (this.events.length >= this.batchSize) {
            this.flush();
        }
    };
    /**
     * 手动发送所有未发送的数据。
     * @returns {void}
     */
    BatchEventTracker.prototype.flush = function () {
        if (this.events.length === 0)
            return;
        var dataToSend = this.events.splice(0, this.batchSize);
        this.sendData(dataToSend);
        // 更新本地缓存
        this.cacheEvents();
    };
    /**
     * 发送数据到服务器。
     * @param {Array<Record<string, any>>} data - 要发送的数据数组。
     * @returns {void}
     */
    BatchEventTracker.prototype.sendData = function (data) {
        navigator.sendBeacon(this.url, JSON.stringify(data));
    };
    /**
     * 启动自动发送的定时器。
     * @returns {void}
     */
    BatchEventTracker.prototype.startFlushTimer = function () {
        var _this = this;
        this.flushTimer = setInterval(function () { return _this.flush(); }, this.flushInterval);
    };
    /**
     * 加载未发送的缓存事件（例如，在浏览器崩溃或重新加载页面时恢复）。
     * @returns {void}
     */
    BatchEventTracker.prototype.loadCachedEvents = function () {
        var cachedData = localStorage.getItem(this.storageKey);
        if (cachedData) {
            this.events = JSON.parse(cachedData);
        }
    };
    /**
     * 将未发送的事件缓存到本地存储。
     * @returns {void}
     */
    BatchEventTracker.prototype.cacheEvents = function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.events));
    };
    /**
     * 停止自动发送定时器，并发送所有剩余的事件。
     * @returns {void}
     */
    BatchEventTracker.prototype.stop = function () {
        if (this.flushTimer) {
            clearInterval(this.flushTimer);
            this.flushTimer = null;
        }
        this.flush();
    };
    return BatchEventTracker;
}());
exports.BatchEventTracker = BatchEventTracker;
