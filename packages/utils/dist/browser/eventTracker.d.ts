/**
 * 浏览器事件跟踪器模块，支持多种事件类型的跟踪和实时传输。
 * @module EventTracker
 */
interface EventStrategy {
    track(event: Event): void;
}
declare class EventTracker {
    private strategies;
    constructor();
    addStrategy(eventType: string, strategy: EventStrategy): void;
    trackEvent(event: Event): void;
    attachToDOM(): void;
}
declare const eventTracker: EventTracker;
export default eventTracker;
