

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
export { debounceEvent } from './debounceEvent';

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
export { delegate } from './delegate';

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
export { createEventBus } from './eventBus';

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
export { createEventReplayer } from './eventReplayer';