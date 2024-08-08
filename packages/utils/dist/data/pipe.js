"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipe = void 0;
/**
 * 管道函数，用于将多个函数组合起来按顺序执行。
 *
 * @template T - 初始数据的类型。
 * @param {(...fns: Array<(arg: T) => T>) => T} - 要按顺序执行的函数列表。
 * @returns {(initialValue: T) => T} 返回执行后的最终结果。
 *
 * @example
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const square = (x: number) => x * x;
 * const result = pipe(addOne, double, square)(2);
 * console.log(result); // 36
 */
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (initialValue) { return fns.reduce(function (acc, fn) { return fn(acc); }, initialValue); };
}
exports.pipe = pipe;
