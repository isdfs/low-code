"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePassword = void 0;
/**
 * 验证密码的复杂性，检查是否符合指定的安全标准。
 * @param password - 需要验证的密码。
 * @param minLength - 密码的最小长度，默认为8。
 * @param requireUppercase - 是否要求包含大写字母，默认为true。
 * @param requireLowercase - 是否要求包含小写字母，默认为true。
 * @param requireNumber - 是否要求包含数字，默认为true。
 * @param requireSpecialChar - 是否要求包含特殊字符，默认为true。
 * @returns 如果密码符合标准则返回true，否则返回false。
 */
function validatePassword(password, minLength, requireUppercase, requireLowercase, requireNumber, requireSpecialChar) {
    if (minLength === void 0) { minLength = 8; }
    if (requireUppercase === void 0) { requireUppercase = true; }
    if (requireLowercase === void 0) { requireLowercase = true; }
    if (requireNumber === void 0) { requireNumber = true; }
    if (requireSpecialChar === void 0) { requireSpecialChar = true; }
    var uppercasePattern = /[A-Z]/;
    var lowercasePattern = /[a-z]/;
    var numberPattern = /[0-9]/;
    var specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
    if (password.length < minLength) {
        return false;
    }
    if (requireUppercase && !uppercasePattern.test(password)) {
        return false;
    }
    if (requireLowercase && !lowercasePattern.test(password)) {
        return false;
    }
    if (requireNumber && !numberPattern.test(password)) {
        return false;
    }
    if (requireSpecialChar && !specialCharPattern.test(password)) {
        return false;
    }
    return true;
}
exports.validatePassword = validatePassword;
