"use strict";
/**
* PathAnimation 类实现了基于 SVG 路径的动画效果。
*/
var PathAnimation = /** @class */ (function () {
    function PathAnimation(path, element, options) {
        this.startTime = null;
        this.animationFrameId = null;
        this.path = path;
        this.element = element;
        this.options = options;
        this.length = this.path.getTotalLength();
    }
    /**
     * start 方法开始路径动画。
     */
    PathAnimation.prototype.start = function () {
        this.startTime = null;
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止路径动画。
     */
    PathAnimation.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.startTime = null;
    };
    /**
     * animate 方法是路径动画的主循环，计算对象在路径上的位置并应用。
     * @param timestamp - 当前时间戳。
     */
    PathAnimation.prototype.animate = function (timestamp) {
        if (!this.startTime)
            this.startTime = timestamp;
        var elapsed = timestamp - this.startTime;
        var progress = Math.min(elapsed / this.options.duration, 1);
        var easedProgress = this.options.easing ? this.options.easing(progress) : progress;
        var point = this.path.getPointAtLength(easedProgress * this.length);
        this.element.style.transform = "translate(".concat(point.x, "px, ").concat(point.y, "px)");
        if (progress < 1) {
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
        else if (this.options.loop) {
            this.start();
        }
    };
    return PathAnimation;
}());
/**
* 使用示例：
* const path = document.querySelector('path#myPath') as SVGPathElement;
* const element = document.querySelector('#myElement') as HTMLElement;
* const pathAnim = new PathAnimation(path, element, { duration: 2000, easing: t => t * t, loop: true });
* pathAnim.start();
*/
