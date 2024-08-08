"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskScheduler = void 0;
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
function taskScheduler() {
    var tasks = new Map();
    function schedule(task, interval) {
        var handle = setInterval(task, interval);
        tasks.set(task, handle);
    }
    function scheduleAt(task, date) {
        var delay = date.getTime() - Date.now();
        if (delay <= 0) {
            task();
        }
        else {
            var handle = setTimeout(task, delay);
            tasks.set(task, handle);
        }
    }
    function cancel(task) {
        var handle = tasks.get(task);
        if (handle) {
            clearInterval(handle);
            clearTimeout(handle);
            tasks.delete(task);
        }
    }
    return {
        schedule: schedule,
        scheduleAt: scheduleAt,
        cancel: cancel,
    };
}
exports.taskScheduler = taskScheduler;
