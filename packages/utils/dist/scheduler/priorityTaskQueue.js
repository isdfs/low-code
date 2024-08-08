"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priorityTaskQueue = void 0;
/**
 * 任务优先级队列，用于按照优先级执行任务。
 *
 * @template T - 任务的类型。
 * @returns {{
*   enqueue: (task: T, priority: number) => void,
*   dequeue: () => T | undefined,
*   size: () => number,
*   processAll: (processor: (task: T) => void) => void
* }} - 包含入队、出队、获取队列大小和处理所有任务的方法。
*
* @example
* const taskQueue = priorityTaskQueue<string>();
* taskQueue.enqueue('task1', 2);
* taskQueue.enqueue('task2', 1);
* taskQueue.enqueue('task3', 3);
* taskQueue.processAll(task => console.log(task)); // 输出: 'task2', 'task1', 'task3'
*/
function priorityTaskQueue() {
    var tasks = [];
    function enqueue(task, priority) {
        tasks.push({ task: task, priority: priority });
        tasks.sort(function (a, b) { return a.priority - b.priority; });
    }
    function dequeue() {
        var _a;
        return (_a = tasks.shift()) === null || _a === void 0 ? void 0 : _a.task;
    }
    function size() {
        return tasks.length;
    }
    function processAll(processor) {
        while (tasks.length > 0) {
            var task = dequeue();
            if (task) {
                processor(task);
            }
        }
    }
    return {
        enqueue: enqueue,
        dequeue: dequeue,
        size: size,
        processAll: processAll,
    };
}
exports.priorityTaskQueue = priorityTaskQueue;
