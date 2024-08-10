"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimationSequencer = void 0;
/**
* AnimationSequencer 用于管理和执行动画序列的类。
*/
var AnimationSequencer = /** @class */ (function () {
    function AnimationSequencer() {
        this.steps = [];
    }
    /**
     * addStep 方法用于向序列中添加动画步骤。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     * @param delay - 执行此动画前的延迟时间，以毫秒为单位。
     */
    AnimationSequencer.prototype.addStep = function (animation, delay) {
        this.steps.push({ animation: animation, delay: delay });
    };
    /**
     * start 方法开始执行动画序列。
     */
    AnimationSequencer.prototype.start = function () {
        var totalDelay = 0;
        this.steps.forEach(function (step) {
            totalDelay += step.delay;
            setTimeout(function () {
                step.animation.start();
            }, totalDelay);
        });
    };
    return AnimationSequencer;
}());
exports.AnimationSequencer = AnimationSequencer;
/**
* 使用示例：
* const sequencer = new AnimationSequencer();
* const anim1 = new KeyframeAnimation(element1, { duration: 500, easing: t => t });
* const anim2 = new KeyframeAnimation(element2, { duration: 1000, easing: t => t * t });
* sequencer.addStep(anim1, 0); // 立即开始 anim1
* sequencer.addStep(anim2, 500); // anim1 结束后 500ms 开始 anim2
* sequencer.start();
*/
