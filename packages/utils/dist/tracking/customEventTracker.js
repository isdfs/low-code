"use strict";
/**
 * 自定义事件追踪系统。
 *
 * 该模块允许开发者定义和追踪复杂的自定义事件，并根据用户行为触发这些事件。
 *
 * @example
 * ```
 * const tracker = new CustomEventTracker('/track');
 * tracker.defineEvent('complex_event', ['click', 'scroll'], (events) => {
 *   return events.some(event => event.event === 'click') && events.some(event => event.event === 'scroll');
 * });
 * tracker.trackEvent('click', { button: 'start' });
 * tracker.trackEvent('scroll', { position: 300 });
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEventTracker = void 0;
var CustomEventTracker = /** @class */ (function () {
    function CustomEventTracker(url) {
        this.events = [];
        this.customEvents = {};
        this.url = url;
    }
    /**
     * 定义一个自定义事件。
     * @param {string} eventName - 自定义事件的名称。
     * @param {string[]} conditions - 触发此事件所需的基础事件条件。
     * @param {EventCondition} handler - 判断自定义事件是否触发的处理函数。
     * @returns {void}
     */
    CustomEventTracker.prototype.defineEvent = function (eventName, conditions, handler) {
        this.customEvents[eventName] = { conditions: conditions, handler: handler };
    };
    /**
     * 追踪基础事件，并检查是否应触发自定义事件。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    CustomEventTracker.prototype.trackEvent = function (eventName, eventData) {
        var event = {
            event: eventName,
            data: eventData,
            timestamp: new Date().toISOString(),
        };
        this.events.push(event);
        this.checkCustomEvents();
    };
    /**
     * 检查并触发自定义事件。
     * @returns {void}
     */
    CustomEventTracker.prototype.checkCustomEvents = function () {
        var _this = this;
        Object.keys(this.customEvents).forEach(function (eventName) {
            var _a = _this.customEvents[eventName], conditions = _a.conditions, handler = _a.handler;
            var relevantEvents = _this.events.filter(function (event) { return conditions.includes(event.event); });
            if (handler(relevantEvents)) {
                _this.triggerCustomEvent(eventName, relevantEvents);
            }
        });
    };
    /**
     * 触发自定义事件并发送数据到服务器。
     * @param {string} eventName - 自定义事件名称。
     * @param {TrackedEvent[]} events - 触发自定义事件的基础事件列表。
     * @returns {void}
     */
    CustomEventTracker.prototype.triggerCustomEvent = function (eventName, events) {
        var data = {
            event: eventName,
            events: events,
            timestamp: new Date().toISOString(),
        };
        navigator.sendBeacon(this.url, JSON.stringify(data));
    };
    return CustomEventTracker;
}());
exports.CustomEventTracker = CustomEventTracker;
