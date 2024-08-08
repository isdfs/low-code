/**
 * 创建一个带有TTL（生存时间）的缓存。
 *
 * @template T - 缓存值的类型。
 * @param {number} ttl - 缓存生存时间（毫秒）。
 * @returns {{
 *  set: (key: string, value: T) => void,
 *  get: (key: string) => T | undefined,
 *  remove: (key: string) => void,
 *  clear: () => void
 * }} - 包含设置、获取、删除和清除缓存的方法。
 *
 * @example
 * const cache = cacheWithTTL<number>(5000);
 * cache.set('key', 100);
 * console.log(cache.get('key')); // 100
 * setTimeout(() => console.log(cache.get('key')), 6000); // undefined
 */
export { cacheWithTTL } from './cacheWithTTL';
/**
 * 实现一个最近最少使用（LRU）缓存。
 *
 * @template K - 键的类型。
 * @template V - 值的类型。
 * @param {number} capacity - 缓存的容量，超过该容量时，将移除最久未使用的项。
 * @returns {{
 *   get: (key: K) => V | undefined,
 *   put: (key: K, value: V) => void,
 *   size: () => number
 * }} - 包含获取、存储和获取缓存大小的方法。
 *
 * @example
 * const cache = lruCache<string, number>(3);
 * cache.put('a', 1);
 * cache.put('b', 2);
 * cache.put('c', 3);
 * console.log(cache.get('a')); // 1
 * cache.put('d', 4); // 'b' 被移除，因为它是最久未使用的
 * console.log(cache.get('b')); // undefined
 */
export { lruCache } from './lruCache';
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
export { memoize } from './memoize';
