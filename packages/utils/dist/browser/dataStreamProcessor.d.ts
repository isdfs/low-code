/**
 * 浏览器实时数据流处理模块，支持通过WebSocket、HTTP/2和WebRTC处理实时数据流。
 * @module DataStreamProcessor
 */
export interface StreamProcessorOptions {
    bufferSize?: number;
    retryInterval?: number;
}
export interface WebSocketMessageHandler {
    (data: any): void;
}
export interface ErrorHandler {
    (error: Error): void;
}
declare class DataStreamProcessor {
    private buffer;
    private bufferSize;
    private retryInterval;
    private socket;
    constructor(options?: StreamProcessorOptions);
    /**
     * 初始化 WebSocket 连接并处理消息。
     * @param {string} url - WebSocket 服务端 URL。
     * @param {WebSocketMessageHandler} messageHandler - 消息处理函数。
     * @param {ErrorHandler} errorHandler - 错误处理函数。
     */
    initWebSocket(url: string, messageHandler: WebSocketMessageHandler, errorHandler: ErrorHandler): void;
    /**
     * 关闭 WebSocket 连接。
     */
    closeWebSocket(): void;
    /**
     * 通过 HTTP/2 处理实时数据流。
     * @param {string} url - HTTP/2 服务端 URL。
     * @param {WebSocketMessageHandler} messageHandler - 数据处理函数。
     */
    initHTTP2Stream(url: string, messageHandler: WebSocketMessageHandler): Promise<void>;
}
declare const dataStreamProcessor: DataStreamProcessor;
export default dataStreamProcessor;
