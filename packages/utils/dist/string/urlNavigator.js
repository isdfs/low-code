"use strict";
/**
 * @module URLNavigator
 * @description 提供浏览器环境下的URL重定向与导航功能，支持页面跳转与条件跳转。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLNavigator = void 0;
var URLNavigator = /** @class */ (function () {
    function URLNavigator() {
    }
    /**
     * @description 重定向到指定的URL
     * @param url 目标URL
     * @param newTab 是否在新标签页打开，默认在当前页打开
     * @example
     * URLNavigator.redirect('https://example.com');
     * // 将当前页面重定向到 https://example.com
     */
    URLNavigator.redirect = function (url, newTab) {
        if (newTab === void 0) { newTab = false; }
        if (newTab) {
            window.open(url, '_blank');
        }
        else {
            window.location.href = url;
        }
    };
    /**
     * @description 根据条件重定向到不同的URL
     * @param condition 重定向条件
     * @param trueURL 条件为 true 时的重定向URL
     * @param falseURL 条件为 false 时的重定向URL
     * @example
     * URLNavigator.redirectIf(true, 'https://true.com', 'https://false.com');
     * // 将当前页面重定向到 https://true.com
     */
    URLNavigator.redirectIf = function (condition, trueURL, falseURL) {
        var url = condition ? trueURL : falseURL;
        window.location.href = url;
    };
    /**
     * @description 导航到浏览器历史中的上一页
     * @example
     * URLNavigator.goBack();
     * // 返回浏览器历史中的上一页
     */
    URLNavigator.goBack = function () {
        window.history.back();
    };
    /**
     * @description 导航到浏览器历史中的下一页
     * @example
     * URLNavigator.goForward();
     * // 前进到浏览器历史中的下一页
     */
    URLNavigator.goForward = function () {
        window.history.forward();
    };
    return URLNavigator;
}());
exports.URLNavigator = URLNavigator;
// 示例用法
/*
URLNavigator.redirect('https://example.com');
// 将当前页面重定向到 https://example.com

URLNavigator.redirectIf(true, 'https://true.com', 'https://false.com');
// 将当前页面重定向到 https://true.com

URLNavigator.goBack();
// 返回浏览器历史中的上一页

URLNavigator.goForward();
// 前进到浏览器历史中的下一页
*/
