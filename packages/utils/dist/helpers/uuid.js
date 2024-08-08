"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
/**
 * 生成 UUID v4
 *
 * @returns {string} 返回生成的 UUID
 *
 * @example
 * const id = uuid();
 * console.log(id); // 'e.g. 123e4567-e89b-12d3-a456-426614174000'
 */
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0;
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.uuid = uuid;
