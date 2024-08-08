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
export declare function createStore<T>(initialState: T): {
    getState: () => T;
    setState: (newState: Partial<T>) => void;
    subscribe: (listener: (state: T) => void) => () => void;
};
