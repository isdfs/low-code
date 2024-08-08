"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.once = void 0;
/**
 * 确保某个函数只被调用一次。
 * @param fn - 要执行的函数。
 * @returns 一个只执行一次的函数。
 */
function once(fn) {
    var called = false;
    var result;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!called) {
            called = true;
            result = fn.apply(this, args);
        }
        return result;
    };
}
exports.once = once;
