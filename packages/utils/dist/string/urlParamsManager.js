"use strict";
/**
 * @module URLParamsManager
 * @description 提供浏览器环境下的URL参数操作功能，支持获取、设置、删除和更新URL查询参数。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLParamsManager = void 0;
var URLParamsManager = /** @class */ (function () {
    function URLParamsManager() {
    }
    /**
     * @description 获取当前页面URL中的指定查询参数
     * @param key 查询参数的键
     * @returns 查询参数的值，如果不存在则返回 null
     * @example
     * const value = URLParamsManager.getParam('name');
     * console.log('Query Param:', value); // 假设 URL 为 https://example.com?name=John，输出 "John"
     */
    URLParamsManager.getParam = function (key) {
        var params = new URLSearchParams(window.location.search);
        return params.get(key);
    };
    /**
     * @description 设置当前页面URL中的查询参数，并可选更新浏览器历史
     * @param key 查询参数的键
     * @param value 查询参数的值
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLParamsManager.setParam('name', 'Alice', true);
     * // 假设原 URL 为 https://example.com，执行后 URL 变为 https://example.com?name=Alice
     */
    URLParamsManager.setParam = function (key, value, updateHistory) {
        if (updateHistory === void 0) { updateHistory = false; }
        var url = new URL(window.location.href);
        url.searchParams.set(key, value);
        if (updateHistory) {
            window.history.pushState({}, '', url.toString());
        }
        else {
            window.history.replaceState({}, '', url.toString());
        }
    };
    /**
     * @description 删除当前页面URL中的指定查询参数，并可选更新浏览器历史
     * @param key 查询参数的键
     * @param updateHistory 是否更新浏览器历史记录，默认不更新
     * @example
     * URLParamsManager.deleteParam('name', true);
     * // 假设原 URL 为 https://example.com?name=Alice，执行后 URL 变为 https://example.com
     */
    URLParamsManager.deleteParam = function (key, updateHistory) {
        if (updateHistory === void 0) { updateHistory = false; }
        var url = new URL(window.location.href);
        url.searchParams.delete(key);
        if (updateHistory) {
            window.history.pushState({}, '', url.toString());
        }
        else {
            window.history.replaceState({}, '', url.toString());
        }
    };
    /**
     * @description 获取当前页面URL中的所有查询参数，返回为对象形式
     * @returns 包含所有查询参数的对象
     * @example
     * const params = URLParamsManager.getAllParams();
     * console.log('All Query Params:', params); // 假设 URL 为 https://example.com?name=John&age=30，输出 { name: "John", age: "30" }
     */
    URLParamsManager.getAllParams = function () {
        var params = {};
        var urlParams = new URLSearchParams(window.location.search);
        urlParams.forEach(function (value, key) {
            params[key] = value;
        });
        return params;
    };
    return URLParamsManager;
}());
exports.URLParamsManager = URLParamsManager;
// 示例用法
/*
const value = URLParamsManager.getParam('name');
console.log('Query Param:', value); // 假设 URL 为 https://example.com?name=John，输出 "John"

URLParamsManager.setParam('name', 'Alice', true);
// 假设原 URL 为 https://example.com，执行后 URL 变为 https://example.com?name=Alice

URLParamsManager.deleteParam('name', true);
// 假设原 URL 为 https://example.com?name=Alice，执行后 URL 变为 https://example.com

const params = URLParamsManager.getAllParams();
console.log('All Query Params:', params); // 假设 URL 为 https://example.com?name=John&age=30，输出 { name: "John", age: "30" }
*/
