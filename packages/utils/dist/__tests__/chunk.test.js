"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunk_1 = require("../array/chunk");
describe('chunk', function () {
    it('应将数组按指定大小分块', function () {
        expect((0, chunk_1.chunk)([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    });
    it('如果块大小大于数组长度，则应返回整个数组', function () {
        expect((0, chunk_1.chunk)([1, 2], 5)).toEqual([[1, 2]]);
    });
    it('如果块大小为 1，则应返回每个元素单独作为一个块', function () {
        expect((0, chunk_1.chunk)([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    });
});
