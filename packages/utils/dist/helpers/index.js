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
var uuid_1 = require("./uuid");
Object.defineProperty(exports, "uuid", { enumerable: true, get: function () { return uuid_1.uuid; } });
