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
export function taskScheduler() {
   const tasks = new Map<() => void, NodeJS.Timeout | number>();

   function schedule(task: () => void, interval: number) {
       const handle = setInterval(task, interval);
       tasks.set(task, handle);
   }

   function scheduleAt(task: () => void, date: Date) {
       const delay = date.getTime() - Date.now();
       if (delay <= 0) {
           task();
       } else {
           const handle = setTimeout(task, delay);
           tasks.set(task, handle);
       }
   }

   function cancel(task: () => void) {
       const handle = tasks.get(task);
       if (handle) {
           clearInterval(handle as NodeJS.Timeout);
           clearTimeout(handle as NodeJS.Timeout);
           tasks.delete(task);
       }
   }

   return {
       schedule,
       scheduleAt,
       cancel,
   };
}
