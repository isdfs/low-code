"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = exports.merge = exports.deepClone = void 0;
/**
 * 深度克隆一个对象。
 *
 * @param obj - 要克隆的对象。
 * @returns 克隆后的对象。
 */
var deepClone_1 = require("./deepClone");
Object.defineProperty(exports, "deepClone", { enumerable: true, get: function () { return deepClone_1.deepClone; } });
/**
 * 深度合并多个对象。
 *
 * @param target - 目标对象。
 * @param sources - 要合并的源对象。
 * @returns 合并后的目标对象。
 */
var merge_1 = require("./merge");
Object.defineProperty(exports, "merge", { enumerable: true, get: function () { return merge_1.merge; } });
/**
 * 检查一个值是否为对象。
 *
 * @param item - 要检查的值。
 * @returns 如果是对象则返回 true，否则返回 false。
 */
var merge_2 = require("./merge");
Object.defineProperty(exports, "isObject", { enumerable: true, get: function () { return merge_2.isObject; } });
