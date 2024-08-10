"use strict";
/**
 * @module FormManager
 * @description 提供动态表单生成与验证功能，支持基于字符串模板动态生成表单及其验证逻辑。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormManager = void 0;
var FormManager = /** @class */ (function () {
    function FormManager() {
        this.fields = [];
    }
    /**
     * @description 添加表单字段
     * @param field 表单字段对象
     */
    FormManager.prototype.addField = function (field) {
        this.fields.push(field);
    };
    /**
     * @description 根据添加的字段动态生成表单 HTML 字符串
     * @returns 表单的 HTML 字符串
     * @example
     * ```typescript
     * const formManager = new FormManager();
     * formManager.addField({ name: 'username', label: 'Username', type: 'text', required: true });
     * formManager.addField({ name: 'email', label: 'Email', type: 'email', required: true });
     * const formHtml = formManager.generateFormHtml();
     * console.log(formHtml); // 输出表单 HTML 字符串
     * ```
     */
    FormManager.prototype.generateFormHtml = function () {
        return this.fields.map(function (field) {
            return "\n              <label for=\"".concat(field.name, "\">").concat(field.label, "</label>\n              <input type=\"").concat(field.type, "\" id=\"").concat(field.name, "\" name=\"").concat(field.name, "\" ").concat(field.required ? 'required' : '', " ").concat(field.pattern ? "pattern=\"".concat(field.pattern.source, "\"") : '', " />\n          ");
        }).join('\n');
    };
    /**
     * @description 验证表单数据
     * @param formData 表单数据对象
     * @returns 表单验证结果，包括是否通过验证和错误信息
     * @example
     * ```typescript
     * const validationResult = formManager.validateForm({ username: 'testuser', email: 'test@example.com' });
     * console.log(validationResult.isValid); // 输出 true
     * console.log(validationResult.errors); // 输出 {}
     * ```
     */
    FormManager.prototype.validateForm = function (formData) {
        var errors = {};
        this.fields.forEach(function (field) {
            var value = formData[field.name];
            if (field.required && !value) {
                errors[field.name] = "".concat(field.label, " is required.");
            }
            else if (field.pattern && value && !field.pattern.test(value)) {
                errors[field.name] = "".concat(field.label, " is invalid.");
            }
        });
        return {
            isValid: Object.keys(errors).length === 0,
            errors: errors,
        };
    };
    return FormManager;
}());
exports.FormManager = FormManager;
