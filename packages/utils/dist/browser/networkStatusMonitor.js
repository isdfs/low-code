"use strict";
/**
 * 浏览器网络状态监控模块，提供网络状态变化的监控和事件处理。
 * @module NetworkStatusMonitor
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DefaultNetworkStatusHandler = /** @class */ (function () {
    function DefaultNetworkStatusHandler() {
    }
    DefaultNetworkStatusHandler.prototype.handleStatusChange = function (status) {
        console.log('Network status changed to:', status);
        // 处理网络状态变化的逻辑
    };
    return DefaultNetworkStatusHandler;
}());
var NetworkStatusMonitor = /** @class */ (function () {
    function NetworkStatusMonitor(handler) {
        if (handler === void 0) { handler = new DefaultNetworkStatusHandler(); }
        this.handler = handler;
        this.init();
    }
    NetworkStatusMonitor.prototype.init = function () {
        var _this = this;
        window.addEventListener('online', function () { return _this.handler.handleStatusChange('online'); });
        window.addEventListener('offline', function () { return _this.handler.handleStatusChange('offline'); });
        this.checkInitialStatus();
    };
    NetworkStatusMonitor.prototype.checkInitialStatus = function () {
        if (!navigator.onLine) {
            this.handler.handleStatusChange('offline');
        }
    };
    return NetworkStatusMonitor;
}());
// 实例化并使用网络状态监控器
var networkStatusMonitor = new NetworkStatusMonitor();
exports.default = networkStatusMonitor;
