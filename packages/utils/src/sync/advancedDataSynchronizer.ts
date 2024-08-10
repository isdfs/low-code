/**
 * 高级数据同步模块，用于在多个窗口或标签页之间同步数据，并处理离线数据同步。
 * @module AdvancedDataSynchronizer
 */

export interface SyncOptions {
  channelName?: string;
  autoSync?: boolean; // 是否在恢复在线状态时自动同步
}

class AdvancedDataSynchronizer {
  private channel: BroadcastChannel;
  private autoSync: boolean;

  constructor(options: SyncOptions = {}) {
      this.channel = new BroadcastChannel(options.channelName || 'data-sync');
      this.autoSync = options.autoSync || true;

      if (this.autoSync) {
          window.addEventListener('online', this.syncData.bind(this));
      }

      this.channel.onmessage = (event) => {
          console.log('Received sync data:', event.data);
          this.handleSync(event.data);
      };
  }

  /**
   * 同步数据到所有窗口或标签页。
   * @param {any} data - 要同步的数据。
   */
  syncData(data: any): void {
      this.channel.postMessage(data);
      localStorage.setItem('syncData', JSON.stringify(data));
  }

  /**
   * 处理接收到的同步数据。
   * @param {any} data - 接收到的数据。
   */
  private handleSync(data: any): void {
      // 处理数据同步逻辑，例如更新 UI 或缓存数据
      console.log('Sync data handled:', data);
  }

  /**
   * 恢复并同步上一次的离线数据。
   */
  restoreLastSync(): void {
      const lastSyncData = localStorage.getItem('syncData');
      if (lastSyncData) {
          this.handleSync(JSON.parse(lastSyncData));
      }
  }
}

const advancedDataSynchronizer = new AdvancedDataSynchronizer();
export default advancedDataSynchronizer;
