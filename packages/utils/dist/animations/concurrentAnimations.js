"use strict";
/**
* ConcurrentAnimations 类实现了并发动画管理。
*/
var ConcurrentAnimations = /** @class */ (function () {
    function ConcurrentAnimations(options) {
        this.currentIndex = 0;
        this.activeAnimations = 0;
        this.animations = options.animations;
        this.parallelism = options.parallelism;
    }
    /**
     * start 方法开始并发执行动画。
     */
    ConcurrentAnimations.prototype.start = function () {
        for (var i = 0; i < this.parallelism; i++) {
            this.runNextAnimation();
        }
    };
    /**
     * runNextAnimation 方法用于启动下一个动画，并在动画完成后递归启动后续动画。
     */
    ConcurrentAnimations.prototype.runNextAnimation = function () {
        var _this = this;
        if (this.currentIndex >= this.animations.length)
            return;
        var animation = this.animations[this.currentIndex++];
        this.activeAnimations++;
        animation.start();
        setTimeout(function () {
            _this.activeAnimations--;
            if (_this.currentIndex < _this.animations.length) {
                _this.runNextAnimation();
            }
        }, animation.options.duration);
    };
    return ConcurrentAnimations;
}());
/**
* 使用示例：
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 800 });
* const anim3 = new KeyframeAnimation(element3, { duration: 1000 });
* const concurrentAnim = new ConcurrentAnimations({ animations: [anim1, anim2, anim3], parallelism: 2 });
* concurrentAnim.start(); // 同时启动 anim1 和 anim2，anim3 在一个动画完成后启动
*/
