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
export function createEventBus<E extends string | symbol, P>() {
   const listeners = new Map<E, Set<(payload: P) => void>>();

   function on(event: E, callback: (payload: P) => void): void {
       if (!listeners.has(event)) {
           listeners.set(event, new Set());
       }
       listeners.get(event)!.add(callback);
   }

   function off(event: E, callback: (payload: P) => void): void {
       const eventListeners = listeners.get(event);
       if (eventListeners) {
           eventListeners.delete(callback);
           if (eventListeners.size === 0) {
               listeners.delete(event);
           }
       }
   }

   function emit(event: E, payload: P): void {
       const eventListeners = listeners.get(event);
       if (eventListeners) {
           eventListeners.forEach(callback => callback(payload));
       }
   }

   return {
       on,
       off,
       emit,
   };
}
