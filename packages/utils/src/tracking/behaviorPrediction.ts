/**
 * 基于用户行为的预测模型。
 * 
 * 该模块利用用户的历史行为数据构建简单的预测模型，预测用户未来的行为或意图。
 * 
 * @example
 * ```
 * const predictor = new BehaviorPredictor();
 * predictor.recordEvent('page_view', { page: '/home' });
 * const prediction = predictor.predictNextEvent();
 * console.log('预测的下一个事件:', prediction);
 * ```
 */

interface BehaviorEvent {
  event: string;
  data: Record<string, any>;
  timestamp: string;
}

export class BehaviorPredictor {
  private events: BehaviorEvent[] = [];

  /**
   * 记录用户行为事件。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {void}
   */
  recordEvent(eventName: string, eventData: Record<string, any>): void {
      const event: BehaviorEvent = {
          event: eventName,
          data: eventData,
          timestamp: new Date().toISOString(),
      };
      this.events.push(event);
  }

  /**
   * 简单的事件频率分析，预测下一个最可能发生的事件。
   * @returns {string | null} 返回预测的下一个事件名称，若无预测结果则返回null。
   */
  predictNextEvent(): string | null {
      if (this.events.length === 0) return null;

      const eventFrequency: Record<string, number> = {};
      this.events.forEach(event => {
          eventFrequency[event.event] = (eventFrequency[event.event] || 0) + 1;
      });

      return Object.keys(eventFrequency).reduce((a, b) => (eventFrequency[a] > eventFrequency[b] ? a : b));
  }
}
