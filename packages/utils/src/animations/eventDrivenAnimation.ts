/**
 * EventDrivenAnimationOptions 用于配置事件驱动动画的选项。
 * @param event - 触发动画的事件类型（如 'click', 'hover', 'scroll' 等）。
 * @param animation - 要执行的 KeyframeAnimation 实例。
 */
interface EventDrivenAnimationOptions {
  event: string;
  animation: KeyframeAnimation;
}

/**
* EventDrivenAnimation 类实现了事件驱动动画管理。
*/
class EventDrivenAnimation {
  private event: string;
  private animation: KeyframeAnimation;
  private element: HTMLElement;

  constructor(element: HTMLElement, options: EventDrivenAnimationOptions) {
      this.element = element;
      this.event = options.event;
      this.animation = options.animation;
      this.init();
  }

  /**
   * init 方法初始化事件监听器。
   */
  private init() {
      this.element.addEventListener(this.event, this.handleEvent.bind(this));
  }

  /**
   * handleEvent 方法在事件触发时执行动画。
   */
  private handleEvent() {
      this.animation.start();
  }
}

/**
* 使用示例：
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* const eventAnim = new EventDrivenAnimation(element, { event: 'click', animation: anim });
* // 当用户点击元素时触发动画
*/
