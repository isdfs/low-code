"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictInput = void 0;
/**
 * 输入限制。
 *
 * 该模块提供了对文本输入字段的限制功能，可以限制输入的字符类型（如数字、字母等）。
 *
 * @param {HTMLInputElement} input - 要应用限制的输入字段。
 * @param {RegExp} regex - 用于限制输入的正则表达式。
 *
 * @returns {void}
 *
 * @example
 * ```
 * const input = document.querySelector('input');
 * restrictInput(input, /^[0-9]*$/);  // 仅允许输入数字
 * ```
 */
function restrictInput(input, regex) {
    input.addEventListener('input', function () {
        var value = input.value;
        if (!regex.test(value)) {
            input.value = value.replace(/[^0-9]/g, ''); // 默认限制为仅输入数字
        }
    });
}
exports.restrictInput = restrictInput;
