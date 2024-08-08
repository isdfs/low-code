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
export { priorityTaskQueue } from './priorityTaskQueue';
/**
 * 任务调度器，用于按时间间隔或计划表执行任务。
 *
 * @returns {{
 *   schedule: (task: () => void, interval: number) => void,
 *   scheduleAt: (task: () => void, date: Date) => void,
 *   cancel: (task: () => void) => void
 * }} - 包含调度任务、在特定时间执行任务和取消任务的方法。
 *
 * @example
 * const scheduler = taskScheduler();
 * const task = () => console.log('Task executed');
 * scheduler.schedule(task, 1000); // 每秒执行一次
 * scheduler.scheduleAt(task, new Date(Date.now() + 5000)); // 5秒后执行一次
 * scheduler.cancel(task); // 取消任务
 */
export { taskScheduler } from './taskScheduler';
