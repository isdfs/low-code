"use strict";
/**
* FrameSync 类实现了帧同步动画管理。
*/
var FrameSync = /** @class */ (function () {
    function FrameSync(options) {
        this.animationFrameId = null;
        this.animations = options.animations;
    }
    /**
     * start 方法开始帧同步动画。
     */
    FrameSync.prototype.start = function () {
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    /**
     * stop 方法停止帧同步动画。
     */
    FrameSync.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    };
    /**
     * animate 方法在每个帧上执行所有动画。
     */
    FrameSync.prototype.animate = function () {
        this.animations.forEach(function (animation) {
            animation.start();
        });
        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));
    };
    return FrameSync;
}());
/**
* 使用示例：
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 800 });
* const frameSync = new FrameSync({ animations: [anim1, anim2] });
* frameSync.start(); // 在每个帧上同步执行 anim1 和 anim2
*/
