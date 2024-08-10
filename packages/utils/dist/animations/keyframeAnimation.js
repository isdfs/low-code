"use strict";
/**
* KeyframeAnimation 是关键帧动画类，用于管理和执行关键帧动画。
*/
var KeyframeAnimation = /** @class */ (function () {
    function KeyframeAnimation(element, options) {
        this.keyframes = [];
        this.startTime = null;
        this.animationFrameId = null;
        this.element = element;
        this.options = {
            easing: options.easing || (function (t) { return t; }),
            loop: options.loop || false,
            duration: options.duration
        };
    }
    /**
     * addKeyframe 方法用于向动画中添加关键帧。
     * @param keyframe - 要添加的关键帧。
     */
    KeyframeAnimation.prototype.addKeyframe = function (keyframe) {
        this.keyframes.push(keyframe);
        this.keyframes.sort(function (a, b) { return a.time - b.time; }); // 根据时间排序关键帧
    };
    /**
     * start 方法开始动画。
     */
    KeyframeAnimation.prototype.start = function () {
        this.startTime = null;
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止动画。
     */
    KeyframeAnimation.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.startTime = null;
    };
    /**
     * animate 方法是动画的主循环，用于计算当前时间点的动画状态并应用。
     * @param timestamp - 当前时间戳。
     */
    KeyframeAnimation.prototype.animate = function (timestamp) {
        if (!this.startTime)
            this.startTime = timestamp;
        var elapsed = timestamp - this.startTime;
        var progress = Math.min(elapsed / this.options.duration, 1);
        var easedProgress = this.options.easing(progress);
        this.applyProperties(easedProgress);
        if (progress < 1) {
            this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
        }
        else if (this.options.loop) {
            this.start();
        }
    };
    /**
     * applyProperties 方法根据进度应用关键帧之间的属性变化。
     * @param progress - 当前动画的进度 (0.0 - 1.0)。
     */
    KeyframeAnimation.prototype.applyProperties = function (progress) {
        var startKeyframe = null;
        var endKeyframe = null;
        for (var i = 0; i < this.keyframes.length; i++) {
            if (this.keyframes[i].time <= progress) {
                startKeyframe = this.keyframes[i];
            }
            if (this.keyframes[i].time >= progress) {
                endKeyframe = this.keyframes[i];
                break;
            }
        }
        if (startKeyframe && endKeyframe) {
            var startProgress = startKeyframe.time;
            var endProgress = endKeyframe.time;
            var localProgress = (progress - startProgress) / (endProgress - startProgress);
            for (var property in startKeyframe.properties) {
                var startValue = startKeyframe.properties[property];
                var endValue = endKeyframe.properties[property];
                if (typeof startValue === 'number' && typeof endValue === 'number') {
                    var value = startValue + (endValue - startValue) * localProgress;
                    this.element.style[property] = "".concat(value);
                }
                else {
                    this.element.style[property] = endValue;
                }
            }
        }
    };
    return KeyframeAnimation;
}());
/**
* 使用示例：
* const anim = new KeyframeAnimation(myElement, { duration: 2000, easing: t => t * t, loop: true });
* anim.addKeyframe({ time: 0, properties: { opacity: 0, transform: 'scale(0.5)' } });
* anim.addKeyframe({ time: 0.5, properties: { opacity: 1, transform: 'scale(1.0)' } });
* anim.addKeyframe({ time: 1, properties: { opacity: 0, transform: 'scale(0.5)' } });
* anim.start();
*/
