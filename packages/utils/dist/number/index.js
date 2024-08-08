"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = exports.clamp = void 0;
/**
 * 限制数字在指定的范围内。
 *
 * @param value - 要限制的数字。
 * @param min - 最小值。
 * @param max - 最大值。
 * @returns 被限制在范围内的数字。
 */
var clamp_1 = require("./clamp");
Object.defineProperty(exports, "clamp", { enumerable: true, get: function () { return clamp_1.clamp; } });
/**
 * 检查一个值是否为数字。
 *
 * @param value - 要检查的值。
 * @returns 如果是数字则返回 true，否则返回 false。
 */
var isNumber_1 = require("./isNumber");
Object.defineProperty(exports, "isNumber", { enumerable: true, get: function () { return isNumber_1.isNumber; } });
