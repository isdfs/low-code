"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm2 = void 0;
/**
 * 验证表单数据是否符合指定的验证规则。
 *
 * @param {FormData} data - 包含表单字段及其对应值的对象。
 * @param {Record<string, ValidationRule>} rules - 包含每个表单字段的验证规则的对象。
 * @returns {ValidationResult} 返回验证结果，包括是否通过验证及错误信息。
 *
 * @example
 * const data = { username: 'user1', email: 'invalidemail' };
 * const rules = {
 *   username: { required: true, message: 'Username is required' },
 *   email: { pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'Invalid email format' },
 * };
 * const result = validateForm(data, rules);
 * console.log(result);
 * // { valid: false, errors: ['Invalid email format'] }
 */
function validateForm2(data, rules) {
    var errors = [];
    for (var _i = 0, _a = Object.entries(rules); _i < _a.length; _i++) {
        var _b = _a[_i], field = _b[0], rule = _b[1];
        var value = data[field];
        if (rule.required && !value) {
            errors.push(rule.message);
        }
        else if (rule.pattern && !rule.pattern.test(String(value))) {
            errors.push(rule.message);
        }
    }
    return {
        valid: errors.length === 0,
        errors: errors,
    };
}
exports.validateForm2 = validateForm2;
