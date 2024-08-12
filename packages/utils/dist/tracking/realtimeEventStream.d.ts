/**
 * 实时数据流埋点系统。
 *
 * 该模块将埋点数据作为实时流发送到服务器，适合实时监控用户行为的应用场景。
 *
 * @example
 * ```
 * const stream = new RealtimeEventStream('/stream');
 * stream.trackEvent('user_action', { action: 'click', element: 'button' });
 * ```
 */
export declare class RealtimeEventStream {
    private url;
    private eventSource;
    constructor(url: string);
    /**
     * 初始化实时事件流连接。
     * @returns {void}
     */
    private initStream;
    /**
     * 发送事件数据到服务器。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    trackEvent(eventName: string, eventData: Record<string, any>): void;
    /**
     * 关闭实时事件流连接。
     * @returns {void}
     */
    closeStream(): void;
}
