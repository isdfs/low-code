"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debouncePromises = void 0;
/**
 * 防抖 Promise 的执行，限制在指定时间内只执行最后一个请求
 *
 * @param {Function} fn - 返回 Promise 的函数
 * @param {number} wait - 防抖的等待时间 (毫秒)
 * @returns {Function} 返回处理后的函数
 *
 * @example
 * const fetchData = (query) => fetch(`https://api.example.com/search?q=${query}`);
 * const debouncedFetch = debouncePromises(fetchData, 300);
 * debouncedFetch('term').then(response => console.log(response));
 */
function debouncePromises(fn, wait) {
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            if (timeout) {
                clearTimeout(timeout);
            }
            timeout = window.setTimeout(function () {
                fn.apply(void 0, args).then(resolve).catch(reject);
            }, wait);
        });
    };
}
exports.debouncePromises = debouncePromises;
