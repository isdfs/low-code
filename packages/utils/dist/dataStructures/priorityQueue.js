"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.priorityQueue = void 0;
/**
 * 优先队列，用于按照优先级顺序处理任务。
 *
 * @template T - 队列元素的类型。
 * @param {Array<{ item: T, priority: number }>} [initialElements] - 初始元素及其优先级的数组。
 * @returns {{
*   enqueue: (item: T, priority: number) => void,
*   dequeue: () => T | undefined,
*   peek: () => T | undefined,
*   size: () => number
* }} - 包含入队、出队、查看队首元素和获取队列大小的方法。
*
* @example
* const pq = priorityQueue<string>();
* pq.enqueue('task1', 2);
* pq.enqueue('task2', 1);
* console.log(pq.dequeue()); // 'task2'
*/
function priorityQueue(initialElements) {
    var elements = initialElements ? __spreadArray([], initialElements, true) : [];
    function enqueue(item, priority) {
        elements.push({ item: item, priority: priority });
        elements.sort(function (a, b) { return a.priority - b.priority; });
    }
    function dequeue() {
        var _a;
        return (_a = elements.shift()) === null || _a === void 0 ? void 0 : _a.item;
    }
    function peek() {
        var _a;
        return (_a = elements[0]) === null || _a === void 0 ? void 0 : _a.item;
    }
    function size() {
        return elements.length;
    }
    return {
        enqueue: enqueue,
        dequeue: dequeue,
        peek: peek,
        size: size,
    };
}
exports.priorityQueue = priorityQueue;
