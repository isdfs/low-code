"use strict";
/**
 * WebSocket客户端模块，实现自动重连和消息处理。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebSocketClient = void 0;
var WebSocketClient = /** @class */ (function () {
    /**
     * 创建一个WebSocket客户端实例。
     * @param url WebSocket服务器的URL。
     * @param reconnectInterval 重连间隔时间，单位为毫秒，默认为5000毫秒。
     */
    function WebSocketClient(url, reconnectInterval) {
        if (reconnectInterval === void 0) { reconnectInterval = 5000; }
        this.websocket = null;
        this.isConnected = false;
        this.listeners = new Map();
        this.url = url;
        this.reconnectInterval = reconnectInterval;
        this.connect();
    }
    /**
     * 连接到WebSocket服务器。
     * @private
     */
    WebSocketClient.prototype.connect = function () {
        var _this = this;
        this.websocket = new WebSocket(this.url);
        this.websocket.onopen = function () {
            _this.isConnected = true;
            console.log('WebSocket连接已建立');
        };
        this.websocket.onmessage = function (event) {
            var message = JSON.parse(event.data);
            var listener = _this.listeners.get(message.type);
            if (listener) {
                listener(message.payload);
            }
        };
        this.websocket.onclose = function () {
            _this.isConnected = false;
            console.log('WebSocket连接已关闭，正在尝试重连...');
            setTimeout(function () { return _this.connect(); }, _this.reconnectInterval);
        };
        this.websocket.onerror = function (error) {
            console.error('WebSocket发生错误:', error);
        };
    };
    /**
     * 发送消息到WebSocket服务器。
     * @param type 消息类型。
     * @param payload 消息数据。
     */
    WebSocketClient.prototype.sendMessage = function (type, payload) {
        if (this.isConnected && this.websocket) {
            this.websocket.send(JSON.stringify({ type: type, payload: payload }));
        }
        else {
            console.error('WebSocket未连接，无法发送消息');
        }
    };
    /**
     * 注册消息监听器。
     * @param type 消息类型。
     * @param listener 处理该类型消息的监听器函数。
     */
    WebSocketClient.prototype.addMessageListener = function (type, listener) {
        this.listeners.set(type, listener);
    };
    /**
     * 注销消息监听器。
     * @param type 消息类型。
     */
    WebSocketClient.prototype.removeMessageListener = function (type) {
        this.listeners.delete(type);
    };
    /**
     * 关闭WebSocket连接。
     */
    WebSocketClient.prototype.close = function () {
        if (this.websocket) {
            this.websocket.close();
        }
    };
    return WebSocketClient;
}());
exports.WebSocketClient = WebSocketClient;
/**
 * 使用示例：
 * ```typescript
 * const wsClient = new WebSocketClient('ws://example.com/socket');
 *
 * wsClient.addMessageListener('chatMessage', (data) => {
 *   console.log('收到聊天消息:', data);
 * });
 *
 * wsClient.sendMessage('chatMessage', { text: 'Hello, World!' });
 * ```
 */
