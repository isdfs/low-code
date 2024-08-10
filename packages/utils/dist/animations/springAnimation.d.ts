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
declare class SpringAnimation {
    private options;
    private element;
    private target;
    private velocity;
    private position;
    private animationFrameId;
    constructor(element: HTMLElement, target: number, options: SpringOptions);
    /**
     * start 方法开始弹性动画。
     */
    start(): void;
    /**
     * stop 方法停止弹性动画。
     */
    stop(): void;
    /**
     * animate 方法是弹性动画的主循环，模拟物理弹簧运动。
     */
    private animate;
}
/**
* 使用示例：
* const springAnim = new SpringAnimation(myElement, 300, { stiffness: 100, damping: 10, mass: 1 });
* springAnim.start();
*/
