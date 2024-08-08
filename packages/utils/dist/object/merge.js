"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.merge = void 0;
/**
 * 深度合并多个对象。
 *
 * @param target - 目标对象。
 * @param sources - 要合并的源对象。
 * @returns 合并后的目标对象。
 */
function merge(target) {
    var _a, _b;
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (!sources.length)
        return target;
    var source = sources.shift();
    if (source) {
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                var value = source[key];
                if (isObject(value)) {
                    if (!target[key])
                        Object.assign(target, (_a = {}, _a[key] = {}, _a));
                    merge(target[key], value);
                }
                else {
                    Object.assign(target, (_b = {}, _b[key] = value, _b));
                }
            }
        }
    }
    return merge.apply(void 0, __spreadArray([target], sources, false));
}
exports.merge = merge;
/**
 * 检查一个值是否为对象。
 *
 * @param item - 要检查的值。
 * @returns 如果是对象则返回 true，否则返回 false。
 */
function isObject(item) {
    return item && typeof item === 'object' && !Array.isArray(item);
}
exports.isObject = isObject;
