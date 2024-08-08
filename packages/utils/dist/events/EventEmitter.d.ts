type Listener = (...args: any[]) => void;
/**
 * 简单的事件发布/订阅模式实现
 */
export declare class EventEmitter {
    private events;
    /**
     * 注册事件监听器
     *
     * @param {string} event - 事件名称
     * @param {Listener} listener - 事件监听器
     */
    on(event: string, listener: Listener): void;
    /**
     * 移除事件监听器
     *
     * @param {string} event - 事件名称
     * @param {Listener} listener - 事件监听器
     */
    off(event: string, listener: Listener): void;
    /**
     * 触发事件
     *
     * @param {string} event - 事件名称
     * @param {...any[]} args - 传递给监听器的参数
     */
    emit(event: string, ...args: any[]): void;
}
export {};
