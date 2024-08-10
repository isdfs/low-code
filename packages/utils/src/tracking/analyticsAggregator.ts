/**
 * 埋点数据聚合与报表生成模块。
 * 
 * 该模块允许从捕获的埋点数据中生成聚合报表，例如统计事件的发生频率、用户路径分析等。
 * 
 * @example
 * ```
 * const aggregator = new AnalyticsAggregator();
 * aggregator.recordEvent('page_view', { page: '/home' });
 * const report = aggregator.generateReport();
 * console.log('事件报表:', report);
 * ```
 */

interface AggregatedEvent {
  event: string;
  data: Record<string, any>;
  count: number;
}

export class AnalyticsAggregator {
  private events: Record<string, AggregatedEvent> = {};

  /**
   * 记录埋点事件。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {void}
   */
  recordEvent(eventName: string, eventData: Record<string, any>): void {
      const key = this.generateEventKey(eventName, eventData);
      if (!this.events[key]) {
          this.events[key] = { event: eventName, data: eventData, count: 0 };
      }
      this.events[key].count += 1;
  }

  /**
   * 生成事件聚合报表。
   * @returns {Array<AggregatedEvent>} 返回聚合报表数组。
   */
  generateReport(): Array<AggregatedEvent> {
      return Object.values(this.events);
  }

  /**
   * 生成事件的唯一键，用于聚合相同类型的事件。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {string} 返回生成的唯一键。
   */
  private generateEventKey(eventName: string, eventData: Record<string, any>): string {
      return `${eventName}-${JSON.stringify(eventData)}`;
  }
}
