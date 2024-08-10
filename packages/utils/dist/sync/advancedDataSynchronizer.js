"use strict";
/**
 * 高级数据同步模块，用于在多个窗口或标签页之间同步数据，并处理离线数据同步。
 * @module AdvancedDataSynchronizer
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AdvancedDataSynchronizer = /** @class */ (function () {
    function AdvancedDataSynchronizer(options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this.channel = new BroadcastChannel(options.channelName || 'data-sync');
        this.autoSync = options.autoSync || true;
        if (this.autoSync) {
            window.addEventListener('online', this.syncData.bind(this));
        }
        this.channel.onmessage = function (event) {
            console.log('Received sync data:', event.data);
            _this.handleSync(event.data);
        };
    }
    /**
     * 同步数据到所有窗口或标签页。
     * @param {any} data - 要同步的数据。
     */
    AdvancedDataSynchronizer.prototype.syncData = function (data) {
        this.channel.postMessage(data);
        localStorage.setItem('syncData', JSON.stringify(data));
    };
    /**
     * 处理接收到的同步数据。
     * @param {any} data - 接收到的数据。
     */
    AdvancedDataSynchronizer.prototype.handleSync = function (data) {
        // 处理数据同步逻辑，例如更新 UI 或缓存数据
        console.log('Sync data handled:', data);
    };
    /**
     * 恢复并同步上一次的离线数据。
     */
    AdvancedDataSynchronizer.prototype.restoreLastSync = function () {
        var lastSyncData = localStorage.getItem('syncData');
        if (lastSyncData) {
            this.handleSync(JSON.parse(lastSyncData));
        }
    };
    return AdvancedDataSynchronizer;
}());
var advancedDataSynchronizer = new AdvancedDataSynchronizer();
exports.default = advancedDataSynchronizer;
