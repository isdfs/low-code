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
declare class ConditionalAnimation {
    private condition;
    private animation;
    private checkInterval;
    private intervalId;
    constructor(options: ConditionalAnimationOptions, checkInterval?: number);
    /**
     * start 方法开始条件检查，并在条件满足时执行动画。
     */
    start(): void;
    /**
     * stop 方法停止条件检查。
     */
    stop(): void;
}
/**
* 使用示例：
* const condition = () => document.querySelector('#myButton')?.classList.contains('active');
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* const conditionalAnim = new ConditionalAnimation({ condition, animation: anim });
* conditionalAnim.start(); // 当条件满足时触发动画
*/
