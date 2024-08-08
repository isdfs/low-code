"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepClone = void 0;
/**
 * 深度克隆一个对象。
 *
 * @param obj - 要克隆的对象。
 * @returns 克隆后的对象。
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.deepClone = deepClone;
