/**
 * 浏览器事件跟踪器模块，支持多种事件类型的跟踪和实时传输。
 * @module EventTracker
 */

interface EventStrategy {
  track(event: Event): void;
}

class ClickEventStrategy implements EventStrategy {
  track(event: Event): void {
      console.log('Tracking click event:', event);
      // 处理点击事件逻辑
  }
}

class FormSubmitEventStrategy implements EventStrategy {
  track(event: Event): void {
      console.log('Tracking form submit event:', event);
      // 处理表单提交事件逻辑
  }
}

class EventTracker {
  private strategies: Map<string, EventStrategy>;

  constructor() {
      this.strategies = new Map();
  }

  addStrategy(eventType: string, strategy: EventStrategy) {
      this.strategies.set(eventType, strategy);
  }

  trackEvent(event: Event) {
      const strategy = this.strategies.get(event.type);
      if (strategy) {
          strategy.track(event);
      }
  }

  attachToDOM() {
      document.addEventListener('click', this.trackEvent.bind(this));
      document.addEventListener('submit', this.trackEvent.bind(this));
  }
}

// 实例化并使用事件跟踪器
const eventTracker = new EventTracker();
eventTracker.addStrategy('click', new ClickEventStrategy());
eventTracker.addStrategy('submit', new FormSubmitEventStrategy());
eventTracker.attachToDOM();

export default eventTracker;
