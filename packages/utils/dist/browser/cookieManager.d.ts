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
export declare function setCookie(name: string, value: string, days?: number): void;
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
export declare function getCookie(name: string): string | null;
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
export declare function deleteCookie(name: string): void;
