"use strict";
/**
* SpringAnimation 类实现了一个弹性动画系统。
*/
var SpringAnimation = /** @class */ (function () {
    function SpringAnimation(element, target, options) {
        this.animationFrameId = null;
        this.element = element;
        this.target = target;
        this.options = options;
        this.velocity = 0;
        this.position = parseFloat(window.getComputedStyle(this.element).transform.split(',')[5]) || 0;
    }
    /**
     * start 方法开始弹性动画。
     */
    SpringAnimation.prototype.start = function () {
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止弹性动画。
     */
    SpringAnimation.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    };
    /**
     * animate 方法是弹性动画的主循环，模拟物理弹簧运动。
     */
    SpringAnimation.prototype.animate = function () {
        var _a = this.options, stiffness = _a.stiffness, damping = _a.damping, mass = _a.mass;
        var force = -stiffness * (this.position - this.target);
        var dampingForce = -damping * this.velocity;
        var acceleration = (force + dampingForce) / mass;
        this.velocity += acceleration;
        this.position += this.velocity;
        this.element.style.transform = "translateY(".concat(this.position, "px)");
        if (Math.abs(this.position - this.target) > 0.1 || Math.abs(this.velocity) > 0.1) {
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
        else {
            this.stop();
        }
    };
    return SpringAnimation;
}());
/**
* 使用示例：
* const springAnim = new SpringAnimation(myElement, 300, { stiffness: 100, damping: 10, mass: 1 });
* springAnim.start();
*/
