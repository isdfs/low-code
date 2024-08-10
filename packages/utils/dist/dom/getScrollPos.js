"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScrollPos = void 0;
/**
 * 获取页面或元素的滚动位置。
 * @param element - 可选，目标元素，默认是window。
 * @returns 返回一个包含x和y滚动位置的对象。
 */
function getScrollPos(element) {
    if (element === void 0) { element = window; }
    if (element instanceof Window) {
        return {
            x: element.pageXOffset,
            y: element.pageYOffset
        };
    }
    else {
        return {
            x: element.scrollLeft,
            y: element.scrollTop
        };
    }
}
exports.getScrollPos = getScrollPos;
