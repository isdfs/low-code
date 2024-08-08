"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = void 0;
/**
 * 节流函数，限制函数在一定时间内只能执行一次。
 *
 * @param {Function} func - 需要节流的函数。
 * @param {number} limit - 时间限制（毫秒）。
 * @returns {Function} 节流后的函数。
 *
 * @example
 * const throttledFunc = throttle(() => { console.log('Called'); }, 1000);
 * window.addEventListener('resize', throttledFunc);
 */
function throttle(func, limit) {
    var inThrottle;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(function () { return inThrottle = false; }, limit);
        }
    };
}
exports.throttle = throttle;
