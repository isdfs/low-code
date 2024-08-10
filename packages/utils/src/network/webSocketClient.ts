/**
 * WebSocket客户端模块，实现自动重连和消息处理。
 */

export class WebSocketClient {
  private url: string;
  private websocket: WebSocket | null = null;
  private reconnectInterval: number;
  private isConnected: boolean = false;
  private listeners: Map<string, (data: any) => void> = new Map();

  /**
   * 创建一个WebSocket客户端实例。
   * @param url WebSocket服务器的URL。
   * @param reconnectInterval 重连间隔时间，单位为毫秒，默认为5000毫秒。
   */
  constructor(url: string, reconnectInterval: number = 5000) {
    this.url = url;
    this.reconnectInterval = reconnectInterval;
    this.connect();
  }

  /**
   * 连接到WebSocket服务器。
   * @private
   */
  private connect(): void {
    this.websocket = new WebSocket(this.url);

    this.websocket.onopen = () => {
      this.isConnected = true;
      console.log('WebSocket连接已建立');
    };

    this.websocket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      const listener = this.listeners.get(message.type);
      if (listener) {
        listener(message.payload);
      }
    };

    this.websocket.onclose = () => {
      this.isConnected = false;
      console.log('WebSocket连接已关闭，正在尝试重连...');
      setTimeout(() => this.connect(), this.reconnectInterval);
    };

    this.websocket.onerror = (error) => {
      console.error('WebSocket发生错误:', error);
    };
  }

  /**
   * 发送消息到WebSocket服务器。
   * @param type 消息类型。
   * @param payload 消息数据。
   */
  sendMessage(type: string, payload: any): void {
    if (this.isConnected && this.websocket) {
      this.websocket.send(JSON.stringify({ type, payload }));
    } else {
      console.error('WebSocket未连接，无法发送消息');
    }
  }

  /**
   * 注册消息监听器。
   * @param type 消息类型。
   * @param listener 处理该类型消息的监听器函数。
   */
  addMessageListener(type: string, listener: (data: any) => void): void {
    this.listeners.set(type, listener);
  }

  /**
   * 注销消息监听器。
   * @param type 消息类型。
   */
  removeMessageListener(type: string): void {
    this.listeners.delete(type);
  }

  /**
   * 关闭WebSocket连接。
   */
  close(): void {
    if (this.websocket) {
      this.websocket.close();
    }
  }
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
