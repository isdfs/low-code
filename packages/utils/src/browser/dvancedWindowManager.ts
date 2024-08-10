/**
 * 高级窗口管理模块，支持多个窗口或标签页之间的数据通信和同步。
 * @module AdvancedWindowManager
 */

export interface WindowMessage {
  type: string;
  data: any;
}

class AdvancedWindowManager {
  private channel: BroadcastChannel;

  constructor(channelName: string = 'window-manager') {
      this.channel = new BroadcastChannel(channelName);
      this.initMessageListener();
  }

  /**
   * 初始化消息监听器。
   */
  private initMessageListener(): void {
      this.channel.onmessage = (event) => {
          console.log('Received message from another window:', event.data);
          this.handleMessage(event.data);
      };
  }

  /**
   * 发送消息到所有其他窗口。
   * @param {WindowMessage} message - 要发送的消息对象。
   */
  sendMessage(message: WindowMessage): void {
      this.channel.postMessage(message);
      this.syncToLocalStorage(message);
  }

  /**
   * 处理接收到的消息。
   * @param {WindowMessage} message - 接收到的消息对象。
   */
  private handleMessage(message: WindowMessage): void {
      // 在这里处理消息，具体逻辑视应用而定
      console.log('Handling message:', message);
  }

  /**
   * 同步消息到本地存储，用于窗口重新加载时恢复状态。
   * @param {WindowMessage} message - 要同步的消息对象。
   */
  private syncToLocalStorage(message: WindowMessage): void {
      localStorage.setItem('lastMessage', JSON.stringify(message));
  }

  /**
   * 从本地存储恢复最后的消息。
   * @returns {WindowMessage | null} 恢复的消息对象，若无则返回 null。
   */
  restoreLastMessage(): WindowMessage | null {
      const lastMessage = localStorage.getItem('lastMessage');
      return lastMessage ? JSON.parse(lastMessage) : null;
  }
}

const windowManager = new AdvancedWindowManager();
export default windowManager;
