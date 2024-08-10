/**
 * Keyframe defines the structure for an animation keyframe.
 * @param time - 时间戳，表示关键帧的位置 (0.0 - 1.0)。
 * @param properties - 要应用的CSS属性集合。
 */
interface Keyframe {
    time: number;
    properties: Record<string, string | number>;
}
/**
* KeyframeAnimationOptions 用于配置关键帧动画的选项。
* @param duration - 动画的总时长，以毫秒为单位。
* @param easing - 动画的缓动函数，可以是自定义的缓动函数或标准的缓动函数。
* @param loop - 是否循环播放动画。
*/
interface KeyframeAnimationOptions {
    duration: number;
    easing?: (t: number) => number;
    loop?: boolean;
}
/**
* KeyframeAnimation 是关键帧动画类，用于管理和执行关键帧动画。
*/
declare class KeyframeAnimation {
    private keyframes;
    private options;
    private element;
    private startTime;
    private animationFrameId;
    constructor(element: HTMLElement, options: KeyframeAnimationOptions);
    /**
     * addKeyframe 方法用于向动画中添加关键帧。
     * @param keyframe - 要添加的关键帧。
     */
    addKeyframe(keyframe: Keyframe): void;
    /**
     * start 方法开始动画。
     */
    start(): void;
    /**
     * stop 方法停止动画。
     */
    stop(): void;
    /**
     * animate 方法是动画的主循环，用于计算当前时间点的动画状态并应用。
     * @param timestamp - 当前时间戳。
     */
    private animate;
    /**
     * applyProperties 方法根据进度应用关键帧之间的属性变化。
     * @param progress - 当前动画的进度 (0.0 - 1.0)。
     */
    private applyProperties;
}
/**
* 使用示例：
* const anim = new KeyframeAnimation(myElement, { duration: 2000, easing: t => t * t, loop: true });
* anim.addKeyframe({ time: 0, properties: { opacity: 0, transform: 'scale(0.5)' } });
* anim.addKeyframe({ time: 0.5, properties: { opacity: 1, transform: 'scale(1.0)' } });
* anim.addKeyframe({ time: 1, properties: { opacity: 0, transform: 'scale(0.5)' } });
* anim.start();
*/
