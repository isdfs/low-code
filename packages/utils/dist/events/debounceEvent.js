"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceEvent = void 0;
/**
 * 为事件处理程序添加防抖功能，限制事件处理程序的触发频率。
 *
 * @param {Function} callback - 原始事件处理程序。
 * @param {number} delay - 防抖延迟时间（毫秒）。
 * @returns {Function} 包含防抖功能的新事件处理程序。
 *
 * @example
 * const debouncedClick = debounceEvent(() => {
 *   console.log('Button clicked');
 * }, 300);
 * document.getElementById('myButton')!.addEventListener('click', debouncedClick);
 */
function debounceEvent(callback, delay) {
    var timeoutId = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId !== null) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            callback.apply(_this, args);
        }, delay);
    };
}
exports.debounceEvent = debounceEvent;
