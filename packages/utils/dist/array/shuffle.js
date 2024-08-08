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
exports.shuffle = void 0;
/**
 * 随机打乱数组的顺序。
 *
 * @param {T[]} array - 要打乱顺序的数组。
 * @returns {T[]} 打乱顺序后的新数组。
 *
 * @example
 * const shuffledArray = shuffle([1, 2, 3, 4, 5]);
 * console.log(shuffledArray); // [3, 5, 1, 4, 2]（示例，顺序随机）
 */
function shuffle(array) {
    var _a;
    var shuffledArray = __spreadArray([], array, true);
    for (var i = shuffledArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [shuffledArray[j], shuffledArray[i]], shuffledArray[i] = _a[0], shuffledArray[j] = _a[1];
    }
    return shuffledArray;
}
exports.shuffle = shuffle;
