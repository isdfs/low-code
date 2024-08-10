"use strict";
/**
 * AnimationQueue 类实现了动画队列管理。
 */
var AnimationQueue = /** @class */ (function () {
    function AnimationQueue() {
        this.queue = [];
        this.currentIndex = 0;
    }
    /**
     * enqueue 方法将动画添加到队列。
     * @param animation - 要添加的 KeyframeAnimation 实例。
     */
    AnimationQueue.prototype.enqueue = function (animation) {
        this.queue.push(animation);
    };
    /**
     * start 方法开始执行队列中的动画。
     */
    AnimationQueue.prototype.start = function () {
        if (this.queue.length === 0)
            return;
        this.runNextAnimation();
    };
    /**
     * runNextAnimation 方法执行队列中的下一个动画。
     */
    AnimationQueue.prototype.runNextAnimation = function () {
        var _this = this;
        if (this.currentIndex >= this.queue.length)
            return;
        var animation = this.queue[this.currentIndex++];
        animation.start();
        setTimeout(function () {
            _this.runNextAnimation();
        }, animation.options.duration);
    };
    return AnimationQueue;
}());
/**
* 使用示例：
* const anim1 = new KeyframeAnimation(element1, { duration: 500 });
* const anim2 = new KeyframeAnimation(element2, { duration: 800 });
* const queue = new AnimationQueue();
* queue.enqueue(anim1);
* queue.enqueue(anim2);
* queue.start(); // 顺序执行 anim1 和 anim2
*/
