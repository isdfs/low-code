/**
 * 多平台埋点支持模块。
 * 
 * 该模块提供了一个通用的埋点接口，支持Web和移动端平台（如React Native）。
 * 根据运行环境自动选择适当的埋点方式。
 * 
 * @example
 * ```
 * const tracker = new CrossPlatformTracker('/track');
 * tracker.trackEvent('app_launch', { platform: 'web' });
 * ```
 */

export class CrossPlatformTracker {
  private url: string;
  private isMobile: boolean;

  constructor(url: string) {
      this.url = url;
      this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  }

  /**
   * 跟踪事件并根据平台选择合适的埋点方式。
   * @param {string} eventName - 事件名称。
   * @param {Record<string, any>} eventData - 事件关联的详细数据。
   * @returns {void}
   */
  trackEvent(eventName: string, eventData: Record<string, any>): void {
      const data = {
          event: eventName,
          platform: this.isMobile ? 'mobile' : 'web',
          timestamp: new Date().toISOString(),
          ...eventData,
      };

      if (this.isMobile) {
          this.trackMobile(data);
      } else {
          this.trackWeb(data);
      }
  }

  /**
   * 在Web平台上发送事件数据。
   * @param {Record<string, any>} data - 事件数据。
   * @returns {void}
   */
  private trackWeb(data: Record<string, any>): void {
      navigator.sendBeacon(this.url, JSON.stringify(data));
  }

  /**
   * 在移动平台上发送事件数据（假设为React Native的实现）。
   * @param {Record<string, any>} data - 事件数据。
   * @returns {void}
   */
  private trackMobile(data: Record<string, any>): void {
      // 假设存在一个Native Module来处理埋点数据
      // NativeModules.TrackingModule.sendEvent(data);
      console.log('发送到移动平台的事件:', data);
  }
}
