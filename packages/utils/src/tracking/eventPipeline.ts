/**
 * 高级事件流处理埋点模块。
 * 
 * 该模块允许建立一个事件处理管道，逐步处理和转换埋点数据。
 * 
 * @example
 * ```
 * const pipeline = new EventPipeline('/track');
 * pipeline
 *   .use(event => ({ ...event, enhanced: true })) // 添加自定义数据
 *   .use(event => event.type !== 'ignore' ? event : null) // 过滤掉不需要的事件
 *   .track('page_view', { page: '/home' });
 * ```
 */

export type EventProcessor = (event: Record<string, any>) => Record<string, any> | null;

export class EventPipeline {
    private processors: EventProcessor[] = [];
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    /**
     * 添加一个处理器到事件处理管道中。
     * @param {EventProcessor} processor - 事件处理函数。
     * @returns {this} 返回当前实例以支持链式调用。
     */
    use(processor: EventProcessor): this {
        this.processors.push(processor);
        return this;
    }

    /**
     * 跟踪事件并通过管道处理数据。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    track(eventName: string, eventData: Record<string, any>): void {
        let event: any = {
            event: eventName,
            timestamp: new Date().toISOString(),
            ...eventData,
        };

        for (const processor of this.processors) {
            event = processor(event);
            if (!event) return; // 事件被过滤掉
        }

        this.sendEvent(event);
    }

    /**
     * 发送处理后的事件数据到服务器。
     * @param {Record<string, any>} event - 处理后的事件数据。
     * @returns {void}
     */
    private sendEvent(event: Record<string, any>): void {
        navigator.sendBeacon(this.url, JSON.stringify(event));
    }
}
