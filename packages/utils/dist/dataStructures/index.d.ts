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
export { priorityQueue } from './priorityQueue';
