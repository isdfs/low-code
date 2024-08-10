"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restoreFormData = exports.autoSaveFormData = void 0;
/**
 * 自动保存表单数据。
 *
 * 该方法用于在用户填写表单时自动保存数据到本地存储，以便在页面刷新或意外关闭时能够恢复数据。
 *
 * @param {HTMLFormElement} form - 要自动保存的表单元素。
 * @param {string} storageKey - 用于保存数据的本地存储键名。
 *
 * @returns {void}
 *
 * @example
 * ```
 * const form = document.querySelector('form');
 * autoSaveFormData(form, 'myFormData');
 *
 * // 恢复数据
 * restoreFormData(form, 'myFormData');
 * ```
 */
function autoSaveFormData(form, storageKey) {
    form.addEventListener('input', function () {
        var formData = new FormData(form);
        var d = Array.from(formData.entries());
        var data = d.reduce(function (acc, _a) {
            var key = _a[0], value = _a[1];
            (acc)[key] = value;
            return acc;
        }, {});
        localStorage.setItem(storageKey, JSON.stringify(data));
    });
}
exports.autoSaveFormData = autoSaveFormData;
/**
* 恢复表单数据。
*
* 该方法用于从本地存储中恢复表单数据，并自动填充到表单字段中。
*
* @param {HTMLFormElement} form - 要恢复数据的表单元素。
* @param {string} storageKey - 保存数据的本地存储键名。
*
* @returns {void}
*
* @example
* ```
* const form = document.querySelector('form');
* restoreFormData(form, 'myFormData');
* ```
*/
function restoreFormData(form, storageKey) {
    var savedData = localStorage.getItem(storageKey);
    if (savedData) {
        var data_1 = JSON.parse(savedData);
        Object.keys(data_1).forEach(function (key) {
            var field = form.elements.namedItem(key);
            if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
                field.value = data_1[key];
            }
        });
    }
}
exports.restoreFormData = restoreFormData;
