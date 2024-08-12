"use strict";
/**
 * 埋点数据聚合与报表生成模块。
 *
 * 该模块允许从捕获的埋点数据中生成聚合报表，例如统计事件的发生频率、用户路径分析等。
 *
 * @example
 * ```
 * const aggregator = new AnalyticsAggregator();
 * aggregator.recordEvent('page_view', { page: '/home' });
 * const report = aggregator.generateReport();
 * console.log('事件报表:', report);
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnalyticsAggregator = void 0;
var AnalyticsAggregator = /** @class */ (function () {
    function AnalyticsAggregator() {
        this.events = {};
    }
    /**
     * 记录埋点事件。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    AnalyticsAggregator.prototype.recordEvent = function (eventName, eventData) {
        var key = this.generateEventKey(eventName, eventData);
        if (!this.events[key]) {
            this.events[key] = { event: eventName, data: eventData, count: 0 };
        }
        this.events[key].count += 1;
    };
    /**
     * 生成事件聚合报表。
     * @returns {Array<AggregatedEvent>} 返回聚合报表数组。
     */
    AnalyticsAggregator.prototype.generateReport = function () {
        return Object.values(this.events);
    };
    /**
     * 生成事件的唯一键，用于聚合相同类型的事件。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {string} 返回生成的唯一键。
     */
    AnalyticsAggregator.prototype.generateEventKey = function (eventName, eventData) {
        return "".concat(eventName, "-").concat(JSON.stringify(eventData));
    };
    return AnalyticsAggregator;
}());
exports.AnalyticsAggregator = AnalyticsAggregator;
