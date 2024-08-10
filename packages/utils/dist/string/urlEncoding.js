"use strict";
/**
 * @module URLEncoding
 * @description 提供URL中特殊字符的编码与解码功能，确保URL中传输的参数安全。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLEncoding = void 0;
var URLEncoding = /** @class */ (function () {
    function URLEncoding() {
    }
    /**
     * @description 编码URL中的查询参数
     * @param params 要编码的参数对象
     * @returns 编码后的查询字符串
     * @example
     * const encoded = URLEncoding.encodeParams({ name: 'John Doe', city: 'New York' });
     * console.log('Encoded Params:', encoded); // 输出 "name=John%20Doe&city=New%20York"
     */
    URLEncoding.encodeParams = function (params) {
        return Object.entries(params)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(String(value)));
        })
            .join('&');
    };
    /**
     * @description 解码URL中的查询参数字符串
     * @param queryString 要解码的查询字符串
     * @returns 解码后的参数对象
     * @example
     * const params = URLEncoding.decodeParams('name=John%20Doe&city=New%20York');
     * console.log('Decoded Params:', params); // 输出 { name: "John Doe", city: "New York" }
     */
    URLEncoding.decodeParams = function (queryString) {
        return queryString.split('&').reduce(function (params, param) {
            var _a = param.split('='), key = _a[0], value = _a[1];
            params[decodeURIComponent(key)] = decodeURIComponent(value);
            return params;
        }, {});
    };
    /**
     * @description 编码URL中的路径部分
     * @param path 要编码的路径字符串
     * @returns 编码后的路径字符串
     * @example
     * const encodedPath = URLEncoding.encodePath('/path/to/resource');
     * console.log('Encoded Path:', encodedPath); // 输出 "%2Fpath%2Fto%2Fresource"
     */
    URLEncoding.encodePath = function (path) {
        return encodeURIComponent(path);
    };
    /**
     * @description 解码URL中的路径部分
     * @param encodedPath 要解码的路径字符串
     * @returns 解码后的路径字符串
     * @example
     * const decodedPath = URLEncoding.decodePath('%2Fpath%2Fto%2Fresource');
     * console.log('Decoded Path:', decodedPath); // 输出 "/path/to/resource"
     */
    URLEncoding.decodePath = function (encodedPath) {
        return decodeURIComponent(encodedPath);
    };
    return URLEncoding;
}());
exports.URLEncoding = URLEncoding;
// 示例用法
/*
const encoded = URLEncoding.encodeParams({ name: 'John Doe', city: 'New York' });
console.log('Encoded Params:', encoded); // 输出 "name=John%20Doe&city=New%20York"

const params = URLEncoding.decodeParams('name=John%20Doe&city=New%20York');
console.log('Decoded Params:', params); // 输出 { name: "John Doe", city: "New York" }

const encodedPath = URLEncoding.encodePath('/path/to/resource');
console.log('Encoded Path:', encodedPath); // 输出 "%2Fpath%2Fto%2Fresource"

const decodedPath = URLEncoding.decodePath('%2Fpath%2Fto%2Fresource');
console.log('Decoded Path:', decodedPath); // 输出 "/path/to/resource"
*/
