/**
 * 自动化埋点配置模块。
 * 
 * 该模块允许通过配置文件自动化埋点，无需手动添加事件监听器。
 * 
 * @example
 * ```
 * const config = [
 *   { selector: '.track-click', event: 'click', eventName: 'button_click' },
 *   { selector: '.track-form', event: 'submit', eventName: 'form_submit' },
 * ];
 * const tracker = new AutoTracker(config, '/track');
 * tracker.init();
 * ```
 */

interface TrackerConfig {
  selector: string;
  event: string;
  eventName: string;
}

export class AutoTracker {
  private config: TrackerConfig[];
  private url: string;

  constructor(config: TrackerConfig[], url: string) {
      this.config = config;
      this.url = url;
  }

  /**
   * 初始化自动化埋点，根据配置文件为指定的元素添加事件监听器。
   * @returns {void}
   */
  init(): void {
      this.config.forEach(({ selector, event, eventName }) => {
          document.querySelectorAll(selector).forEach(element => {
              element.addEventListener(event, () => {
                  const data = {
                      event: eventName,
                      element: (element as HTMLElement).outerHTML,
                      timestamp: new Date().toISOString(),
                  };
                  navigator.sendBeacon(this.url, JSON.stringify(data));
              });
          });
      });
  }
}
