/**
 * 浏览器 Service Worker 管理模块，提供 Service Worker 的注册、更新、移除等功能。
 * @module ServiceWorkerManager
 */

class ServiceWorkerManager {
  private swUrl: string;

  constructor(swUrl: string = '/service-worker.js') {
      this.swUrl = swUrl;
  }

  /**
   * 注册 Service Worker。
   * @returns {Promise<ServiceWorkerRegistration | null>} 返回 Service Worker 注册信息。
   */
  async register(): Promise<ServiceWorkerRegistration | null> {
      if ('serviceWorker' in navigator) {
          try {
              const registration = await navigator.serviceWorker.register(this.swUrl);
              console.log('Service Worker registered with scope:', registration.scope);
              this.addLifecycleListeners(registration);
              return registration;
          } catch (error) {
              console.error('Service Worker registration failed:', error);
              return null;
          }
      } else {
          console.warn('Service Worker is not supported in this browser.');
          return null;
      }
  }

  /**
   * 更新 Service Worker。
   */
  async update(): Promise<void> {
      const registration = await this.getRegistration();
      if (registration) {
          registration.update();
      }
  }

  /**
   * 移除 Service Worker。
   */
  async unregister(): Promise<void> {
      const registration = await this.getRegistration();
      if (registration) {
          await registration.unregister();
          console.log('Service Worker unregistered.');
      }
  }

  /**
   * 获取当前 Service Worker 的注册信息。
   * @returns {Promise<ServiceWorkerRegistration | null>} 返回 Service Worker 注册信息。
   */
  async getRegistration() {
      return await navigator.serviceWorker.getRegistration(this.swUrl);
  }

  /**
   * 添加 Service Worker 生命周期事件监听器。
   * @param {ServiceWorkerRegistration} registration - Service Worker 注册信息。
   */
  private addLifecycleListeners(registration: ServiceWorkerRegistration): void {
      if (registration.installing) {
          console.log('Service Worker installing');
          registration.installing.onstatechange = this.handleStateChange;
      }
      if (registration.waiting) {
          console.log('Service Worker installed and waiting');
          registration.waiting.onstatechange = this.handleStateChange;
      }
      if (registration.active) {
          console.log('Service Worker active');
          registration.active.onstatechange = this.handleStateChange;
      }
  }

  /**
   * 处理 Service Worker 状态变化事件。
   * @param {Event} event - 事件对象。
   */
  private handleStateChange(event: Event): void {
      const sw = event.target as ServiceWorker;
      console.log('Service Worker state changed to:', sw.state);
  }
}

export default ServiceWorkerManager;
