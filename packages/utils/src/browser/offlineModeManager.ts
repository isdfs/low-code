/**
 * 浏览器离线模式管理模块，提供离线模式下的资源缓存和加载管理功能。
 * @module OfflineModeManager
 */

class OfflineModeManager {
  private cacheName: string;
  private cache: Cache | null = null;

  constructor(cacheName: string = 'offline-cache') {
      this.cacheName = cacheName;
      this.initCache();
  }

  private async initCache() {
      if ('caches' in window) {
          this.cache = await caches.open(this.cacheName);
      } else {
          console.warn('Browser does not support the Cache API');
      }
  }

  async cacheResource(url: string): Promise<void> {
      if (!this.cache) return;
      const response = await fetch(url);
      await this.cache.put(url, response.clone());
  }

  async loadResource(url: string): Promise<Response | null> {
      if (!this.cache) return null;
      const response = await this.cache.match(url);
      if (response) return response;

      return fetch(url);
  }

  async clearCache(): Promise<void> {
      if (!this.cache) return;
      const keys = await this.cache.keys();
      for (const key of keys) {
          await this.cache.delete(key);
      }
  }

  async isResourceCached(url: string): Promise<boolean> {
      if (!this.cache) return false;
      const response = await this.cache.match(url);
      return response !== undefined;
  }
}

// 实例化并使用离线模式管理器
const offlineModeManager = new OfflineModeManager();
export default offlineModeManager;
