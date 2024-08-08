"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animateScrollTo = void 0;
/**
 * 平滑滚动窗口或元素到目标位置。
 * @param targetPosition - 目标位置（滚动高度）。
 * @param duration - 动画持续时间（毫秒）。
 * @param element - 可选，默认是documentElement，要滚动的元素。
 */
function animateScrollTo(targetPosition, duration, element) {
    if (element === void 0) { element = document.documentElement; }
    var startPosition = element.scrollTop;
    var distance = targetPosition - startPosition;
    var startTime = null;
    function animation(currentTime) {
        if (startTime === null)
            startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        element.scrollTop = run;
        if (timeElapsed < duration)
            requestAnimationFrame(animation);
    }
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1)
            return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}
exports.animateScrollTo = animateScrollTo;
