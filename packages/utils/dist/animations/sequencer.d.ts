/**
* AnimationSequencer 用于管理和执行动画序列的类。
*/
export declare class AnimationSequencer {
    private steps;
    /**
     * addStep 方法用于向序列中添加动画步骤。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     * @param delay - 执行此动画前的延迟时间，以毫秒为单位。
     */
    addStep(animation: KeyframeAnimation, delay: number): void;
    /**
     * start 方法开始执行动画序列。
     */
    start(): void;
}
/**
* 使用示例：
* const sequencer = new AnimationSequencer();
* const anim1 = new KeyframeAnimation(element1, { duration: 500, easing: t => t });
* const anim2 = new KeyframeAnimation(element2, { duration: 1000, easing: t => t * t });
* sequencer.addStep(anim1, 0); // 立即开始 anim1
* sequencer.addStep(anim2, 500); // anim1 结束后 500ms 开始 anim2
* sequencer.start();
*/
