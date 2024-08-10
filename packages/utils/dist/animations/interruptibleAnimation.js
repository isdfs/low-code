"use strict";
/**
* InterruptibleAnimation 类实现了可中断动画。
*/
var InterruptibleAnimation = /** @class */ (function () {
    function InterruptibleAnimation(element, options) {
        this.startTime = null;
        this.animationFrameId = null;
        this.isInterrupted = false;
        this.element = element;
        this.options = options;
    }
    /**
     * start 方法开始或恢复动画。
     */
    InterruptibleAnimation.prototype.start = function () {
        this.isInterrupted = false;
        this.startTime = this.startTime || Date.now();
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * interrupt 方法中断动画，并可选择重置状态。
     * @param reset - 是否重置动画状态。
     */
    InterruptibleAnimation.prototype.interrupt = function (reset) {
        if (reset === void 0) { reset = false; }
        this.isInterrupted = true;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        if (reset) {
            this.startTime = null;
            this.element.style.transform = '';
        }
    };
    /**
     * animate 方法在每个帧上执行动画。
     */
    InterruptibleAnimation.prototype.animate = function () {
        if (this.isInterrupted)
            return;
        var elapsed = Date.now() - this.startTime;
        var progress = Math.min(elapsed / this.options.duration, 1);
        var easedProgress = this.options.easing ? this.options.easing(progress) : progress;
        this.element.style.transform = "translateX(".concat(easedProgress * 100, "px)");
        if (progress < 1) {
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
    };
    return InterruptibleAnimation;
}());
/**
* 使用示例：
* const anim = new InterruptibleAnimation(element, { duration: 1000 });
* anim.start(); // 开始动画
* // 在需要时调用 anim.interrupt(true) 中断并重置动画
*/
