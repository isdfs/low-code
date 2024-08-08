"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createEventReplayer = void 0;
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
function createEventReplayer() {
    var events = [];
    function record(event) {
        events.push(event);
    }
    function replay() {
        events.forEach(function (event) {
            console.log('Replaying event:', event);
            // 这里可以将事件传递给某个处理器来执行实际的重放逻辑
        });
    }
    function clear() {
        events.length = 0;
    }
    return {
        record: record,
        replay: replay,
        clear: clear,
    };
}
exports.createEventReplayer = createEventReplayer;
