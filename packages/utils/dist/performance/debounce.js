"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounce = void 0;
/**
 * 防抖函数，在指定时间内没有新的调用时才执行。
 *
 * @param {Function} func - 需要防抖的函数。
 * @param {number} delay - 延迟时间（毫秒）。
 * @returns {Function} 防抖后的函数。
 *
 * @example
 * const debouncedFunc = debounce(() => { console.log('Called'); }, 300);
 * window.addEventListener('scroll', debouncedFunc);
 */
function debounce(func, delay) {
    var timeoutId;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeoutId !== null)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(function () { return func.apply(_this, args); }, delay);
    };
}
exports.debounce = debounce;
