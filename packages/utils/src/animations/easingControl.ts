/**
 * EasingControlOptions 用于配置缓动控制的选项。
 * @param duration - 动画的总时长，以毫秒为单位。
 * @param easing - 缓动函数，可以是预定义的函数或自定义函数。
 */
interface EasingControlOptions {
  duration: number;
  easing: (t: number) => number;
}

/**
* EasingControl 类实现了基于时间的缓动控制系统。
*/
class EasingControl {
  private element: HTMLElement;
  private options: EasingControlOptions;
  private startTime: number | null = null;
  private animationFrameId: number | null = null;

  constructor(element: HTMLElement, options: EasingControlOptions) {
      this.element = element;
      this.options = options;
  }

  /**
   * start 方法开始缓动控制动画。
   */
  start() {
      this.startTime = null;
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止缓动控制动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
  }

  /**
   * animate 方法是缓动控制动画的主循环，应用缓动效果。
   */
  private animate(timestamp: number) {
      if (!this.startTime) this.startTime = timestamp;
      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.options.easing(progress);

      this.element.style.transform = `translateX(${easedProgress * 100}px)`;

      if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      }
  }
}

/**
* 使用示例：
* const easingAnim = new EasingControl(myElement, {
*     duration: 1000,
*     easing: t => t * t * (3 - 2 * t) // 自定义缓动函数
* });
* easingAnim.start(); // 启动缓动控制动画
*/
