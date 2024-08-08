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
export declare function taskScheduler(): {
    schedule: (task: () => void, interval: number) => void;
    scheduleAt: (task: () => void, date: Date) => void;
    cancel: (task: () => void) => void;
};
