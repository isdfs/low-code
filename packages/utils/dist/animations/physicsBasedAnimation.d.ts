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
declare class PhysicsBasedAnimation {
    private element;
    private properties;
    private velocity;
    private position;
    private animationFrameId;
    constructor(element: HTMLElement, properties: PhysicsProperties, initialVelocity?: {
        x: number;
        y: number;
    });
    /**
     * start 方法开始物理动画模拟。
     */
    start(): void;
    /**
     * stop 方法停止物理动画模拟。
     */
    stop(): void;
    /**
     * animate 方法是物理动画的主循环，计算并应用物理运动。
     */
    private animate;
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
