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
export { httpRequest } from './httpRequest';

/**
 * GET 请求
 *
 * @param {string} url - 请求 URL
 * @returns {Promise<any>} 请求结果
 */
export { httpGet } from './httpRequest';

/**
 * POST 请求
 *
 * @param {string} url - 请求 URL
 * @param {any} body - 请求体
 * @returns {Promise<any>} 请求结果
 */
export { httpPost } from './httpRequest';