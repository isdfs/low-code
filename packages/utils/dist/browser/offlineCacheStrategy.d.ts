/**
 * 浏览器离线缓存策略模块，提供多种缓存策略以增强离线支持。
 * @module OfflineCacheStrategy
 */
declare type CacheStrategy = 'network-first' | 'cache-first' | 'stale-while-revalidate';
declare class OfflineCacheStrategy {
    private cacheName;
    constructor(cacheName?: string);
    /**
     * 根据指定的策略获取资源。
     * @param {string} url - 资源的URL。
     * @param {CacheStrategy} strategy - 缓存策略。
     * @returns {Promise<Response>} 资源的响应。
     */
    fetchWithStrategy(url: string, strategy: CacheStrategy): Promise<Response>;
}
declare const offlineCacheStrategy: OfflineCacheStrategy;
export default offlineCacheStrategy;
