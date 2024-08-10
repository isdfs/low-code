/**
 * SpringOptions 用于配置弹性动画的选项。
 * @param stiffness - 弹簧的刚度系数，决定弹簧的“硬度”。
 * @param damping - 阻尼系数，控制弹簧的振动速度。
 * @param mass - 质量，影响运动的惯性。
 */
interface SpringOptions {
  stiffness: number;
  damping: number;
  mass: number;
}

/**
* SpringAnimation 类实现了一个弹性动画系统。
*/
class SpringAnimation {
  private options: SpringOptions;
  private element: HTMLElement;
  private target: number;
  private velocity: number;
  private position: number;
  private animationFrameId: number | null = null;

  constructor(element: HTMLElement, target: number, options: SpringOptions) {
      this.element = element;
      this.target = target;
      this.options = options;
      this.velocity = 0;
      this.position = parseFloat(window.getComputedStyle(this.element).transform.split(',')[5]) || 0;
  }

  /**
   * start 方法开始弹性动画。
   */
  start() {
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止弹性动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
  }

  /**
   * animate 方法是弹性动画的主循环，模拟物理弹簧运动。
   */
  private animate() {
      const { stiffness, damping, mass } = this.options;

      const force = -stiffness * (this.position - this.target);
      const dampingForce = -damping * this.velocity;
      const acceleration = (force + dampingForce) / mass;

      this.velocity += acceleration;
      this.position += this.velocity;

      this.element.style.transform = `translateY(${this.position}px)`;

      if (Math.abs(this.position - this.target) > 0.1 || Math.abs(this.velocity) > 0.1) {
          this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
      } else {
          this.stop();
      }
  }
}

/**
* 使用示例：
* const springAnim = new SpringAnimation(myElement, 300, { stiffness: 100, damping: 10, mass: 1 });
* springAnim.start();
*/
