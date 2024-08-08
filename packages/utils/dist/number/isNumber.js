"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
/**
 * 检查一个值是否为数字。
 *
 * @param value - 要检查的值。
 * @returns 如果是数字则返回 true，否则返回 false。
 */
function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}
exports.isNumber = isNumber;
