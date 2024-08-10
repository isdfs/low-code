/**
 * ParallaxOptions 用于配置视差效果的选项。
 * @param speed - 视差移动的速度系数。
 * @param axis - 指定视差效果的移动方向 ('x' | 'y')。
 */
interface ParallaxOptions {
    speed: number;
    axis?: 'x' | 'y';
}
/**
* ParallaxEffect 类实现了一个视差滚动效果系统。
*/
declare class ParallaxEffect {
    private element;
    private options;
    constructor(element: HTMLElement, options: ParallaxOptions);
    /**
     * init 方法用于初始化视差效果，绑定滚动事件。
     */
    private init;
    /**
     * applyEffect 方法在滚动时应用视差效果。
     */
    private applyEffect;
}
/**
* 使用示例：
* const parallax = new ParallaxEffect(myBackgroundElement, { speed: 0.5 });
* // 该示例将根据页面的滚动位置，移动元素以创建视差效果。
*/
