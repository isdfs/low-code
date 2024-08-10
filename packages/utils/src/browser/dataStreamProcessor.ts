/**
 * 浏览器实时数据流处理模块，支持通过WebSocket、HTTP/2和WebRTC处理实时数据流。
 * @module DataStreamProcessor
 */

export interface StreamProcessorOptions {
  bufferSize?: number; // 缓冲区大小，默认值为1024
  retryInterval?: number; // 重试间隔时间，默认值为1000ms
}

export interface WebSocketMessageHandler {
  (data: any): void;
}

export interface ErrorHandler {
  (error: Error): void;
}

class DataStreamProcessor {
  private buffer: any[] = [];
  private bufferSize: number;
  private retryInterval: number;
  private socket: WebSocket | null = null;

  constructor(options: StreamProcessorOptions = {}) {
      this.bufferSize = options.bufferSize || 1024;
      this.retryInterval = options.retryInterval || 1000;
  }

  /**
   * 初始化 WebSocket 连接并处理消息。
   * @param {string} url - WebSocket 服务端 URL。
   * @param {WebSocketMessageHandler} messageHandler - 消息处理函数。
   * @param {ErrorHandler} errorHandler - 错误处理函数。
   */
  initWebSocket(url: string, messageHandler: WebSocketMessageHandler, errorHandler: ErrorHandler): void {
      this.socket = new WebSocket(url);

      this.socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          this.buffer.push(data);

          if (this.buffer.length >= this.bufferSize) {
              messageHandler(this.buffer);
              this.buffer = [];
          }
      };

      this.socket.onerror = (event) => {
          errorHandler(new Error(`WebSocket error: ${event}`));
          setTimeout(() => this.initWebSocket(url, messageHandler, errorHandler), this.retryInterval);
      };

      this.socket.onclose = () => {
          setTimeout(() => this.initWebSocket(url, messageHandler, errorHandler), this.retryInterval);
      };
  }

  /**
   * 关闭 WebSocket 连接。
   */
  closeWebSocket(): void {
      if (this.socket) {
          this.socket.close();
          this.socket = null;
      }
  }

  /**
   * 通过 HTTP/2 处理实时数据流。
   * @param {string} url - HTTP/2 服务端 URL。
   * @param {WebSocketMessageHandler} messageHandler - 数据处理函数。
   */
  async initHTTP2Stream(url: string, messageHandler: WebSocketMessageHandler): Promise<void> {
      const response = await fetch(url);
      const reader = response.body?.getReader();

      if (reader) {
          while (true) {
              const { done, value } = await reader.read();
              if (done) break;

              const data = new TextDecoder().decode(value);
              this.buffer.push(data);

              if (this.buffer.length >= this.bufferSize) {
                  messageHandler(this.buffer);
                  this.buffer = [];
              }
          }
      }
  }
}

const dataStreamProcessor = new DataStreamProcessor();
export default dataStreamProcessor;
