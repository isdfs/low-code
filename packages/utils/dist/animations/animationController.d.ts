/**
 * AnimationController 用于管理多个动画的控制器。
 */
declare class AnimationController {
    private animations;
    private isPaused;
    /**
     * addAnimation 方法用于向控制器中添加动画。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     */
    addAnimation(animation: KeyframeAnimation): void;
    /**
     * startAll 方法启动所有动画。
     */
    startAll(): void;
    /**
     * pauseAll 方法暂停所有动画。
     */
    pauseAll(): void;
    /**
     * resumeAll 方法恢复所有动画。
     */
    resumeAll(): void;
    /**
     * stopAll 方法停止所有动画。
     */
    stopAll(): void;
}
/**
* 使用示例：
* const controller = new AnimationController();
* const anim1 = new KeyframeAnimation(element1, { duration: 1000, easing: t => t });
* const anim2 = new KeyframeAnimation(element2, { duration: 1500, easing: t => t * t });
* controller.addAnimation(anim1);
* controller.addAnimation(anim2);
* controller.startAll();
* // 可以随时调用 controller.pauseAll() 和 controller.resumeAll() 来控制动画。
* 该模块提供了一个动画控制器，用于管理和协调多个动画的同步和控制。它允许用户启动、暂停、恢复和停止动画，并且支持链式调用。
*/
