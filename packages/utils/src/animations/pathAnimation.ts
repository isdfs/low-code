/**
 * PathAnimationOptions 用于配置路径动画的选项。
 * @param duration - 动画的总时长，以毫秒为单位。
 * @param easing - 动画的缓动函数，可以是自定义的缓动函数或标准的缓动函数。
 * @param loop - 是否循环播放动画。
 */
interface PathAnimationOptions {
  duration: number;
  easing?: (t: number) => number;
  loop?: boolean;
}

/**
* PathAnimation 类实现了基于 SVG 路径的动画效果。
*/
class PathAnimation {
  private path: SVGPathElement;
  private element: HTMLElement;
  private options: PathAnimationOptions;
  private length: number;
  private startTime: number | null = null;
  private animationFrameId: number | null = null;

  constructor(path: SVGPathElement, element: HTMLElement, options: PathAnimationOptions) {
      this.path = path;
      this.element = element;
      this.options = options;
      this.length = this.path.getTotalLength();
  }

  /**
   * start 方法开始路径动画。
   */
  start() {
      this.startTime = null;
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止路径动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
      this.startTime = null;
  }

  /**
   * animate 方法是路径动画的主循环，计算对象在路径上的位置并应用。
   * @param timestamp - 当前时间戳。
   */
  private animate(timestamp: number) {
      if (!this.startTime) this.startTime = timestamp;
      const elapsed = timestamp - this.startTime;
      const progress = Math.min(elapsed / this.options.duration, 1);
      const easedProgress = this.options.easing ? this.options.easing(progress) : progress;
      const point = this.path.getPointAtLength(easedProgress * this.length);

      this.element.style.transform = `translate(${point.x}px, ${point.y}px)`;

      if (progress < 1) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      } else if (this.options.loop) {
          this.start();
      }
  }
}

/**
* 使用示例：
* const path = document.querySelector('path#myPath') as SVGPathElement;
* const element = document.querySelector('#myElement') as HTMLElement;
* const pathAnim = new PathAnimation(path, element, { duration: 2000, easing: t => t * t, loop: true });
* pathAnim.start();
*/
