/**
 * ProgressiveRevealOptions 用于配置渐进式显示动画的选项。
 * @param duration - 每个元素显示的持续时间，以毫秒为单位。
 * @param interval - 每个元素显示之间的间隔时间，以毫秒为单位。
 * @param easing - 动画的缓动函数。
 */
interface ProgressiveRevealOptions {
    duration: number;
    interval: number;
    easing?: (t: number) => number;
}
/**
* ProgressiveReveal 类实现了渐进式显示动画。
*/
declare class ProgressiveReveal {
    private elements;
    private options;
    constructor(elements: HTMLElement[], options: ProgressiveRevealOptions);
    /**
     * start 方法开始渐进式显示动画。
     */
    start(): void;
    /**
     * revealElement 方法显示单个元素，应用渐进式效果。
     * @param element - 要显示的元素。
     */
    private revealElement;
}
/**
* 使用示例：
* const elements = Array.from(document.querySelectorAll('.reveal-item')) as HTMLElement[];
* const reveal = new ProgressiveReveal(elements, { duration: 500, interval: 300 });
* reveal.start(); // 按顺序逐步显示每个元素
*/
