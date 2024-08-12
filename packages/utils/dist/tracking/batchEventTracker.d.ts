/**
 * 异步批量发送埋点数据模块。
 *
 * 该模块收集用户的交互数据，并在达到设定的条件时（如批量大小或时间间隔）批量发送数据到服务器。
 *
 * @example
 * ```
 * const tracker = new BatchEventTracker('/track', { batchSize: 10, flushInterval: 5000 });
 * tracker.trackEvent('button_click', { buttonId: 'submit-button', page: 'home' });
 * tracker.flush(); // 强制发送所有未发送的数据
 * ```
 */
interface BatchEventTrackerOptions {
    batchSize?: number;
    flushInterval?: number;
    storageKey?: string;
}
export declare class BatchEventTracker {
    private events;
    private batchSize;
    private flushInterval;
    private storageKey;
    private flushTimer;
    private url;
    constructor(url: string, options?: BatchEventTrackerOptions);
    /**
     * 跟踪事件并将其添加到队列中。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    trackEvent(eventName: string, eventData: Record<string, any>): void;
    /**
     * 检查是否需要发送数据（基于批量大小）。
     * @returns {void}
     */
    private checkFlush;
    /**
     * 手动发送所有未发送的数据。
     * @returns {void}
     */
    flush(): void;
    /**
     * 发送数据到服务器。
     * @param {Array<Record<string, any>>} data - 要发送的数据数组。
     * @returns {void}
     */
    private sendData;
    /**
     * 启动自动发送的定时器。
     * @returns {void}
     */
    private startFlushTimer;
    /**
     * 加载未发送的缓存事件（例如，在浏览器崩溃或重新加载页面时恢复）。
     * @returns {void}
     */
    private loadCachedEvents;
    /**
     * 将未发送的事件缓存到本地存储。
     * @returns {void}
     */
    private cacheEvents;
    /**
     * 停止自动发送定时器，并发送所有剩余的事件。
     * @returns {void}
     */
    stop(): void;
}
export {};
