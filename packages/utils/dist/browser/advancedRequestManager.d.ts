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
declare class AdvancedRequestManager {
    private controller;
    constructor();
    /**
     * 发送网络请求，支持中断、重试和超时设置。
     * @param {string} url - 请求的URL。
     * @param {RequestOptions} options - 请求的选项。
     * @returns {Promise<Response>} 请求的响应对象。
     */
    sendRequest(url: string, options: RequestOptions): Promise<Response | undefined>;
    /**
     * 中断当前请求。
     */
    abortRequest(): void;
    /**
     * 带有超时的 fetch 请求。
     * @param {string} url - 请求的URL。
     * @param {RequestInit} options - 请求的初始化选项。
     * @param {number} timeout - 超时时间，单位为毫秒。
     * @returns {Promise<Response>} 请求的响应对象。
     */
    private fetchWithTimeout;
    /**
     * 缓存请求的响应。
     * @param {string} url - 请求的URL。
     * @param {Response} response - 请求的响应对象。
     */
    private cacheResponse;
    /**
     * 从缓存中获取响应。
     * @param {string} url - 请求的URL。
     * @returns {Promise<Response | null>} 缓存的响应对象，若不存在则返回 null。
     */
    getCachedResponse(url: string): Promise<Response | null>;
}
declare const requestManager: AdvancedRequestManager;
export default requestManager;
