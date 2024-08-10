"use strict";
/**
* AnimationMixer 类实现了动画混合器。
*/
var AnimationMixer = /** @class */ (function () {
    function AnimationMixer(element, options) {
        this.animations = [];
        this.startTime = null;
        this.animationFrameId = null;
        this.element = element;
        this.options = options;
    }
    /**
     * addAnimation 方法用于向混合器添加动画。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     * @param weight - 动画的混合权重 (0.0 - 1.0)。
     */
    AnimationMixer.prototype.addAnimation = function (animation, weight) {
        this.animations.push({ animation: animation, weight: weight });
    };
    /**
     * start 方法开始混合动画。
     */
    AnimationMixer.prototype.start = function () {
        this.startTime = null;
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止混合动画。
     */
    AnimationMixer.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.startTime = null;
    };
    /**
     * animate 方法是混合动画的主循环，计算并应用混合动画效果。
     * @param timestamp - 当前时间戳。
     */
    AnimationMixer.prototype.animate = function (timestamp) {
        if (!this.startTime)
            this.startTime = timestamp;
        var elapsed = timestamp - this.startTime;
        var progress = Math.min(elapsed / this.options.duration, 1);
        var easedProgress = this.options.easing ? this.options.easing(progress) : progress;
        this.animations.forEach(function (_a) {
            var animation = _a.animation, weight = _a.weight;
            // 模拟混合效果，通过权重调整动画影响
            var localProgress = easedProgress * weight;
            animation.start();
        });
        if (progress < 1) {
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
        else {
            this.stop();
        }
    };
    return AnimationMixer;
}());
/**
* 使用示例：
* const mixer = new AnimationMixer(myElement, { duration: 1500, easing: t => t });
* const anim1 = new KeyframeAnimation(myElement, { duration: 500 });
* const anim2 = new KeyframeAnimation(myElement, { duration: 1000 });
* mixer.addAnimation(anim1, 0.7); // anim1 权重 0.7
* mixer.addAnimation(anim2, 0.3); // anim2 权重 0.3
* mixer.start(); // 开始混合动画
*/
