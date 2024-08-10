"use strict";
/**
 * 浏览器事件跟踪器模块，支持多种事件类型的跟踪和实时传输。
 * @module EventTracker
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClickEventStrategy = /** @class */ (function () {
    function ClickEventStrategy() {
    }
    ClickEventStrategy.prototype.track = function (event) {
        console.log('Tracking click event:', event);
        // 处理点击事件逻辑
    };
    return ClickEventStrategy;
}());
var FormSubmitEventStrategy = /** @class */ (function () {
    function FormSubmitEventStrategy() {
    }
    FormSubmitEventStrategy.prototype.track = function (event) {
        console.log('Tracking form submit event:', event);
        // 处理表单提交事件逻辑
    };
    return FormSubmitEventStrategy;
}());
var EventTracker = /** @class */ (function () {
    function EventTracker() {
        this.strategies = new Map();
    }
    EventTracker.prototype.addStrategy = function (eventType, strategy) {
        this.strategies.set(eventType, strategy);
    };
    EventTracker.prototype.trackEvent = function (event) {
        var strategy = this.strategies.get(event.type);
        if (strategy) {
            strategy.track(event);
        }
    };
    EventTracker.prototype.attachToDOM = function () {
        document.addEventListener('click', this.trackEvent.bind(this));
        document.addEventListener('submit', this.trackEvent.bind(this));
    };
    return EventTracker;
}());
// 实例化并使用事件跟踪器
var eventTracker = new EventTracker();
eventTracker.addStrategy('click', new ClickEventStrategy());
eventTracker.addStrategy('submit', new FormSubmitEventStrategy());
eventTracker.attachToDOM();
exports.default = eventTracker;
