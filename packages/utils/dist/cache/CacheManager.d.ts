/**
* 缓存管理器，用于管理数据的缓存
*/
export declare class CacheManager<T> {
    private cache;
    /**
     * 设置缓存
     *
     * @param {string} key - 缓存键
     * @param {T} value - 缓存值
     * @param {number} ttl - 缓存时间（毫秒），-1 表示永久缓存
     */
    set(key: string, value: T, ttl?: number): void;
    /**
     * 获取缓存
     *
     * @param {string} key - 缓存键
     * @returns {T | null} 缓存值，如果缓存已过期或不存在则返回 null
     */
    get(key: string): T | null;
    /**
     * 清除指定缓存
     *
     * @param {string} key - 缓存键
     */
    clear(key: string): void;
    /**
     * 清除所有缓存
     */
    clearAll(): void;
}
