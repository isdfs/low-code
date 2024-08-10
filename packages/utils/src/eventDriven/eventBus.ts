/**
 * 事件总线模块，实现发布/订阅模式的事件处理。
 */

type EventListener<T> = (payload: T) => void | Promise<void>;

export class EventBus {
  private listeners: Map<string, Array<EventListener<any>>> = new Map();

  /**
   * 订阅指定事件的监听器。
   * @param event 事件名称。
   * @param listener 监听器函数。
   */
  subscribe<T>(event: string, listener: EventListener<T>): void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event)!.push(listener);
  }

  /**
   * 发布指定事件。
   * @param event 事件名称。
   * @param payload 事件数据。
   * @returns 一个Promise，表示所有监听器执行完成。
   */
  async publish<T>(event: string, payload: T): Promise<void> {
    const listeners = this.listeners.get(event) || [];
    await Promise.all(listeners.map(listener => listener(payload)));
  }

  /**
   * 取消订阅指定事件的监听器。
   * @param event 事件名称。
   * @param listener 要取消的监听器函数。
   */
  unsubscribe<T>(event: string, listener: EventListener<T>): void {
    const listeners = this.listeners.get(event);
    if (!listeners) return;

    this.listeners.set(
      event,
      listeners.filter(l => l !== listener)
    );
  }
}

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
