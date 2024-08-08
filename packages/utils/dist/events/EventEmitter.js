"use strict";
// src/events/EventEmitter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventEmitter = void 0;
/**
 * 简单的事件发布/订阅模式实现
 */
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.events = {};
    }
    /**
     * 注册事件监听器
     *
     * @param {string} event - 事件名称
     * @param {Listener} listener - 事件监听器
     */
    EventEmitter.prototype.on = function (event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    };
    /**
     * 移除事件监听器
     *
     * @param {string} event - 事件名称
     * @param {Listener} listener - 事件监听器
     */
    EventEmitter.prototype.off = function (event, listener) {
        if (!this.events[event])
            return;
        this.events[event] = this.events[event].filter(function (l) { return l !== listener; });
    };
    /**
     * 触发事件
     *
     * @param {string} event - 事件名称
     * @param {...any[]} args - 传递给监听器的参数
     */
    EventEmitter.prototype.emit = function (event) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!this.events[event])
            return;
        this.events[event].forEach(function (listener) { return listener.apply(void 0, args); });
    };
    return EventEmitter;
}());
exports.EventEmitter = EventEmitter;
// 使用示例
// const emitter = new EventEmitter();
// function onFoo(data: string) {
//     console.log('foo listener', data);
// }
// emitter.on('foo', onFoo);
// emitter.emit('foo', 'bar'); // 输出 'foo listener bar'
// emitter.off('foo', onFoo);
