/**
 * 实时数据流埋点系统。
 * 
 * 该模块将埋点数据作为实时流发送到服务器，适合实时监控用户行为的应用场景。
 * 
 * @example
 * ```
 * const stream = new RealtimeEventStream('/stream');
 * stream.trackEvent('user_action', { action: 'click', element: 'button' });
 * ```
 */

export class RealtimeEventStream {
  private url: string;
  private eventSource: EventSource | null = null;

  constructor(url: string) {
      this.url = url;
      this.initStream();
  }

  /**
   * 初始化实时事件流连接。
   * @returns {void}
   */
  private initStream(): void {
      this.eventSource = new EventSource(this.url);
      this.eventSource.onmessage = (event) => {
          console.log('服务器推送的消息:', event.data);
      };
      this.eventSource.onerror = (error) => {
          console.error('事件流连接出错:', error);
          this.closeStream();
      };
  }

  /**
   * 发送事件数据到服务器。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {void}
   */
  trackEvent(eventName: string, eventData: Record<string, any>): void {
      if (!this.eventSource || this.eventSource.readyState !== EventSource.OPEN) {
          console.error('实时事件流未连接');
          return;
      }

      const data = {
          event: eventName,
          timestamp: new Date().toISOString(),
          ...eventData,
      };

      fetch(this.url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
      }).catch(error => console.error('发送实时事件出错:', error));
  }

  /**
   * 关闭实时事件流连接。
   * @returns {void}
   */
  closeStream(): void {
      if (this.eventSource) {
          this.eventSource.close();
          this.eventSource = null;
      }
  }
}
