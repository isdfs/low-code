/**
 * 创建一个简单的状态管理存储器。
 *
 * @template T - 存储器状态的类型。
 * @param {T} initialState - 初始状态。
 * @returns {{
 *  getState: () => T,
 *  setState: (newState: Partial<T>) => void,
 *  subscribe: (listener: (state: T) => void) => () => void
 * }} - 包含获取状态、设置状态和订阅状态变化的方法。
 *
 * @example
 * const store = createStore({ count: 0 });
 * store.subscribe((state) => console.log('State updated:', state));
 * store.setState({ count: store.getState().count + 1 });
 * console.log(store.getState()); // { count: 1 }
 */
export { createStore } from './createStore';

/**
 * 有限状态机，用于管理复杂的状态转换。
 *
 * @template S - 状态类型。
 * @template E - 事件类型。
 * @param {{
 *   initial: S,
 *   states: Record<S, { on: Record<E, S> }>
 * }} config - 状态机的配置对象，包括初始状态和状态转换规则。
 * @returns {{
 *   getState: () => S,
 *   transition: (event: E) => void
 * }} - 包含获取当前状态和触发状态转换的方法。
 *
 * @example
 * const fsm = finiteStateMachine({
 *   initial: 'idle',
 *   states: {
 *     idle: { on: { START: 'running' } },
 *     running: { on: { STOP: 'idle' } }
 *   }
 * });
 * console.log(fsm.getState()); // 'idle'
 * fsm.transition('START');
 * console.log(fsm.getState()); // 'running'
 */
export { finiteStateMachine } from './finiteStateMachine';