"use strict";
/**
 * 多平台埋点支持模块。
 *
 * 该模块提供了一个通用的埋点接口，支持Web和移动端平台（如React Native）。
 * 根据运行环境自动选择适当的埋点方式。
 *
 * @example
 * ```
 * const tracker = new CrossPlatformTracker('/track');
 * tracker.trackEvent('app_launch', { platform: 'web' });
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
exports.CrossPlatformTracker = void 0;
var CrossPlatformTracker = /** @class */ (function () {
    function CrossPlatformTracker(url) {
        this.url = url;
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    }
    /**
     * 跟踪事件并根据平台选择合适的埋点方式。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    CrossPlatformTracker.prototype.trackEvent = function (eventName, eventData) {
        var data = __assign({ event: eventName, platform: this.isMobile ? 'mobile' : 'web', timestamp: new Date().toISOString() }, eventData);
        if (this.isMobile) {
            this.trackMobile(data);
        }
        else {
            this.trackWeb(data);
        }
    };
    /**
     * 在Web平台上发送事件数据。
     * @param {Record<string, any>} data - 事件数据。
     * @returns {void}
     */
    CrossPlatformTracker.prototype.trackWeb = function (data) {
        navigator.sendBeacon(this.url, JSON.stringify(data));
    };
    /**
     * 在移动平台上发送事件数据（假设为React Native的实现）。
     * @param {Record<string, any>} data - 事件数据。
     * @returns {void}
     */
    CrossPlatformTracker.prototype.trackMobile = function (data) {
        // 假设存在一个Native Module来处理埋点数据
        // NativeModules.TrackingModule.sendEvent(data);
        console.log('发送到移动平台的事件:', data);
    };
    return CrossPlatformTracker;
}());
exports.CrossPlatformTracker = CrossPlatformTracker;
