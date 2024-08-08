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
export function cacheWithTTL<T>(ttl: number) {
   const cache: Record<string, { value: T; expiry: number }> = {};

   function set(key: string, value: T) {
       const expiry = Date.now() + ttl;
       cache[key] = { value, expiry };
   }

   function get(key: string): T | undefined {
       const cachedItem = cache[key];
       if (cachedItem && cachedItem.expiry > Date.now()) {
           return cachedItem.value;
       }
       remove(key); // 缓存过期则删除
       return undefined;
   }

   function remove(key: string) {
       delete cache[key];
   }

   function clear() {
       Object.keys(cache).forEach(remove);
   }

   return {
       set,
       get,
       remove,
       clear,
   };
}
