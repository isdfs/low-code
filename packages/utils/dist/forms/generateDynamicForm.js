"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDynamicForm = void 0;
var validateForm_1 = require("./validateForm"); // 假设之前已经创建了 validateForm.ts
/**
 * 动态生成并验证表单。
 *
 * @template T - 表单数据的类型。
 * @param {T} formData - 表单数据对象。
 * @param {Record<keyof T, string>} labels - 每个字段的标签。
 * @param {Record<keyof T, (value: any) => string | null>} validators - 每个字段的验证规则。
 * @param {HTMLFormElement} formElement - 要填充的表单元素。
 * @returns {void}
 *
 * @example
 * const formData = { username: '', password: '' };
 * const labels = { username: 'Username', password: 'Password' };
 * const validators = {
 *   username: (value: string) => value.length < 3 ? 'Username too short' : null,
 *   password: (value: string) => value.length < 6 ? 'Password too short' : null,
 * };
 * generateDynamicForm(formData, labels, validators, document.getElementById('myForm')!);
 */
function generateDynamicForm(formData, labels, validators, formElement) {
    formElement.innerHTML = ''; // 清空表单
    // 为每个表单字段生成输入元素
    Object.keys(formData).forEach(function (key) {
        var label = document.createElement('label');
        label.textContent = labels[key];
        var input = document.createElement('input');
        input.name = key;
        input.value = String(formData[key]);
        input.addEventListener('input', function () {
            var _a, _b;
            var validation = (0, validateForm_1.validateForm)((_a = {}, _a[key] = input.value, _a), (_b = {},
                _b[key] = validators[key],
                _b));
            if (validation.isValid) {
                input.setCustomValidity('');
            }
            else {
                input.setCustomValidity(validation.errors[key] || '');
            }
        });
        formElement.appendChild(label);
        formElement.appendChild(input);
    });
    var submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';
    formElement.appendChild(submitButton);
    formElement.addEventListener('submit', function (event) {
        event.preventDefault();
        var validation = (0, validateForm_1.validateForm)(formData, validators);
        if (validation.isValid) {
            console.log('Form submitted successfully!', formData);
        }
        else {
            console.error('Form submission failed', validation.errors);
        }
    });
}
exports.generateDynamicForm = generateDynamicForm;
