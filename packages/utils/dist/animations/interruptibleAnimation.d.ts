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
declare class InterruptibleAnimation {
    private element;
    private options;
    private startTime;
    private animationFrameId;
    private isInterrupted;
    constructor(element: HTMLElement, options: InterruptibleAnimationOptions);
    /**
     * start 方法开始或恢复动画。
     */
    start(): void;
    /**
     * interrupt 方法中断动画，并可选择重置状态。
     * @param reset - 是否重置动画状态。
     */
    interrupt(reset?: boolean): void;
    /**
     * animate 方法在每个帧上执行动画。
     */
    private animate;
}
/**
* 使用示例：
* const anim = new InterruptibleAnimation(element, { duration: 1000 });
* anim.start(); // 开始动画
* // 在需要时调用 anim.interrupt(true) 中断并重置动画
*/
