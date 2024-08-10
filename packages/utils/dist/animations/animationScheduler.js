"use strict";
/**
* AnimationScheduler 用于管理和调度复杂的动画任务。
*/
var AnimationScheduler = /** @class */ (function () {
    function AnimationScheduler(checkInterval) {
        if (checkInterval === void 0) { checkInterval = 100; }
        this.tasks = [];
        this.intervalId = null;
        this.checkInterval = checkInterval;
    }
    /**
     * addTask 方法用于向调度器添加一个动画任务。
     * @param condition - 判断是否执行任务的条件函数。
     * @param animation - 要执行的 KeyframeAnimation 实例。
     */
    AnimationScheduler.prototype.addTask = function (condition, animation) {
        this.tasks.push({ condition: condition, animation: animation });
    };
    /**
     * start 方法开始调度任务。
     */
    AnimationScheduler.prototype.start = function () {
        this.intervalId = setInterval(this.checkTasks.bind(this), this.checkInterval);
    };
    /**
     * stop 方法停止调度任务。
     */
    AnimationScheduler.prototype.stop = function () {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    };
    /**
     * checkTasks 方法检查并执行符合条件的任务。
     */
    AnimationScheduler.prototype.checkTasks = function () {
        this.tasks.forEach(function (task) {
            if (task.condition()) {
                task.animation.start();
            }
        });
    };
    return AnimationScheduler;
}());
/**
* 使用示例：
* const scheduler = new AnimationScheduler(200);
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* scheduler.addTask(() => document.querySelector('#startButton')?.classList.contains('active'), anim);
* scheduler.start(); // 当 startButton 具有 active 类时启动动画
*/
