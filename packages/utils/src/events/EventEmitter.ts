// src/events/EventEmitter.ts

type Listener = (...args: any[]) => void;

/**
 * 简单的事件发布/订阅模式实现
 */
export class EventEmitter {
    private events: Record<string, Listener[]> = {};

    /**
     * 注册事件监听器
     *
     * @param {string} event - 事件名称
     * @param {Listener} listener - 事件监听器
     */
    on(event: string, listener: Listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    /**
     * 移除事件监听器
     *
     * @param {string} event - 事件名称
     * @param {Listener} listener - 事件监听器
     */
    off(event: string, listener: Listener) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(l => l !== listener);
    }

    /**
     * 触发事件
     *
     * @param {string} event - 事件名称
     * @param {...any[]} args - 传递给监听器的参数
     */
    emit(event: string, ...args: any[]) {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => listener(...args));
    }
}

// 使用示例
// const emitter = new EventEmitter();

// function onFoo(data: string) {
//     console.log('foo listener', data);
// }

// emitter.on('foo', onFoo);
// emitter.emit('foo', 'bar'); // 输出 'foo listener bar'
// emitter.off('foo', onFoo);
