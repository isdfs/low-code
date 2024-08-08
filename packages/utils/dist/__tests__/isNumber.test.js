"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isNumber_1 = require("../number/isNumber");
describe('isNumber', function () {
    it('应识别数字', function () {
        expect((0, isNumber_1.isNumber)(123)).toBe(true);
        expect((0, isNumber_1.isNumber)(NaN)).toBe(false);
    });
    it('应返回 false 对于非数字值', function () {
        expect((0, isNumber_1.isNumber)('123')).toBe(false);
        expect((0, isNumber_1.isNumber)({})).toBe(false);
        expect((0, isNumber_1.isNumber)([])).toBe(false);
    });
});
