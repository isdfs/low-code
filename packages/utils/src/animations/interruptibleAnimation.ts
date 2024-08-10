/**
 * InterruptibleAnimationOptions 用于配置可中断动画的选项。
 * @param duration - 动画的总时长，以毫秒为单位。
 * @param easing - 动画的缓动函数。
 */
interface InterruptibleAnimationOptions {
  duration: number;
  easing?: (t: number) => number;
}

/**
* InterruptibleAnimation 类实现了可中断动画。
*/
class InterruptibleAnimation {
  private element: HTMLElement;
  private options: InterruptibleAnimationOptions;
  private startTime: number | null = null;
  private animationFrameId: number | null = null;
  private isInterrupted: boolean = false;

  constructor(element: HTMLElement, options: InterruptibleAnimationOptions) {
      this.element = element;
      this.options = options;
  }

  /**
   * start 方法开始或恢复动画。
   */
  start() {
      this.isInterrupted = false;
      this.startTime = this.startTime || Date.now();
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * interrupt 方法中断动画，并可选择重置状态。
   * @param reset - 是否重置动画状态。
   */
  interrupt(reset: boolean = false) {
      this.isInterrupted = true;
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
      if (reset) {
          this.startTime = null;
          this.element.style.transform = '';
      }
  }

  /**
   * animate 方法在每个帧上执行动画。
   */
  private animate() {
      if (this.isInterrupted) return;
      const elapsed = Date.now() - this.startTime!;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.options.easing ? this.options.easing(progress) : progress;

      this.element.style.transform = `translateX(${easedProgress * 100}px)`;

      if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      }
  }
}

/**
* 使用示例：
* const anim = new InterruptibleAnimation(element, { duration: 1000 });
* anim.start(); // 开始动画
* // 在需要时调用 anim.interrupt(true) 中断并重置动画
*/
