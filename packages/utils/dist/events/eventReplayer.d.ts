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
export declare function createEventReplayer<E>(): {
    record: (event: E) => void;
    replay: () => void;
    clear: () => void;
};
