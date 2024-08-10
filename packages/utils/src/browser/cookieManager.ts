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
export function setCookie(name: string, value: string, days?: number): void {
  let expires = '';
  if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ''}${expires}; path=/`;
}

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
export function getCookie(name: string): string | null {
  const nameEQ = `${name}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
      }
  }
  return null;
}

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
export function deleteCookie(name: string): void {
  document.cookie = `${name}=; Max-Age=-99999999;`;
}
