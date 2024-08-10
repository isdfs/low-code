"use strict";
/**
* EventDrivenAnimation 类实现了事件驱动动画管理。
*/
var EventDrivenAnimation = /** @class */ (function () {
    function EventDrivenAnimation(element, options) {
        this.element = element;
        this.event = options.event;
        this.animation = options.animation;
        this.init();
    }
    /**
     * init 方法初始化事件监听器。
     */
    EventDrivenAnimation.prototype.init = function () {
        this.element.addEventListener(this.event, this.handleEvent.bind(this));
    };
    /**
     * handleEvent 方法在事件触发时执行动画。
     */
    EventDrivenAnimation.prototype.handleEvent = function () {
        this.animation.start();
    };
    return EventDrivenAnimation;
}());
/**
* 使用示例：
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* const eventAnim = new EventDrivenAnimation(element, { event: 'click', animation: anim });
* // 当用户点击元素时触发动画
*/
