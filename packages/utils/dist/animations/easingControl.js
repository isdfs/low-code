"use strict";
/**
* EasingControl 类实现了基于时间的缓动控制系统。
*/
var EasingControl = /** @class */ (function () {
    function EasingControl(element, options) {
        this.startTime = null;
        this.animationFrameId = null;
        this.element = element;
        this.options = options;
    }
    /**
     * start 方法开始缓动控制动画。
     */
    EasingControl.prototype.start = function () {
        this.startTime = null;
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止缓动控制动画。
     */
    EasingControl.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    };
    /**
     * animate 方法是缓动控制动画的主循环，应用缓动效果。
     */
    EasingControl.prototype.animate = function (timestamp) {
        if (!this.startTime)
            this.startTime = timestamp;
        var elapsed = timestamp - this.startTime;
        var progress = Math.min(elapsed / this.options.duration, 1);
        var easedProgress = this.options.easing(progress);
        this.element.style.transform = "translateX(".concat(easedProgress * 100, "px)");
        if (progress < 1) {
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
    };
    return EasingControl;
}());
/**
* 使用示例：
* const easingAnim = new EasingControl(myElement, {
*     duration: 1000,
*     easing: t => t * t * (3 - 2 * t) // 自定义缓动函数
* });
* easingAnim.start(); // 启动缓动控制动画
*/
