// src/http/httpRequest.ts

/**
 * 发起 HTTP 请求
 *
 * @param {string} url - 请求 URL
 * @param {RequestInit} [options] - 请求配置
 * @returns {Promise<any>} 请求结果
 *
 * @example
 * httpRequest('https://jsonplaceholder.typicode.com/todos/1')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
export async function httpRequest(url: string, options?: RequestInit): Promise<any> {
  try {
      const response = await fetch(url, options);
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
  } catch (error) {
      console.error('HTTP Request Failed:', error);
      throw error;
  }
}

/**
* GET 请求
*
* @param {string} url - 请求 URL
* @returns {Promise<any>} 请求结果
*/
export function httpGet(url: string): Promise<any> {
  return httpRequest(url, { method: 'GET' });
}

/**
* POST 请求
*
* @param {string} url - 请求 URL
* @param {any} body - 请求体
* @returns {Promise<any>} 请求结果
*/
export function httpPost(url: string, body: any): Promise<any> {
  return httpRequest(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
  });
}

// 使用示例
httpGet('https://jsonplaceholder.typicode.com/todos/1').then(console.log);
httpPost('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 }).then(console.log);
