"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.memoize = void 0;
/**
 * 缓存函数结果的高阶函数 (memoization)
 *
 * @param {Function} func - 需要缓存的函数
 * @returns {Function} 返回缓存处理后的函数
 *
 * @example
 * const expensiveFunc = (num) => {
 *   console.log('Calculating...');
 *   return num * 2;
 * };
 * const memoizedFunc = memoize(expensiveFunc);
 * console.log(memoizedFunc(5)); // Calculating... 10
 * console.log(memoizedFunc(5)); // 10 (cached)
 */
function memoize(func) {
    var cache = new Map();
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        else {
            var result = func.apply(void 0, args);
            cache.set(key, result);
            return result;
        }
    };
}
exports.memoize = memoize;
