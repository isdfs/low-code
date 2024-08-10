"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCookie = exports.getCookie = exports.setCookie = void 0;
/**
 * Cookie管理。
 *
 * 该模块提供了设置、获取和删除Cookie的功能，简化了Cookie操作。
 *
 * @param {string} name - Cookie的名称。
 * @param {string} value - Cookie的值。
 * @param {number} [days] - Cookie的有效期，单位为天。
 *
 * @returns {void}
 *
 * @example
 * ```
 * setCookie('username', 'JohnDoe', 7);
 * const username = getCookie('username');
 * deleteCookie('username');
 * ```
 */
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=".concat(date.toUTCString());
    }
    document.cookie = "".concat(name, "=").concat(value || '').concat(expires, "; path=/");
}
exports.setCookie = setCookie;
/**
* 获取指定名称的Cookie。
*
* @param {string} name - 要获取的Cookie名称。
* @returns {string | null} 返回Cookie的值，如果不存在则返回null。
*
* @example
* ```
* const username = getCookie('username');
* console.log(`Username: ${username}`);
* ```
*/
function getCookie(name) {
    var nameEQ = "".concat(name, "=");
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
exports.getCookie = getCookie;
/**
* 删除指定名称的Cookie。
*
* @param {string} name - 要删除的Cookie名称。
*
* @returns {void}
*
* @example
* ```
* deleteCookie('username');
* ```
*/
function deleteCookie(name) {
    document.cookie = "".concat(name, "=; Max-Age=-99999999;");
}
exports.deleteCookie = deleteCookie;
