"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delegate = void 0;
/**
 * 事件委托
 *
 * @param {Element} parent - 父元素
 * @param {string} selector - 目标子元素的选择器
 * @param {string} eventType - 事件类型
 * @param {Function} callback - 事件触发时的回调函数
 *
 * @example
 * delegate(document.body, 'button', 'click', (event) => {
 *   console.log('Button clicked:', event.target);
 * });
 */
function delegate(parent, selector, eventType, callback) {
    parent.addEventListener(eventType, function (event) {
        var targetElement = event.target;
        if (targetElement && targetElement.matches(selector)) {
            callback(event);
        }
    });
}
exports.delegate = delegate;
