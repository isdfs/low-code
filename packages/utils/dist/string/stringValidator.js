"use strict";
/**
 * @module StringValidator
 * @description 提供字符串的校验与验证功能，包括常见格式验证（如邮箱、URL、手机号）及自定义验证规则。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValidator = void 0;
var StringValidator = /** @class */ (function () {
    function StringValidator() {
    }
    /**
     * @description 校验字符串是否为有效的邮箱地址
     * @param email 要校验的邮箱地址
     * @returns 如果是有效的邮箱地址返回 true，否则返回 false
     * @example
     * ```typescript
     * const result = StringValidator.isEmail('test@example.com');
     * console.log(result); // 输出 true
     * ```
     */
    StringValidator.isEmail = function (email) {
        var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    /**
     * @description 校验字符串是否为有效的 URL
     * @param url 要校验的 URL
     * @returns 如果是有效的 URL 返回 true，否则返回 false
     * @example
     * ```typescript
     * const result = StringValidator.isURL('https://www.example.com');
     * console.log(result); // 输出 true
     * ```
     */
    StringValidator.isURL = function (url) {
        var regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        return regex.test(url);
    };
    /**
     * @description 校验字符串是否为有效的手机号码
     * @param phoneNumber 要校验的手机号码
     * @returns 如果是有效的手机号码返回 true，否则返回 false
     * @example
     * ```typescript
     * const result = StringValidator.isPhoneNumber('+8613712345678');
     * console.log(result); // 输出 true
     * ```
     */
    StringValidator.isPhoneNumber = function (phoneNumber) {
        var regex = /^\+?[1-9]\d{1,14}$/;
        return regex.test(phoneNumber);
    };
    /**
     * @description 根据自定义正则表达式校验字符串
     * @param input 要校验的字符串
     * @param pattern 正则表达式
     * @returns 如果匹配正则表达式返回 true，否则返回 false
     * @example
     * ```typescript
     * const result = StringValidator.matchesPattern('123-45-6789', /^\d{3}-\d{2}-\d{4}$/);
     * console.log(result); // 输出 true
     * ```
     */
    StringValidator.matchesPattern = function (input, pattern) {
        return pattern.test(input);
    };
    return StringValidator;
}());
exports.StringValidator = StringValidator;
