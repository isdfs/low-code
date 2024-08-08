"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clamp = void 0;
/**
 * 限制数字在指定的范围内。
 *
 * @param value - 要限制的数字。
 * @param min - 最小值。
 * @param max - 最大值。
 * @returns 被限制在范围内的数字。
 */
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
exports.clamp = clamp;
