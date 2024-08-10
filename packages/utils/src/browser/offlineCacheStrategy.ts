/**
 * 浏览器离线缓存策略模块，提供多种缓存策略以增强离线支持。
 * @module OfflineCacheStrategy
 */

type CacheStrategy = 'network-first' | 'cache-first' | 'stale-while-revalidate';

class OfflineCacheStrategy {
    private cacheName: string;

    constructor(cacheName: string = 'offline-cache') {
        this.cacheName = cacheName;
    }

    /**
     * 根据指定的策略获取资源。
     * @param {string} url - 资源的URL。
     * @param {CacheStrategy} strategy - 缓存策略。
     * @returns {Promise<Response>} 资源的响应。
     */
    async fetchWithStrategy(url: string, strategy: CacheStrategy): Promise<Response> {
        const cache = await caches.open(this.cacheName);

        if (strategy === 'network-first') {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    cache.put(url, response.clone());
                }
                return response;
            } catch (error) {
                return await cache.match(url) || new Response('离线资源不可用', { status: 503 });
            }
        }

        if (strategy === 'cache-first') {
            const cachedResponse = await cache.match(url);
            if (cachedResponse) {
                return cachedResponse;
            }
            const response = await fetch(url);
            if (response.ok) {
                cache.put(url, response.clone());
            }
            return response;
        }

        if (strategy === 'stale-while-revalidate') {
            const cachedResponse = await cache.match(url);
            const fetchPromise = fetch(url).then(response => {
                if (response.ok) {
                    cache.put(url, response.clone());
                }
                return response;
            });

            return cachedResponse || fetchPromise;
        }

        throw new Error(`Unsupported cache strategy: ${strategy}`);
    }
}

const offlineCacheStrategy = new OfflineCacheStrategy();
export default offlineCacheStrategy;
