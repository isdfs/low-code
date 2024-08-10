/**
 * EventDrivenAnimationOptions 用于配置事件驱动动画的选项。
 * @param event - 触发动画的事件类型（如 'click', 'hover', 'scroll' 等）。
 * @param animation - 要执行的 KeyframeAnimation 实例。
 */
interface EventDrivenAnimationOptions {
    event: string;
    animation: KeyframeAnimation;
}
/**
* EventDrivenAnimation 类实现了事件驱动动画管理。
*/
declare class EventDrivenAnimation {
    private event;
    private animation;
    private element;
    constructor(element: HTMLElement, options: EventDrivenAnimationOptions);
    /**
     * init 方法初始化事件监听器。
     */
    private init;
    /**
     * handleEvent 方法在事件触发时执行动画。
     */
    private handleEvent;
}
/**
* 使用示例：
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* const eventAnim = new EventDrivenAnimation(element, { event: 'click', animation: anim });
* // 当用户点击元素时触发动画
*/
