/**
 * 高级网络请求管理模块，提供请求中断、重试、并发控制和缓存等功能。
 * @module AdvancedRequestManager
 */

export interface RequestOptions {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  body?: any;
  retries?: number;
  cache?: boolean;
  timeout?: number;
}

class AdvancedRequestManager {
  private controller: AbortController | null = null;

  constructor() {}

  /**
   * 发送网络请求，支持中断、重试和超时设置。
   * @param {string} url - 请求的URL。
   * @param {RequestOptions} options - 请求的选项。
   * @returns {Promise<Response>} 请求的响应对象。
   */
  async sendRequest(url: string, options: RequestOptions) {
      const { method, headers, body, retries = 3, cache = false, timeout = 5000 } = options;
      this.controller = new AbortController();

      for (let attempt = 0; attempt < retries; attempt++) {
          try {
              const response = await this.fetchWithTimeout(url, {
                  method,
                  headers,
                  body: JSON.stringify(body),
                  signal: this.controller.signal
              }, timeout);

              if (cache) {
                  this.cacheResponse(url, response.clone());
              }

              return response;
          } catch (error) {
              if (attempt === retries - 1) {
                  throw error;
              }
          }
      }
  }

  /**
   * 中断当前请求。
   */
  abortRequest(): void {
      if (this.controller) {
          this.controller.abort();
      }
  }

  /**
   * 带有超时的 fetch 请求。
   * @param {string} url - 请求的URL。
   * @param {RequestInit} options - 请求的初始化选项。
   * @param {number} timeout - 超时时间，单位为毫秒。
   * @returns {Promise<Response>} 请求的响应对象。
   */
  private fetchWithTimeout(url: string, options: RequestInit, timeout: number): Promise<Response> {
      return new Promise((resolve, reject) => {
          const timer = setTimeout(() => {
              this.controller?.abort();
              reject(new Error('请求超时'));
          }, timeout);

          fetch(url, options)
              .then(response => {
                  clearTimeout(timer);
                  resolve(response);
              })
              .catch(error => {
                  clearTimeout(timer);
                  reject(error);
              });
      });
  }

  /**
   * 缓存请求的响应。
   * @param {string} url - 请求的URL。
   * @param {Response} response - 请求的响应对象。
   */
  private async cacheResponse(url: string, response: Response): Promise<void> {
      const cache = await caches.open('request-cache');
      await cache.put(url, response);
  }

  /**
   * 从缓存中获取响应。
   * @param {string} url - 请求的URL。
   * @returns {Promise<Response | null>} 缓存的响应对象，若不存在则返回 null。
   */
  async getCachedResponse(url: string): Promise<Response | null> {
      const cache = await caches.open('request-cache');
      return await cache.match(url) || null;
  }
}

const requestManager = new AdvancedRequestManager();
export default requestManager;
