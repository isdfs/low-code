"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var flatten_1 = require("../array/flatten");
describe('flatten', function () {
    it('应展平嵌套数组', function () {
        expect((0, flatten_1.flatten)([1, [2, [3, 4], 5]])).toEqual([1, 2, 3, 4, 5]);
    });
    it('处理空数组应返回空数组', function () {
        expect((0, flatten_1.flatten)([])).toEqual([]);
    });
    it('应处理已展平的数组', function () {
        expect((0, flatten_1.flatten)([1, 2, 3])).toEqual([1, 2, 3]);
    });
});
