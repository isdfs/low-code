/**
 * 事件追踪器模块，用于收集和记录用户行为事件。
 */

export interface Event {
  eventType: string;
  payload: Record<string, any>;
  timestamp: number;
}

export class EventTracker {
  private events: Event[] = [];
  private endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /**
   * 记录一个事件。
   * @param eventType 事件类型。
   * @param payload 事件数据。
   */
  track(eventType: string, payload: Record<string, any>): void {
    const event: Event = {
      eventType,
      payload,
      timestamp: Date.now(),
    };
    this.events.push(event);
  }

  /**
   * 将收集的事件发送到服务器。
   * @returns 返回发送的结果。
   */
  async sendEvents(): Promise<any> {
    if (this.events.length === 0) {
      return;
    }

    const eventsToSend = this.events.slice();
    this.events = [];

    const response = await fetch(this.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventsToSend),
    });

    if (!response.ok) {
      throw new Error(`事件发送失败，状态码: ${response.status}`);
    }

    return response.json();
  }

  /**
   * 启动事件批量发送的定时器。
   * @param interval 发送间隔时间，单位为毫秒。
   */
  startBatchSending(interval: number): void {
    setInterval(() => this.sendEvents(), interval);
  }
}

/**
 * 使用示例：
 * ```typescript
 * const tracker = new EventTracker('https://example.com/events');
 * 
 * tracker.track('page_view', { url: window.location.href });
 * tracker.track('button_click', { id: 'submit_button' });
 * 
 * tracker.startBatchSending(10000); // 每10秒发送一次事件
 * ```
 */
