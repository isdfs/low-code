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
export declare function priorityTaskQueue<T>(): {
    enqueue: (task: T, priority: number) => void;
    dequeue: () => T | undefined;
    size: () => number;
    processAll: (processor: (task: T) => void) => void;
};
