"use strict";
/**
 * 自动化埋点配置模块。
 *
 * 该模块允许通过配置文件自动化埋点，无需手动添加事件监听器。
 *
 * @example
 * ```
 * const config = [
 *   { selector: '.track-click', event: 'click', eventName: 'button_click' },
 *   { selector: '.track-form', event: 'submit', eventName: 'form_submit' },
 * ];
 * const tracker = new AutoTracker(config, '/track');
 * tracker.init();
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTracker = void 0;
var AutoTracker = /** @class */ (function () {
    function AutoTracker(config, url) {
        this.config = config;
        this.url = url;
    }
    /**
     * 初始化自动化埋点，根据配置文件为指定的元素添加事件监听器。
     * @returns {void}
     */
    AutoTracker.prototype.init = function () {
        var _this = this;
        this.config.forEach(function (_a) {
            var selector = _a.selector, event = _a.event, eventName = _a.eventName;
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener(event, function () {
                    var data = {
                        event: eventName,
                        element: element.outerHTML,
                        timestamp: new Date().toISOString(),
                    };
                    navigator.sendBeacon(_this.url, JSON.stringify(data));
                });
            });
        });
    };
    return AutoTracker;
}());
exports.AutoTracker = AutoTracker;
