"use strict";
/**
 * 高级浏览器历史管理模块，提供对浏览器历史记录的增强管理功能。
 * @module HistoryManager
 */
Object.defineProperty(exports, "__esModule", { value: true });
var HistoryManager = /** @class */ (function () {
    function HistoryManager() {
        this.history = window.history;
    }
    HistoryManager.prototype.pushState = function (state, title, url) {
        this.history.pushState(state, title, url);
    };
    HistoryManager.prototype.replaceState = function (state, title, url) {
        this.history.replaceState(state, title, url);
    };
    HistoryManager.prototype.goBack = function () {
        this.history.back();
    };
    HistoryManager.prototype.goForward = function () {
        this.history.forward();
    };
    HistoryManager.prototype.getCurrentState = function () {
        return this.history.state;
    };
    HistoryManager.prototype.listenToPopState = function (callback) {
        window.addEventListener('popstate', function (event) { return callback(event.state); });
    };
    // 示例：动态修改URL参数
    HistoryManager.prototype.updateQueryParam = function (param, value) {
        var url = new URL(window.location.href);
        url.searchParams.set(param, value);
        this.replaceState(this.getCurrentState(), document.title, url.toString());
    };
    return HistoryManager;
}());
// 实例化并使用历史管理器
var historyManager = new HistoryManager();
exports.default = historyManager;
