/**
 * 多平台埋点支持模块。
 *
 * 该模块提供了一个通用的埋点接口，支持Web和移动端平台（如React Native）。
 * 根据运行环境自动选择适当的埋点方式。
 *
 * @example
 * ```
 * const tracker = new CrossPlatformTracker('/track');
 * tracker.trackEvent('app_launch', { platform: 'web' });
 * ```
 */
export declare class CrossPlatformTracker {
    private url;
    private isMobile;
    constructor(url: string);
    /**
     * 跟踪事件并根据平台选择合适的埋点方式。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    trackEvent(eventName: string, eventData: Record<string, any>): void;
    /**
     * 在Web平台上发送事件数据。
     * @param {Record<string, any>} data - 事件数据。
     * @returns {void}
     */
    private trackWeb;
    /**
     * 在移动平台上发送事件数据（假设为React Native的实现）。
     * @param {Record<string, any>} data - 事件数据。
     * @returns {void}
     */
    private trackMobile;
}
