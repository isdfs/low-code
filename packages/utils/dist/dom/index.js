"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleClass = exports.scrollToElement = exports.getElementOffset = void 0;
/**
 * 获取元素相对于页面的偏移量（包括滚动）。
 *
 * @param {HTMLElement} element - 要获取偏移量的元素。
 * @returns {{ top: number, left: number }} 元素的顶部和左侧的偏移量。
 *
 * @example
 * const offset = getElementOffset(document.getElementById('myElement')!);
 * console.log(offset); // { top: 100, left: 50 }
 */
var getElementOffset_1 = require("./getElementOffset");
Object.defineProperty(exports, "getElementOffset", { enumerable: true, get: function () { return getElementOffset_1.getElementOffset; } });
/**
 * 平滑滚动到页面上的指定元素。
 * @param element - 要滚动到的目标元素。
 * @param offset - 滚动时的偏移量（默认为0）。
 */
var scrollToElement_1 = require("./scrollToElement");
Object.defineProperty(exports, "scrollToElement", { enumerable: true, get: function () { return scrollToElement_1.scrollToElement; } });
/**
 * 切换元素上的一个或多个类名。
 *
 * @param {HTMLElement} element - 要操作的元素。
 * @param {string} className - 要切换的类名，可以是多个类名用空格分隔。
 *
 * @example
 * toggleClass(document.getElementById('myElement')!, 'active');
 */
var toggleClass_1 = require("./toggleClass");
Object.defineProperty(exports, "toggleClass", { enumerable: true, get: function () { return toggleClass_1.toggleClass; } });
