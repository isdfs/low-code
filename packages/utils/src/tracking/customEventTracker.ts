/**
 * 自定义事件追踪系统。
 * 
 * 该模块允许开发者定义和追踪复杂的自定义事件，并根据用户行为触发这些事件。
 * 
 * @example
 * ```
 * const tracker = new CustomEventTracker('/track');
 * tracker.defineEvent('complex_event', ['click', 'scroll'], (events) => {
 *   return events.some(event => event.event === 'click') && events.some(event => event.event === 'scroll');
 * });
 * tracker.trackEvent('click', { button: 'start' });
 * tracker.trackEvent('scroll', { position: 300 });
 * ```
 */

interface TrackedEvent {
  event: string;
  data: Record<string, any>;
  timestamp: string;
}

type EventCondition = (events: TrackedEvent[]) => boolean;

export class CustomEventTracker {
  private url: string;
  private events: TrackedEvent[] = [];
  private customEvents: Record<string, { conditions: string[]; handler: EventCondition }> = {};

  constructor(url: string) {
      this.url = url;
  }

  /**
   * 定义一个自定义事件。
   * @param {string} eventName - 自定义事件的名称。
   * @param {string[]} conditions - 触发此事件所需的基础事件条件。
   * @param {EventCondition} handler - 判断自定义事件是否触发的处理函数。
   * @returns {void}
   */
  defineEvent(eventName: string, conditions: string[], handler: EventCondition): void {
      this.customEvents[eventName] = { conditions, handler };
  }

  /**
   * 追踪基础事件，并检查是否应触发自定义事件。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {void}
   */
  trackEvent(eventName: string, eventData: Record<string, any>): void {
      const event: TrackedEvent = {
          event: eventName,
          data: eventData,
          timestamp: new Date().toISOString(),
      };
      this.events.push(event);
      this.checkCustomEvents();
  }

  /**
   * 检查并触发自定义事件。
   * @returns {void}
   */
  private checkCustomEvents(): void {
      Object.keys(this.customEvents).forEach(eventName => {
          const { conditions, handler } = this.customEvents[eventName];
          const relevantEvents = this.events.filter(event => conditions.includes(event.event));

          if (handler(relevantEvents)) {
              this.triggerCustomEvent(eventName, relevantEvents);
          }
      });
  }

  /**
   * 触发自定义事件并发送数据到服务器。
   * @param {string} eventName - 自定义事件名称。
   * @param {TrackedEvent[]} events - 触发自定义事件的基础事件列表。
   * @returns {void}
   */
  private triggerCustomEvent(eventName: string, events: TrackedEvent[]): void {
      const data = {
          event: eventName,
          events,
          timestamp: new Date().toISOString(),
      };
      navigator.sendBeacon(this.url, JSON.stringify(data));
  }
}
