/**
 * 本地存储管理。
 *
 * 该模块提供了对浏览器LocalStorage的封装，简化了存取和删除本地存储数据的操作。
 *
 * @param {string} key - 存储数据的键名。
 * @param {any} value - 要存储的数据。
 *
 * @returns {void}
 *
 * @example
 * ```
 * setLocalStorage('username', 'JohnDoe');
 * const username = getLocalStorage('username');
 * removeLocalStorage('username');
 * ```
 */
export declare function setLocalStorage(key: string, value: any): void;
/**
* 从LocalStorage获取指定键名的数据。
*
* @param {string} key - 要获取数据的键名。
* @returns {any | null} 返回存储的数据，如果键名不存在则返回null。
*
* @example
* ```
* const username = getLocalStorage('username');
* console.log(`Username: ${username}`);
* ```
*/
export declare function getLocalStorage(key: string): any | null;
/**
* 删除LocalStorage中的指定键名的数据。
*
* @param {string} key - 要删除数据的键名。
*
* @returns {void}
*
* @example
* ```
* removeLocalStorage('username');
* ```
*/
export declare function removeLocalStorage(key: string): void;
