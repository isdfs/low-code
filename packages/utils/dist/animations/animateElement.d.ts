/**
 * 动画类型的枚举。
 */
declare enum AnimationType {
    FadeIn = "fadeIn",
    FadeOut = "fadeOut",
    ScaleUp = "scaleUp",
    ScaleDown = "scaleDown",
    Rotate = "rotate"
}
/**
* animateElement 函数用于对指定元素应用动画效果。
* @param element - 要应用动画的 DOM 元素。
* @param type - 要应用的动画类型。
* @param duration - 动画持续时间（毫秒）。
* @param callback - 动画结束后的回调函数。
*/
export declare function animateElement(element: HTMLElement, type: AnimationType, duration?: number, callback?: () => void): void;
export {};
/**
* 使用示例：
* animateElement(myElement, AnimationType.FadeIn, 1000, () => console.log('动画结束'));
*/
