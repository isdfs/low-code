"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animateElement = void 0;
/**
 * 动画类型的枚举。
 */
var AnimationType;
(function (AnimationType) {
    AnimationType["FadeIn"] = "fadeIn";
    AnimationType["FadeOut"] = "fadeOut";
    AnimationType["ScaleUp"] = "scaleUp";
    AnimationType["ScaleDown"] = "scaleDown";
    AnimationType["Rotate"] = "rotate";
})(AnimationType || (AnimationType = {}));
/**
* animateElement 函数用于对指定元素应用动画效果。
* @param element - 要应用动画的 DOM 元素。
* @param type - 要应用的动画类型。
* @param duration - 动画持续时间（毫秒）。
* @param callback - 动画结束后的回调函数。
*/
function animateElement(element, type, duration, callback) {
    if (duration === void 0) { duration = 500; }
    element.style.transition = "all ".concat(duration, "ms ease");
    switch (type) {
        case AnimationType.FadeIn:
            element.style.opacity = '1';
            break;
        case AnimationType.FadeOut:
            element.style.opacity = '0';
            break;
        case AnimationType.ScaleUp:
            element.style.transform = 'scale(1)';
            break;
        case AnimationType.ScaleDown:
            element.style.transform = 'scale(0.5)';
            break;
        case AnimationType.Rotate:
            element.style.transform = 'rotate(360deg)';
            break;
    }
    if (callback) {
        setTimeout(callback, duration);
    }
}
exports.animateElement = animateElement;
/**
* 使用示例：
* animateElement(myElement, AnimationType.FadeIn, 1000, () => console.log('动画结束'));
*/
