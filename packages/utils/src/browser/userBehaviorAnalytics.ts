/**
 * 用户行为分析模块，用于捕获并分析用户在网页上的行为。
 * @module UserBehaviorAnalytics
 */

interface UserBehaviorData {
  eventType: string;
  element: string;
  timestamp: number;
  additionalInfo?: Record<string, any>;
}

class UserBehaviorAnalytics {
  private data: UserBehaviorData[] = [];

  constructor() {
      this.initEventListeners();
  }

  private initEventListeners(): void {
      document.addEventListener('click', this.captureClickEvent.bind(this));
      window.addEventListener('scroll', this.captureScrollEvent.bind(this));
      window.addEventListener('beforeunload', this.sendDataToServer.bind(this));
  }

  private captureClickEvent(event: MouseEvent): void {
      const target = event.target as HTMLElement;
      this.data.push({
          eventType: 'click',
          element: target.tagName.toLowerCase(),
          timestamp: Date.now(),
          additionalInfo: { x: event.clientX, y: event.clientY },
      });
  }

  private captureScrollEvent(): void {
      this.data.push({
          eventType: 'scroll',
          element: 'window',
          timestamp: Date.now(),
          additionalInfo: { scrollY: window.scrollY },
      });
  }

  private async sendDataToServer(): Promise<void> {
      if (this.data.length === 0) return;

      try {
          await fetch('/user-behavior-analytics', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(this.data),
          });
      } catch (error) {
          console.error('Failed to send user behavior data:', error);
      }
  }

  /**
   * 获取收集到的用户行为数据。
   * @returns {UserBehaviorData[]} 用户行为数据数组。
   */
  getCollectedData(): UserBehaviorData[] {
      return this.data;
  }
}

const userBehaviorAnalytics = new UserBehaviorAnalytics();
export default userBehaviorAnalytics;
