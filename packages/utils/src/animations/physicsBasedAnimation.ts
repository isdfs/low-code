/**
 * PhysicsProperties 定义了物理动画的基本属性。
 * @param mass - 质量，影响惯性。
 * @param gravity - 重力加速度。
 * @param friction - 摩擦力系数。
 * @param restitution - 弹性系数（0 表示无反弹，1 表示完全反弹）。
 */
interface PhysicsProperties {
  mass: number;
  gravity: number;
  friction: number;
  restitution: number;
}

/**
* PhysicsBasedAnimation 类实现了基于物理模拟的动画系统。
*/
class PhysicsBasedAnimation {
  private element: HTMLElement;
  private properties: PhysicsProperties;
  private velocity: { x: number; y: number };
  private position: { x: number; y: number };
  private animationFrameId: number | null = null;

  constructor(element: HTMLElement, properties: PhysicsProperties, initialVelocity: { x: number; y: number } = { x: 0, y: 0 }) {
      this.element = element;
      this.properties = properties;
      this.velocity = initialVelocity;
      this.position = { x: 0, y: 0 };
  }

  /**
   * start 方法开始物理动画模拟。
   */
  start() {
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }

  /**
   * stop 方法停止物理动画模拟。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
  }

  /**
   * animate 方法是物理动画的主循环，计算并应用物理运动。
   */
  private animate() {
      const { mass, gravity, friction, restitution } = this.properties;

      // 更新速度和位置
      this.velocity.y += gravity / mass;
      this.velocity.x *= friction;
      this.velocity.y *= friction;

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // 碰撞检测及反弹
      if (this.position.y > window.innerHeight - this.element.clientHeight) {
          this.position.y = window.innerHeight - this.element.clientHeight;
          this.velocity.y *= -restitution;
      }
      if (this.position.x > window.innerWidth - this.element.clientWidth || this.position.x < 0) {
          this.velocity.x *= -restitution;
          this.position.x = Math.max(0, Math.min(this.position.x, window.innerWidth - this.element.clientWidth));
      }

      // 应用位移
      this.element.style.transform = `translate(${this.position.x}px, ${this.position.y}px)`;

      this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
  }
}

/**
* 使用示例：
* const physicsAnim = new PhysicsBasedAnimation(myElement, {
*     mass: 1,
*     gravity: 9.8,
*     friction: 0.9,
*     restitution: 0.8
* });
* physicsAnim.start(); // 启动基于物理模拟的动画
*/
