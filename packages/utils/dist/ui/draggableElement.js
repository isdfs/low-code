"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.draggableElement = void 0;
/**
 * 使指定元素可拖动。
 * @param element - 要设置为可拖动的HTML元素。
 */
function draggableElement(element) {
    var offsetX = 0;
    var offsetY = 0;
    var isDragging = false;
    element.style.position = 'absolute';
    element.addEventListener('mousedown', function (event) {
        offsetX = event.clientX - element.getBoundingClientRect().left;
        offsetY = event.clientY - element.getBoundingClientRect().top;
        isDragging = true;
    });
    document.addEventListener('mousemove', function (event) {
        if (isDragging) {
            element.style.left = "".concat(event.clientX - offsetX, "px");
            element.style.top = "".concat(event.clientY - offsetY, "px");
        }
    });
    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
}
exports.draggableElement = draggableElement;
