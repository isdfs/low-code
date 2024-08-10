/**
 * 事件总线模块，实现发布/订阅模式的事件处理。
 */
declare type EventListener<T> = (payload: T) => void | Promise<void>;
export declare class EventBus {
    private listeners;
    /**
     * 订阅指定事件的监听器。
     * @param event 事件名称。
     * @param listener 监听器函数。
     */
    subscribe<T>(event: string, listener: EventListener<T>): void;
    /**
     * 发布指定事件。
     * @param event 事件名称。
     * @param payload 事件数据。
     * @returns 一个Promise，表示所有监听器执行完成。
     */
    publish<T>(event: string, payload: T): Promise<void>;
    /**
     * 取消订阅指定事件的监听器。
     * @param event 事件名称。
     * @param listener 要取消的监听器函数。
     */
    unsubscribe<T>(event: string, listener: EventListener<T>): void;
}
export {};
/**
 * 使用示例：
 * ```typescript
 * const eventBus = new EventBus();
 *
 * const onUserCreated = (user: { id: string; name: string }) => {
 *   console.log(`User created: ${user.name}`);
 * };
 *
 * eventBus.subscribe('userCreated', onUserCreated);
 *
 * eventBus.publish('userCreated', { id: '1', name: 'Alice' });
 * // 输出: User created: Alice
 *
 * eventBus.unsubscribe('userCreated', onUserCreated);
 * ```
 */
