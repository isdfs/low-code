/**
 * 缓存函数结果的高阶函数 (memoization)
 *
 * @param {Function} func - 需要缓存的函数
 * @returns {Function} 返回缓存处理后的函数
 *
 * @example
 * const expensiveFunc = (num) => {
 *   console.log('Calculating...');
 *   return num * 2;
 * };
 * const memoizedFunc = memoize(expensiveFunc);
 * console.log(memoizedFunc(5)); // Calculating... 10
 * console.log(memoizedFunc(5)); // 10 (cached)
 */
export function memoize(func: Function) {
  const cache = new Map();

  return function (...args: any[]) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    } else {
      const result = func(...args);
      cache.set(key, result);
      return result;
    }
  };
}
