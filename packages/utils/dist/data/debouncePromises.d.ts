/**
 * 防抖 Promise 的执行，限制在指定时间内只执行最后一个请求
 *
 * @param {Function} fn - 返回 Promise 的函数
 * @param {number} wait - 防抖的等待时间 (毫秒)
 * @returns {Function} 返回处理后的函数
 *
 * @example
 * const fetchData = (query) => fetch(`https://api.example.com/search?q=${query}`);
 * const debouncedFetch = debouncePromises(fetchData, 300);
 * debouncedFetch('term').then(response => console.log(response));
 */
export declare function debouncePromises(fn: (...args: any[]) => Promise<any>, wait: number): (...args: any[]) => Promise<unknown>;
