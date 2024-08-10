/**
 * 本地缓存未发送数据的埋点系统。
 * 
 * 该模块在网络不可用时将埋点数据缓存到本地，当网络恢复时自动发送所有未发送的数据。
 * 
 * @example
 * ```
 * const tracker = new OfflineEventTracker('/track');
 * tracker.trackEvent('page_view', { page: '/home' });
 * ```
 */

export class OfflineEventTracker {
  private url: string;
  private storageKey: string = 'offline_event_cache';
  private events: Array<Record<string, any>> = [];

  constructor(url: string) {
      this.url = url;
      this.loadCachedEvents();
      this.listenForNetworkStatus();
  }

  /**
   * 跟踪事件并将其存储在本地，直到网络恢复。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {void}
   */
  trackEvent(eventName: string, eventData: Record<string, any>): void {
      const event = {
          event: eventName,
          timestamp: new Date().toISOString(),
          ...eventData,
      };
      this.events.push(event);
      this.cacheEvents();
      this.checkAndFlush();
  }

  /**
   * 检查网络状态，如果在线则发送所有缓存的事件。
   * @returns {void}
   */
  private checkAndFlush(): void {
      if (navigator.onLine) {
          this.flush();
      }
  }

  /**
   * 发送所有缓存的事件并清除缓存。
   * @returns {void}
   */
  private flush(): void {
      if (this.events.length === 0) return;

      const dataToSend = this.events.splice(0, this.events.length);
      this.sendData(dataToSend);

      // 清空缓存
      localStorage.removeItem(this.storageKey);
  }

  /**
   * 发送事件数据到服务器。
   * @param {Array<Record<string, any>>} data - 要发送的数据数组。
   * @returns {void}
   */
  private sendData(data: Array<Record<string, any>>): void {
      navigator.sendBeacon(this.url, JSON.stringify(data));
  }

  /**
   * 将未发送的事件缓存到本地存储。
   * @returns {void}
   */
  private cacheEvents(): void {
      localStorage.setItem(this.storageKey, JSON.stringify(this.events));
  }

  /**
   * 加载未发送的缓存事件。
   * @returns {void}
   */
  private loadCachedEvents(): void {
      const cachedData = localStorage.getItem(this.storageKey);
      if (cachedData) {
          this.events = JSON.parse(cachedData);
      }
  }

  /**
   * 监听网络状态的变化，并在网络恢复时自动发送缓存的事件。
   * @returns {void}
   */
  private listenForNetworkStatus(): void {
      window.addEventListener('online', () => this.flush());
  }
}
