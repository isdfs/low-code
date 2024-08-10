"use strict";
/**
 * AnimationController 用于管理多个动画的控制器。
 */
var AnimationController = /** @class */ (function () {
    function AnimationController() {
        this.animations = [];
        this.isPaused = false;
    }
    /**
     * addAnimation 方法用于向控制器中添加动画。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     */
    AnimationController.prototype.addAnimation = function (animation) {
        this.animations.push(animation);
    };
    /**
     * startAll 方法启动所有动画。
     */
    AnimationController.prototype.startAll = function () {
        this.animations.forEach(function (animation) { return animation.start(); });
    };
    /**
     * pauseAll 方法暂停所有动画。
     */
    AnimationController.prototype.pauseAll = function () {
        this.isPaused = true;
        this.animations.forEach(function (animation) { return animation.stop(); });
    };
    /**
     * resumeAll 方法恢复所有动画。
     */
    AnimationController.prototype.resumeAll = function () {
        if (this.isPaused) {
            this.isPaused = false;
            this.startAll();
        }
    };
    /**
     * stopAll 方法停止所有动画。
     */
    AnimationController.prototype.stopAll = function () {
        this.animations.forEach(function (animation) { return animation.stop(); });
        this.isPaused = false;
    };
    return AnimationController;
}());
/**
* 使用示例：
* const controller = new AnimationController();
* const anim1 = new KeyframeAnimation(element1, { duration: 1000, easing: t => t });
* const anim2 = new KeyframeAnimation(element2, { duration: 1500, easing: t => t * t });
* controller.addAnimation(anim1);
* controller.addAnimation(anim2);
* controller.startAll();
* // 可以随时调用 controller.pauseAll() 和 controller.resumeAll() 来控制动画。
* 该模块提供了一个动画控制器，用于管理和协调多个动画的同步和控制。它允许用户启动、暂停、恢复和停止动画，并且支持链式调用。
*/
