/**
 * 浏览器 Service Worker 管理模块，提供 Service Worker 的注册、更新、移除等功能。
 * @module ServiceWorkerManager
 */
declare class ServiceWorkerManager {
    private swUrl;
    constructor(swUrl?: string);
    /**
     * 注册 Service Worker。
     * @returns {Promise<ServiceWorkerRegistration | null>} 返回 Service Worker 注册信息。
     */
    register(): Promise<ServiceWorkerRegistration | null>;
    /**
     * 更新 Service Worker。
     */
    update(): Promise<void>;
    /**
     * 移除 Service Worker。
     */
    unregister(): Promise<void>;
    /**
     * 获取当前 Service Worker 的注册信息。
     * @returns {Promise<ServiceWorkerRegistration | null>} 返回 Service Worker 注册信息。
     */
    getRegistration(): Promise<ServiceWorkerRegistration | undefined>;
    /**
     * 添加 Service Worker 生命周期事件监听器。
     * @param {ServiceWorkerRegistration} registration - Service Worker 注册信息。
     */
    private addLifecycleListeners;
    /**
     * 处理 Service Worker 状态变化事件。
     * @param {Event} event - 事件对象。
     */
    private handleStateChange;
}
export default ServiceWorkerManager;
