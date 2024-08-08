"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToElement = void 0;
/**
 * 平滑滚动到页面上的指定元素。
 * @param element - 要滚动到的目标元素。
 * @param offset - 滚动时的偏移量（默认为0）。
 */
function scrollToElement(element, offset) {
    if (offset === void 0) { offset = 0; }
    var elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: elementPosition, behavior: 'smooth' });
}
exports.scrollToElement = scrollToElement;
