/**
 * 本地缓存未发送数据的埋点系统。
 *
 * 该模块在网络不可用时将埋点数据缓存到本地，当网络恢复时自动发送所有未发送的数据。
 *
 * @example
 * ```
 * const tracker = new OfflineEventTracker('/track');
 * tracker.trackEvent('page_view', { page: '/home' });
 * ```
 */
export declare class OfflineEventTracker {
    private url;
    private storageKey;
    private events;
    constructor(url: string);
    /**
     * 跟踪事件并将其存储在本地，直到网络恢复。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    trackEvent(eventName: string, eventData: Record<string, any>): void;
    /**
     * 检查网络状态，如果在线则发送所有缓存的事件。
     * @returns {void}
     */
    private checkAndFlush;
    /**
     * 发送所有缓存的事件并清除缓存。
     * @returns {void}
     */
    private flush;
    /**
     * 发送事件数据到服务器。
     * @param {Array<Record<string, any>>} data - 要发送的数据数组。
     * @returns {void}
     */
    private sendData;
    /**
     * 将未发送的事件缓存到本地存储。
     * @returns {void}
     */
    private cacheEvents;
    /**
     * 加载未发送的缓存事件。
     * @returns {void}
     */
    private loadCachedEvents;
    /**
     * 监听网络状态的变化，并在网络恢复时自动发送缓存的事件。
     * @returns {void}
     */
    private listenForNetworkStatus;
}
