/**
 * PathAnimationOptions 用于配置路径动画的选项。
 * @param duration - 动画的总时长，以毫秒为单位。
 * @param easing - 动画的缓动函数，可以是自定义的缓动函数或标准的缓动函数。
 * @param loop - 是否循环播放动画。
 */
interface PathAnimationOptions {
    duration: number;
    easing?: (t: number) => number;
    loop?: boolean;
}
/**
* PathAnimation 类实现了基于 SVG 路径的动画效果。
*/
declare class PathAnimation {
    private path;
    private element;
    private options;
    private length;
    private startTime;
    private animationFrameId;
    constructor(path: SVGPathElement, element: HTMLElement, options: PathAnimationOptions);
    /**
     * start 方法开始路径动画。
     */
    start(): void;
    /**
     * stop 方法停止路径动画。
     */
    stop(): void;
    /**
     * animate 方法是路径动画的主循环，计算对象在路径上的位置并应用。
     * @param timestamp - 当前时间戳。
     */
    private animate;
}
/**
* 使用示例：
* const path = document.querySelector('path#myPath') as SVGPathElement;
* const element = document.querySelector('#myElement') as HTMLElement;
* const pathAnim = new PathAnimation(path, element, { duration: 2000, easing: t => t * t, loop: true });
* pathAnim.start();
*/
