"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.throttle = exports.once = exports.debounce = void 0;
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
var debounce_1 = require("./debounce");
Object.defineProperty(exports, "debounce", { enumerable: true, get: function () { return debounce_1.debounce; } });
/**
 * 确保某个函数只被调用一次。
 * @param fn - 要执行的函数。
 * @returns 一个只执行一次的函数。
 */
var once_1 = require("./once");
Object.defineProperty(exports, "once", { enumerable: true, get: function () { return once_1.once; } });
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
var throttle_1 = require("./throttle");
Object.defineProperty(exports, "throttle", { enumerable: true, get: function () { return throttle_1.throttle; } });
