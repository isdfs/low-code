/**
 * 并行执行异步任务，并限制同时执行的任务数。
 * @param tasks - 一个包含异步函数的数组。
 * @param limit - 同时执行的最大任务数。
 * @returns 返回一个Promise数组，包含所有任务的结果。
 */
export { parallelLimit } from './parallelLimit';
/**
 * 重试异步操作，直到成功或达到最大重试次数。
 *
 * @template T - 异步操作的返回类型。
 * @param {() => Promise<T>} asyncFn - 需要重试的异步函数。
 * @param {number} retries - 最大重试次数。
 * @param {number} delay - 每次重试之间的延迟时间（毫秒）。
 * @returns {Promise<T>} 成功时返回异步操作的结果，如果失败则抛出错误。
 *
 * @example
 * const fetchData = async () => {
 *   const response = await fetch('https://api.example.com/data');
 *   if (!response.ok) throw new Error('Network response was not ok');
 *   return response.json();
 * };
 * retry(fetchData, 3, 1000).then(data => console.log(data)).catch(err => console.error(err));
 */
export { retry } from './retry';
