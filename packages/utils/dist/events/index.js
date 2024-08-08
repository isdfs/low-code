"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventReplayer = exports.createEventBus = exports.delegate = exports.debounceEvent = void 0;
/**
 * 为事件处理程序添加防抖功能，限制事件处理程序的触发频率。
 *
 * @param {Function} callback - 原始事件处理程序。
 * @param {number} delay - 防抖延迟时间（毫秒）。
 * @returns {Function} 包含防抖功能的新事件处理程序。
 *
 * @example
 * const debouncedClick = debounceEvent(() => {
 *   console.log('Button clicked');
 * }, 300);
 * document.getElementById('myButton')!.addEventListener('click', debouncedClick);
 */
var debounceEvent_1 = require("./debounceEvent");
Object.defineProperty(exports, "debounceEvent", { enumerable: true, get: function () { return debounceEvent_1.debounceEvent; } });
/**
 * 事件委托
 *
 * @param {Element} parent - 父元素
 * @param {string} selector - 目标子元素的选择器
 * @param {string} eventType - 事件类型
 * @param {Function} callback - 事件触发时的回调函数
 *
 * @example
 * delegate(document.body, 'button', 'click', (event) => {
 *   console.log('Button clicked:', event.target);
 * });
 */
var delegate_1 = require("./delegate");
Object.defineProperty(exports, "delegate", { enumerable: true, get: function () { return delegate_1.delegate; } });
/**
 * 简单的事件总线（Event Bus），用于在不同组件之间传递事件。
 *
 * @template E - 事件类型。
 * @template P - 事件参数类型。
 * @returns {{
 *   on: (event: E, callback: (payload: P) => void) => void,
 *   off: (event: E, callback: (payload: P) => void) => void,
 *   emit: (event: E, payload: P) => void
 * }} - 包含注册事件、注销事件和触发事件的方法。
 *
 * @example
 * const eventBus = createEventBus<string, number>();
 * const listener = (payload: number) => console.log('Received:', payload);
 * eventBus.on('event1', listener);
 * eventBus.emit('event1', 42); // Console: 'Received: 42'
 * eventBus.off('event1', listener);
 */
var eventBus_1 = require("./eventBus");
Object.defineProperty(exports, "createEventBus", { enumerable: true, get: function () { return eventBus_1.createEventBus; } });
/**
 * 事件重放系统，用于记录和重放应用中的事件。
 *
 * @template E - 事件类型。
 * @returns {{
 *   record: (event: E) => void,
 *   replay: () => void,
 *   clear: () => void
 * }} - 包含记录事件、重放事件和清除事件的方法。
 *
 * @example
 * const eventReplayer = createEventReplayer<{ type: string, payload: any }>();
 * eventReplayer.record({ type: 'click', payload: { x: 10, y: 20 } });
 * eventReplayer.record({ type: 'scroll', payload: { scrollTop: 100 } });
 * eventReplayer.replay(); // 重放记录的事件
 */
var eventReplayer_1 = require("./eventReplayer");
Object.defineProperty(exports, "createEventReplayer", { enumerable: true, get: function () { return eventReplayer_1.createEventReplayer; } });
