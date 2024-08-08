// src/cache/CacheManager.ts

/**
 * 缓存项
 */
interface CacheItem<T> {
  value: T;
  expiry: number;
}

/**
* 缓存管理器，用于管理数据的缓存
*/
export class CacheManager<T> {
  private cache: Map<string, CacheItem<T>> = new Map();

  /**
   * 设置缓存
   *
   * @param {string} key - 缓存键
   * @param {T} value - 缓存值
   * @param {number} ttl - 缓存时间（毫秒），-1 表示永久缓存
   */
  set(key: string, value: T, ttl: number = -1) {
      const expiry = ttl === -1 ? Number.MAX_SAFE_INTEGER : Date.now() + ttl;
      this.cache.set(key, { value, expiry });
  }

  /**
   * 获取缓存
   *
   * @param {string} key - 缓存键
   * @returns {T | null} 缓存值，如果缓存已过期或不存在则返回 null
   */
  get(key: string): T | null {
      const item = this.cache.get(key);
      if (!item) return null;

      if (item.expiry < Date.now()) {
          this.cache.delete(key);
          return null;
      }

      return item.value;
  }

  /**
   * 清除指定缓存
   *
   * @param {string} key - 缓存键
   */
  clear(key: string) {
      this.cache.delete(key);
  }

  /**
   * 清除所有缓存
   */
  clearAll() {
      this.cache.clear();
  }
}

// 使用示例
const cache = new CacheManager<string>();

cache.set('user', 'John Doe', 1000); // 缓存 1 秒
console.log(cache.get('user')); // 'John Doe'
setTimeout(() => console.log(cache.get('user')), 1500); // null
