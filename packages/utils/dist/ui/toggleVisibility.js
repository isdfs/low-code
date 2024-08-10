"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleVisibility = void 0;
/**
 * 切换元素的可见性状态（显示/隐藏）。
 * @param element - 目标HTML元素。
 */
function toggleVisibility(element) {
    element.style.display = element.style.display === 'none' ? 'block' : 'none';
}
exports.toggleVisibility = toggleVisibility;
