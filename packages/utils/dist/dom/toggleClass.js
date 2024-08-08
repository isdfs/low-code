"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleClass = void 0;
/**
 * 切换元素上的一个或多个类名。
 *
 * @param {HTMLElement} element - 要操作的元素。
 * @param {string} className - 要切换的类名，可以是多个类名用空格分隔。
 *
 * @example
 * toggleClass(document.getElementById('myElement')!, 'active');
 */
function toggleClass(element, className) {
    className.split(' ').forEach(function (cls) {
        element.classList.toggle(cls);
    });
}
exports.toggleClass = toggleClass;
