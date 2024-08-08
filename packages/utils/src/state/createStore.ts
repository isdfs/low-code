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
export function createStore<T>(initialState: T) {
   let state = initialState;
   const listeners: Array<(state: T) => void> = [];

   function getState() {
       return state;
   }

   function setState(newState: Partial<T>) {
       state = { ...state, ...newState };
       listeners.forEach(listener => listener(state));
   }

   function subscribe(listener: (state: T) => void) {
       listeners.push(listener);
       return () => {
           const index = listeners.indexOf(listener);
           if (index > -1) {
               listeners.splice(index, 1);
           }
       };
   }

   return {
       getState,
       setState,
       subscribe
   };
}
