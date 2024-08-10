/**
 * ConditionalAnimationOptions 用于配置条件动画的选项。
 * @param condition - 触发动画的条件函数。
 * @param animation - 要执行的 KeyframeAnimation 实例。
 */
interface ConditionalAnimationOptions {
  condition: () => boolean;
  animation: KeyframeAnimation;
}

/**
* ConditionalAnimation 类实现了条件动画管理。
*/
class ConditionalAnimation {
  private condition: () => boolean;
  private animation: KeyframeAnimation;
  private checkInterval: number;
  private intervalId: any | number | null = null;

  constructor(options: ConditionalAnimationOptions, checkInterval: number = 100) {
      this.condition = options.condition;
      this.animation = options.animation;
      this.checkInterval = checkInterval;
  }

  /**
   * start 方法开始条件检查，并在条件满足时执行动画。
   */
  start() {
      this.intervalId = setInterval(() => {
          if (this.condition()) {
              this.animation.start();
              this.stop(); // 条件满足后停止检查
          }
      }, this.checkInterval);
  }

  /**
   * stop 方法停止条件检查。
   */
  stop() {
      if (this.intervalId) {
          clearInterval(this.intervalId);
      }
  }
}

/**
* 使用示例：
* const condition = () => document.querySelector('#myButton')?.classList.contains('active');
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* const conditionalAnim = new ConditionalAnimation({ condition, animation: anim });
* conditionalAnim.start(); // 当条件满足时触发动画
*/
