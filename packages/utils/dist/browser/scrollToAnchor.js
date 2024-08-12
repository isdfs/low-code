"use strict";
/**
 * 页面片段导航模块。
 *
 * 该模块提供了页面内的片段导航功能，可以平滑滚动到指定的锚点位置。
 *
 * @param {string} anchorId - 目标锚点的ID。
 * @returns {void}
 *
 * @example
 * ```
 * scrollToAnchor('section-1');
 * ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollToAnchor = void 0;
/**
 * 滚动到指定的锚点。
 *
 * @param {string} anchorId - 目标锚点的ID。
 * @returns {void}
 *
 * @example
 * ```
 * scrollToAnchor('section-1');
 * ```
 */
function scrollToAnchor(anchorId) {
    var element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    else {
        console.error("\u672A\u627E\u5230ID\u4E3A ".concat(anchorId, " \u7684\u951A\u70B9"));
    }
}
exports.scrollToAnchor = scrollToAnchor;
