"use strict";
/**
* ConditionalAnimation 类实现了条件动画管理。
*/
var ConditionalAnimation = /** @class */ (function () {
    function ConditionalAnimation(options, checkInterval) {
        if (checkInterval === void 0) { checkInterval = 100; }
        this.intervalId = null;
        this.condition = options.condition;
        this.animation = options.animation;
        this.checkInterval = checkInterval;
    }
    /**
     * start 方法开始条件检查，并在条件满足时执行动画。
     */
    ConditionalAnimation.prototype.start = function () {
        var _this = this;
        this.intervalId = setInterval(function () {
            if (_this.condition()) {
                _this.animation.start();
                _this.stop(); // 条件满足后停止检查
            }
        }, this.checkInterval);
    };
    /**
     * stop 方法停止条件检查。
     */
    ConditionalAnimation.prototype.stop = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    return ConditionalAnimation;
}());
/**
* 使用示例：
* const condition = () => document.querySelector('#myButton')?.classList.contains('active');
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* const conditionalAnim = new ConditionalAnimation({ condition, animation: anim });
* conditionalAnim.start(); // 当条件满足时触发动画
*/
