"use strict";
/**
 * @module URLHistoryManager
 * @description 提供浏览器环境下的URL历史管理功能，支持保存、恢复和清除URL历史状态。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLHistoryManager = void 0;
var URLHistoryManager = /** @class */ (function () {
    function URLHistoryManager() {
    }
    /**
     * @description 保存当前URL的历史状态
     * @param state 状态对象，可以是任意数据
     * @param title 页面标题
     * @example
     * URLHistoryManager.saveState({ page: 1 }, 'Page 1');
     * // 保存当前页面的状态和标题
     */
    URLHistoryManager.saveState = function (state, title) {
        window.history.pushState(state, title);
    };
    /**
     * @description 恢复浏览器历史状态
     * @param event 回调函数，接收恢复的状态对象
     * @example
     * URLHistoryManager.restoreState(event => {
     *   console.log('Restored State:', event.state);
     * });
     * // 在历史状态恢复时执行回调
     */
    URLHistoryManager.restoreState = function (callback) {
        window.addEventListener('popstate', callback);
    };
    /**
     * @description 清除当前URL的历史状态
     * @example
     * URLHistoryManager.clearState();
     * // 清除当前页面的历史状态
     */
    URLHistoryManager.clearState = function () {
        window.history.replaceState(null, '');
    };
    return URLHistoryManager;
}());
exports.URLHistoryManager = URLHistoryManager;
// 示例用法
/*
URLHistoryManager.saveState({ page: 1 }, 'Page 1');
// 保存当前页面的状态和标题

URLHistoryManager.restoreState(event => {
  console.log('Restored State:', event.state);
});
// 在历史状态恢复时执行回调

URLHistoryManager.clearState();
// 清除当前页面的历史状态
*/
