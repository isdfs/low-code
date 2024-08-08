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
export function finiteStateMachine<S, E>(
   config: { initial: S; states: Record<any, any> }
) {
   let currentState = config.initial;

   function getState() {
       return currentState;
   }

   function transition(event: E) {
       const nextState = config.states[currentState]?.on[event];
       if (nextState) {
           currentState = nextState;
       } else {
           console.warn(`No transition defined for event '${event}' in state '${currentState}'`);
       }
   }

   return {
       getState,
       transition,
   };
}
