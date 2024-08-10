/**
 * WebSocket客户端模块，实现自动重连和消息处理。
 */
export declare class WebSocketClient {
    private url;
    private websocket;
    private reconnectInterval;
    private isConnected;
    private listeners;
    /**
     * 创建一个WebSocket客户端实例。
     * @param url WebSocket服务器的URL。
     * @param reconnectInterval 重连间隔时间，单位为毫秒，默认为5000毫秒。
     */
    constructor(url: string, reconnectInterval?: number);
    /**
     * 连接到WebSocket服务器。
     * @private
     */
    private connect;
    /**
     * 发送消息到WebSocket服务器。
     * @param type 消息类型。
     * @param payload 消息数据。
     */
    sendMessage(type: string, payload: any): void;
    /**
     * 注册消息监听器。
     * @param type 消息类型。
     * @param listener 处理该类型消息的监听器函数。
     */
    addMessageListener(type: string, listener: (data: any) => void): void;
    /**
     * 注销消息监听器。
     * @param type 消息类型。
     */
    removeMessageListener(type: string): void;
    /**
     * 关闭WebSocket连接。
     */
    close(): void;
}
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
