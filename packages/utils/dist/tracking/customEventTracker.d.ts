/**
 * 自定义事件追踪系统。
 *
 * 该模块允许开发者定义和追踪复杂的自定义事件，并根据用户行为触发这些事件。
 *
 * @example
 * ```
 * const tracker = new CustomEventTracker('/track');
 * tracker.defineEvent('complex_event', ['click', 'scroll'], (events) => {
 *   return events.some(event => event.event === 'click') && events.some(event => event.event === 'scroll');
 * });
 * tracker.trackEvent('click', { button: 'start' });
 * tracker.trackEvent('scroll', { position: 300 });
 * ```
 */
interface TrackedEvent {
    event: string;
    data: Record<string, any>;
    timestamp: string;
}
declare type EventCondition = (events: TrackedEvent[]) => boolean;
export declare class CustomEventTracker {
    private url;
    private events;
    private customEvents;
    constructor(url: string);
    /**
     * 定义一个自定义事件。
     * @param {string} eventName - 自定义事件的名称。
     * @param {string[]} conditions - 触发此事件所需的基础事件条件。
     * @param {EventCondition} handler - 判断自定义事件是否触发的处理函数。
     * @returns {void}
     */
    defineEvent(eventName: string, conditions: string[], handler: EventCondition): void;
    /**
     * 追踪基础事件，并检查是否应触发自定义事件。
     * @param {string} eventName - 事件名称。
     * @param {Record<string, any>} eventData - 事件关联的详细数据。
     * @returns {void}
     */
    trackEvent(eventName: string, eventData: Record<string, any>): void;
    /**
     * 检查并触发自定义事件。
     * @returns {void}
     */
    private checkCustomEvents;
    /**
     * 触发自定义事件并发送数据到服务器。
     * @param {string} eventName - 自定义事件名称。
     * @param {TrackedEvent[]} events - 触发自定义事件的基础事件列表。
     * @returns {void}
     */
    private triggerCustomEvent;
}
export {};
