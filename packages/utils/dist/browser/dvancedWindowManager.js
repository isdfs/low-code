"use strict";
/**
 * 高级窗口管理模块，支持多个窗口或标签页之间的数据通信和同步。
 * @module AdvancedWindowManager
 */
Object.defineProperty(exports, "__esModule", { value: true });
var AdvancedWindowManager = /** @class */ (function () {
    function AdvancedWindowManager(channelName) {
        if (channelName === void 0) { channelName = 'window-manager'; }
        this.channel = new BroadcastChannel(channelName);
        this.initMessageListener();
    }
    /**
     * 初始化消息监听器。
     */
    AdvancedWindowManager.prototype.initMessageListener = function () {
        var _this = this;
        this.channel.onmessage = function (event) {
            console.log('Received message from another window:', event.data);
            _this.handleMessage(event.data);
        };
    };
    /**
     * 发送消息到所有其他窗口。
     * @param {WindowMessage} message - 要发送的消息对象。
     */
    AdvancedWindowManager.prototype.sendMessage = function (message) {
        this.channel.postMessage(message);
        this.syncToLocalStorage(message);
    };
    /**
     * 处理接收到的消息。
     * @param {WindowMessage} message - 接收到的消息对象。
     */
    AdvancedWindowManager.prototype.handleMessage = function (message) {
        // 在这里处理消息，具体逻辑视应用而定
        console.log('Handling message:', message);
    };
    /**
     * 同步消息到本地存储，用于窗口重新加载时恢复状态。
     * @param {WindowMessage} message - 要同步的消息对象。
     */
    AdvancedWindowManager.prototype.syncToLocalStorage = function (message) {
        localStorage.setItem('lastMessage', JSON.stringify(message));
    };
    /**
     * 从本地存储恢复最后的消息。
     * @returns {WindowMessage | null} 恢复的消息对象，若无则返回 null。
     */
    AdvancedWindowManager.prototype.restoreLastMessage = function () {
        var lastMessage = localStorage.getItem('lastMessage');
        return lastMessage ? JSON.parse(lastMessage) : null;
    };
    return AdvancedWindowManager;
}());
var windowManager = new AdvancedWindowManager();
exports.default = windowManager;
