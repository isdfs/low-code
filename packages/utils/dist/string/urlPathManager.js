"use strict";
/**
 * @module URLPathManager
 * @description 提供浏览器环境下的URL路径操作功能，支持获取、设置和拼接URL路径。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLPathManager = void 0;
var URLPathManager = /** @class */ (function () {
    function URLPathManager() {
    }
    /**
     * @description 获取当前页面的路径部分（不包括查询参数和哈希）
     * @returns 当前页面的路径字符串
     * @example
     * const path = URLPathManager.getPath();
     * console.log('Path:', path); // 假设 URL 为 https://example.com/path/to/resource?name=John#section，输出 "/path/to/resource"
     */
    URLPathManager.getPath = function () {
        return window.location.pathname;
    };
    /**
     * @description 设置当前页面的路径部分，并可选更新浏览器历史
     * @param path 新的路径字符串
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLPathManager.setPath('/new/path', true);
     * // 假设原 URL 为 https://example.com/path/to/resource，执行后 URL 变为 https://example.com/new/path
     */
    URLPathManager.setPath = function (path, updateHistory) {
        if (updateHistory === void 0) { updateHistory = false; }
        var url = new URL(window.location.href);
        url.pathname = path;
        if (updateHistory) {
            window.history.pushState({}, '', url.toString());
        }
        else {
            window.history.replaceState({}, '', url.toString());
        }
    };
    /**
     * @description 拼接当前页面的路径部分与新的路径片段
     * @param segment 要拼接的路径片段
     * @returns 拼接后的完整路径
     * @example
     * const fullPath = URLPathManager.appendPath('/extra');
     * console.log('Full Path:', fullPath); // 假设 URL 为 https://example.com/path/to，输出 "/path/to/extra"
     */
    URLPathManager.appendPath = function (segment) {
        var url = new URL(window.location.href);
        url.pathname = "".concat(url.pathname.replace(/\/$/, ''), "/").concat(segment.replace(/^\//, ''));
        return url.pathname;
    };
    return URLPathManager;
}());
exports.URLPathManager = URLPathManager;
// 示例用法
/*
const path = URLPathManager.getPath();
console.log('Path:', path); // 假设 URL 为 https://example.com/path/to/resource?name=John#section，输出 "/path/to/resource"

URLPathManager.setPath('/new/path', true);
// 假设原 URL 为 https://example.com/path/to/resource，执行后 URL 变为 https://example.com/new/path

const fullPath = URLPathManager.appendPath('/extra');
console.log('Full Path:', fullPath); // 假设 URL 为 https://example.com/path/to，输出 "/path/to/extra"
*/
