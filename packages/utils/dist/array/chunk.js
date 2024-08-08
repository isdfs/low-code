"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = void 0;
/**
 * 将数组按指定大小分块。
 *
 * @param array - 要分块的数组。
 * @param size - 每块的大小。
 * @returns 分块后的数组。
 */
function chunk(array, size) {
    var chunkedArr = [];
    for (var i = 0; i < array.length; i += size) {
        chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
}
exports.chunk = chunk;
