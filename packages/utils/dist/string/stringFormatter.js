"use strict";
/**
 * @module StringFormatter
 * @description 字符串格式化模块，提供多种复杂的字符串格式化功能，支持模板替换、字符串填充、大小写转换等操作。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPalindrome = exports.reverse = exports.pad = exports.toCamelCase = exports.toSnakeCase = exports.format = void 0;
/**
 * @description 根据给定的模板字符串和参数对象，替换模板中的占位符
 * @param template 模板字符串，使用 `{key}` 作为占位符
 * @param params 参数对象，用于替换模板中的占位符
 * @returns 格式化后的字符串
 * @example
 * ```typescript
 * const result = StringFormatter.format('Hello, {name}!', { name: 'Alice' });
 * console.log(result); // 输出 "Hello, Alice!"
 * ```
 */
function format(template, params) {
    return template.replace(/{(\w+)}/g, function (_, key) {
        return params[key] !== undefined ? String(params[key]) : "{".concat(key, "}");
    });
}
exports.format = format;
/**
* @description 将字符串转换为蛇形命名（snake_case）格式
* @param input 要转换的字符串
* @returns 转换后的字符串
* @example
* ```typescript
* const result = StringFormatter.toSnakeCase('HelloWorld');
* console.log(result); // 输出 "hello_world"
* ```
*/
function toSnakeCase(input) {
    return input.replace(/([A-Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
exports.toSnakeCase = toSnakeCase;
/**
* @description 将字符串转换为驼峰命名（camelCase）格式
* @param input 要转换的字符串
* @returns 转换后的字符串
* @example
* ```typescript
* const result = StringFormatter.toCamelCase('hello_world');
* console.log(result); // 输出 "helloWorld"
* ```
*/
function toCamelCase(input) {
    return input.replace(/_([a-z])/g, function (_, letter) { return letter.toUpperCase(); });
}
exports.toCamelCase = toCamelCase;
/**
* @description 将字符串填充到指定长度，如果字符串长度不足，将使用指定字符填充
* @param input 要填充的字符串
* @param length 目标长度
* @param padChar 用于填充的字符，默认为空格
* @param direction 填充方向，可选值为 'left', 'right', 'both'
* @returns 填充后的字符串
* @example
* ```typescript
* const result = StringFormatter.pad('123', 5, '0', 'left');
* console.log(result); // 输出 "00123"
* ```
*/
function pad(input, length, padChar, direction) {
    if (padChar === void 0) { padChar = ' '; }
    if (direction === void 0) { direction = 'right'; }
    var padLength = length - input.length;
    if (padLength <= 0)
        return input;
    var padStr = padChar.repeat(Math.ceil(padLength / padChar.length)).substr(0, padLength);
    switch (direction) {
        case 'left':
            return padStr + input;
        case 'right':
            return input + padStr;
        case 'both':
            var half = Math.floor(padLength / 2);
            return padChar.repeat(half) + input + padChar.repeat(padLength - half);
    }
}
exports.pad = pad;
/**
* @description 反转字符串中的字符顺序
* @param input 要反转的字符串
* @returns 反转后的字符串
* @example
* ```typescript
* const result = StringFormatter.reverse('abcdef');
* console.log(result); // 输出 "fedcba"
* ```
*/
function reverse(input) {
    return input.split('').reverse().join('');
}
exports.reverse = reverse;
/**
* @description 检查字符串是否是回文
* @param input 要检查的字符串
* @returns 如果字符串是回文，返回 true；否则返回 false
* @example
* ```typescript
* const result = StringFormatter.isPalindrome('madam');
* console.log(result); // 输出 true
* ```
*/
function isPalindrome(input) {
    var normalized = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return normalized === normalized.split('').reverse().join('');
}
exports.isPalindrome = isPalindrome;
