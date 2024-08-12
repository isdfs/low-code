/**
 * GestureDrivenAnimationOptions 用于配置手势驱动动画的选项。
 * @param element - 要监听手势的目标元素。
 * @param onGesture - 手势触发时的回调函数。
 */
interface GestureDrivenAnimationOptions {
    element: HTMLElement;
    onGesture: (gesture: 'swipe' | 'pinch' | 'rotate', event: TouchEvent | MouseEvent) => void;
}
/**
* GestureDrivenAnimation 类实现了手势驱动动画。
*/
declare class GestureDrivenAnimation {
    private element;
    private onGesture;
    constructor(options: GestureDrivenAnimationOptions);
    /**
     * init 方法初始化手势监听器。
     */
    private init;
    /**
     * getDistance 方法计算两个触摸点之间的距离。
     */
    private getDistance;
}
/**
* 使用示例：
* const gestureAnim = new GestureDrivenAnimation({
*     element: myElement,
*     onGesture: (gesture, event) => {
*         if (gesture === 'swipe') {
*             myElement.style.transform = 'translateX(100px)';
*         } else if (gesture === 'pinch') {
*             myElement.style.transform = 'scale(1.2)';
*         } else if (gesture === 'rotate') {
*             myElement.style.transform = 'rotate(45deg)';
*         }
*     }
* });
* // 用户通过手势控制动画效果
*/
