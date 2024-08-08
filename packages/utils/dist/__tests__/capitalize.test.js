"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = require("../string/capitalize");
describe('capitalize', function () {
    it('应将首字母大写', function () {
        expect((0, capitalize_1.capitalize)('hello')).toBe('Hello');
    });
    it('空字符串应返回空字符串', function () {
        expect((0, capitalize_1.capitalize)('')).toBe('');
    });
});
