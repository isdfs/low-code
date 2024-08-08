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
export declare function lruCache<K, V>(capacity: number): {
    get: (key: K) => V | undefined;
    put: (key: K, value: V) => void;
    size: () => number;
};
