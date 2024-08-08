"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unique = exports.shuffle = exports.flatten = exports.chunk = void 0;
/**
 * 将数组按指定大小分块。
 *
 * @param array - 要分块的数组。
 * @param size - 每块的大小。
 * @returns 分块后的数组。
 */
var chunk_1 = require("./chunk");
Object.defineProperty(exports, "chunk", { enumerable: true, get: function () { return chunk_1.chunk; } });
/**
 * 将嵌套的数组展平成一个单一数组。
 *
 * @param array - 要展平的数组。
 * @returns 展平后的数组。
 */
var flatten_1 = require("./flatten");
Object.defineProperty(exports, "flatten", { enumerable: true, get: function () { return flatten_1.flatten; } });
/**
 * 随机打乱数组的顺序。
 *
 * @param {T[]} array - 要打乱顺序的数组。
 * @returns {T[]} 打乱顺序后的新数组。
 *
 * @example
 * const shuffledArray = shuffle([1, 2, 3, 4, 5]);
 * console.log(shuffledArray); // [3, 5, 1, 4, 2]（示例，顺序随机）
 */
var shuffle_1 = require("./shuffle");
Object.defineProperty(exports, "shuffle", { enumerable: true, get: function () { return shuffle_1.shuffle; } });
/**
 * 获取数组中的唯一值，去除重复项。
 *
 * @param {T[]} array - 要处理的数组。
 * @returns {T[]} 包含唯一值的新数组。
 *
 * @example
 * const uniqueArray = unique([1, 2, 2, 3, 4, 4]);
 * console.log(uniqueArray); // [1, 2, 3, 4]
 */
var unique_1 = require("./unique");
Object.defineProperty(exports, "unique", { enumerable: true, get: function () { return unique_1.unique; } });
