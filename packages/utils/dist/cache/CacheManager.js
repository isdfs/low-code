"use strict";
// src/cache/CacheManager.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheManager = void 0;
/**
* 缓存管理器，用于管理数据的缓存
*/
var CacheManager = /** @class */ (function () {
    function CacheManager() {
        this.cache = new Map();
    }
    /**
     * 设置缓存
     *
     * @param {string} key - 缓存键
     * @param {T} value - 缓存值
     * @param {number} ttl - 缓存时间（毫秒），-1 表示永久缓存
     */
    CacheManager.prototype.set = function (key, value, ttl) {
        if (ttl === void 0) { ttl = -1; }
        var expiry = ttl === -1 ? Number.MAX_SAFE_INTEGER : Date.now() + ttl;
        this.cache.set(key, { value: value, expiry: expiry });
    };
    /**
     * 获取缓存
     *
     * @param {string} key - 缓存键
     * @returns {T | null} 缓存值，如果缓存已过期或不存在则返回 null
     */
    CacheManager.prototype.get = function (key) {
        var item = this.cache.get(key);
        if (!item)
            return null;
        if (item.expiry < Date.now()) {
            this.cache.delete(key);
            return null;
        }
        return item.value;
    };
    /**
     * 清除指定缓存
     *
     * @param {string} key - 缓存键
     */
    CacheManager.prototype.clear = function (key) {
        this.cache.delete(key);
    };
    /**
     * 清除所有缓存
     */
    CacheManager.prototype.clearAll = function () {
        this.cache.clear();
    };
    return CacheManager;
}());
exports.CacheManager = CacheManager;
// 使用示例
var cache = new CacheManager();
cache.set('user', 'John Doe', 1000); // 缓存 1 秒
console.log(cache.get('user')); // 'John Doe'
setTimeout(function () { return console.log(cache.get('user')); }, 1500); // null
