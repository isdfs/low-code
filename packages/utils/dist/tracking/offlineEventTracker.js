"use strict";
/**
 * 本地缓存未发送数据的埋点系统。
 *
 * 该模块在网络不可用时将埋点数据缓存到本地，当网络恢复时自动发送所有未发送的数据。
 *
 * @example
 * ```
 * const tracker = new OfflineEventTracker('/track');
 * tracker.trackEvent('page_view', { page: '/home' });
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
exports.OfflineEventTracker = void 0;
var OfflineEventTracker = /** @class */ (function () {
    function OfflineEventTracker(url) {
        this.storageKey = 'offline_event_cache';
        this.events = [];
        this.url = url;
        this.loadCachedEvents();
        this.listenForNetworkStatus();
    }
    /**
     * 跟踪事件并将其存储在本地，直到网络恢复。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    OfflineEventTracker.prototype.trackEvent = function (eventName, eventData) {
        var event = __assign({ event: eventName, timestamp: new Date().toISOString() }, eventData);
        this.events.push(event);
        this.cacheEvents();
        this.checkAndFlush();
    };
    /**
     * 检查网络状态，如果在线则发送所有缓存的事件。
     * @returns {void}
     */
    OfflineEventTracker.prototype.checkAndFlush = function () {
        if (navigator.onLine) {
            this.flush();
        }
    };
    /**
     * 发送所有缓存的事件并清除缓存。
     * @returns {void}
     */
    OfflineEventTracker.prototype.flush = function () {
        if (this.events.length === 0)
            return;
        var dataToSend = this.events.splice(0, this.events.length);
        this.sendData(dataToSend);
        // 清空缓存
        localStorage.removeItem(this.storageKey);
    };
    /**
     * 发送事件数据到服务器。
     * @param {Array<Record<string, any>>} data - 要发送的数据数组。
     * @returns {void}
     */
    OfflineEventTracker.prototype.sendData = function (data) {
        navigator.sendBeacon(this.url, JSON.stringify(data));
    };
    /**
     * 将未发送的事件缓存到本地存储。
     * @returns {void}
     */
    OfflineEventTracker.prototype.cacheEvents = function () {
        localStorage.setItem(this.storageKey, JSON.stringify(this.events));
    };
    /**
     * 加载未发送的缓存事件。
     * @returns {void}
     */
    OfflineEventTracker.prototype.loadCachedEvents = function () {
        var cachedData = localStorage.getItem(this.storageKey);
        if (cachedData) {
            this.events = JSON.parse(cachedData);
        }
    };
    /**
     * 监听网络状态的变化，并在网络恢复时自动发送缓存的事件。
     * @returns {void}
     */
    OfflineEventTracker.prototype.listenForNetworkStatus = function () {
        var _this = this;
        window.addEventListener('online', function () { return _this.flush(); });
    };
    return OfflineEventTracker;
}());
exports.OfflineEventTracker = OfflineEventTracker;
