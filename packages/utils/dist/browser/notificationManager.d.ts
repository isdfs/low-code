/**
 * 浏览器通知管理模块，提供统一的接口来处理浏览器通知。
 * @module NotificationManager
 */
export interface NotificationOptions {
    title: string;
    body?: string;
    icon?: string;
    tag?: string;
}
declare class NotificationManager {
    constructor();
    /**
     * 请求显示通知的权限。
     * @returns {Promise<NotificationPermission>} 用户的权限状态。
     */
    requestPermission(): Promise<NotificationPermission>;
    /**
     * 显示通知。
     * @param {NotificationOptions} options - 通知的选项。
     * @returns {Notification | null} 创建的通知对象，或者在权限不足时返回null。
     */
    showNotification(options: NotificationOptions): Notification | null;
    /**
     * 监听通知点击事件。
     * @param {Notification} notification - 通知对象。
     * @param {() => void} callback - 用户点击通知时触发的回调函数。
     */
    onClick(notification: Notification, callback: () => void): void;
}
declare const notificationManager: NotificationManager;
export default notificationManager;
