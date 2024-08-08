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
export function lruCache<K, V>(capacity: number) {
   const cache = new Map<K, V>();

   function get(key: K): V | undefined {
       if (!cache.has(key)) return undefined;
       const value = cache.get(key)!;
       cache.delete(key);
       cache.set(key, value);
       return value;
   }

   function put(key: K, value: V) {
       if (cache.has(key)) {
           cache.delete(key);
       } else if (cache.size >= capacity) {
           // 在删除之前显式检查是否为 `undefined`
           const firstKey = cache.keys().next().value;
           if (firstKey !== undefined) {
               cache.delete(firstKey);
           }
       }
       cache.set(key, value);
   }

   function size(): number {
       return cache.size;
   }

   return {
       get,
       put,
       size,
   };
}
