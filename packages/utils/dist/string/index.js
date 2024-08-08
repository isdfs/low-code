"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = exports.reverseString = exports.kebabCase = exports.capitalize = exports.camelCaseToSnakeCase = void 0;
/**
 * 将驼峰命名转换为蛇形命名。
 * @param str - 需要转换的驼峰命名字符串。
 * @returns 转换后的蛇形命名字符串。
 */
var camelCaseToSnakeCase_1 = require("./camelCaseToSnakeCase");
Object.defineProperty(exports, "camelCaseToSnakeCase", { enumerable: true, get: function () { return camelCaseToSnakeCase_1.camelCaseToSnakeCase; } });
/**
 * 将字符串的首字母大写。
 *
 * @param str - 要转换的字符串。
 * @returns 首字母大写后的字符串。
 */
var capitalize_1 = require("./capitalize");
Object.defineProperty(exports, "capitalize", { enumerable: true, get: function () { return capitalize_1.capitalize; } });
/**
 * 将字符串转换为 kebab-case（短横线连接的形式）。
 *
 * @param str - 要转换的字符串。
 * @returns 转换后的 kebab-case 字符串。
 */
var kebabCase_1 = require("./kebabCase");
Object.defineProperty(exports, "kebabCase", { enumerable: true, get: function () { return kebabCase_1.kebabCase; } });
/**
 * 反转字符串。
 *
 * @param {string} str - 要反转的字符串。
 * @returns {string} 反转后的字符串。
 *
 * @example
 * const reversed = reverseString('hello');
 * console.log(reversed); // 'olleh'
 */
var reverseString_1 = require("./reverseString");
Object.defineProperty(exports, "reverseString", { enumerable: true, get: function () { return reverseString_1.reverseString; } });
/**
 * 截断字符串并添加省略号（如果需要）。
 *
 * @param {string} str - 要截断的字符串。
 * @param {number} maxLength - 字符串的最大长度。
 * @param {string} [suffix='...'] - 要添加的后缀（默认是'...'）。
 * @returns {string} 截断后的字符串。
 *
 * @example
 * const truncated = truncate('This is a long string', 10);
 * console.log(truncated); // 'This is...'
 */
var truncate_1 = require("./truncate");
Object.defineProperty(exports, "truncate", { enumerable: true, get: function () { return truncate_1.truncate; } });
