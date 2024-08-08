"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clamp_1 = require("../number/clamp");
describe('clamp', function () {
    it('应返回限制在范围内的值', function () {
        expect((0, clamp_1.clamp)(5, 1, 10)).toBe(5);
        expect((0, clamp_1.clamp)(-1, 0, 10)).toBe(0);
        expect((0, clamp_1.clamp)(15, 0, 10)).toBe(10);
    });
    it('应返回相等的最小和最大值', function () {
        expect((0, clamp_1.clamp)(5, 5, 5)).toBe(5);
    });
});
