"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParam = void 0;
/**
 * 从URL中获取指定的查询参数值。
 *
 * @param {string} paramName - 要获取的查询参数名称。
 * @returns {string | null} 查询参数的值，如果不存在则返回null。
 *
 * @example
 * const value = getQueryParam('token');
 * console.log(value); // 例如：'abc123'
 */
function getQueryParam(paramName) {
    var params = new URLSearchParams(window.location.search);
    return params.get(paramName);
}
exports.getQueryParam = getQueryParam;
