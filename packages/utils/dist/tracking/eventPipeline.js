"use strict";
/**
 * 高级事件流处理埋点模块。
 *
 * 该模块允许建立一个事件处理管道，逐步处理和转换埋点数据。
 *
 * @example
 * ```
 * const pipeline = new EventPipeline('/track');
 * pipeline
 *   .use(event => ({ ...event, enhanced: true })) // 添加自定义数据
 *   .use(event => event.type !== 'ignore' ? event : null) // 过滤掉不需要的事件
 *   .track('page_view', { page: '/home' });
 * ```
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPipeline = void 0;
var EventPipeline = /** @class */ (function () {
    function EventPipeline(url) {
        this.processors = [];
        this.url = url;
    }
    /**
     * 添加一个处理器到事件处理管道中。
     * @param {EventProcessor} processor - 事件处理函数。
     * @returns {this} 返回当前实例以支持链式调用。
     */
    EventPipeline.prototype.use = function (processor) {
        this.processors.push(processor);
        return this;
    };
    /**
     * 跟踪事件并通过管道处理数据。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    EventPipeline.prototype.track = function (eventName, eventData) {
        var event = __assign({ event: eventName, timestamp: new Date().toISOString() }, eventData);
        for (var _i = 0, _a = this.processors; _i < _a.length; _i++) {
            var processor = _a[_i];
            event = processor(event);
            if (!event)
                return; // 事件被过滤掉
        }
        this.sendEvent(event);
    };
    /**
     * 发送处理后的事件数据到服务器。
     * @param {Record<string, any>} event - 处理后的事件数据。
     * @returns {void}
     */
    EventPipeline.prototype.sendEvent = function (event) {
        navigator.sendBeacon(this.url, JSON.stringify(event));
    };
    return EventPipeline;
}());
exports.EventPipeline = EventPipeline;
