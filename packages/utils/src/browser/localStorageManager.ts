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
export function setLocalStorage(key: string, value: any): void {
  try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
  } catch (error) {
      console.error('无法存储数据到LocalStorage:', error);
  }
}

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
export function getLocalStorage(key: string): any | null {
  try {
      const serializedValue = localStorage.getItem(key);
      return serializedValue ? JSON.parse(serializedValue) : null;
  } catch (error) {
      console.error('无法从LocalStorage获取数据:', error);
      return null;
  }
}

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
export function removeLocalStorage(key: string): void {
  try {
      localStorage.removeItem(key);
  } catch (error) {
      console.error('无法从LocalStorage删除数据:', error);
  }
}
