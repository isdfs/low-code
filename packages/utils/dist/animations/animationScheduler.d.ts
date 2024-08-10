/**
 * SchedulerTask 定义了一个调度任务。
 * @param condition - 决定任务是否执行的条件函数。
 * @param animation - 要执行的 KeyframeAnimation 实例。
 */
interface SchedulerTask {
    condition: () => boolean;
    animation: KeyframeAnimation;
}
/**
* AnimationScheduler 用于管理和调度复杂的动画任务。
*/
declare class AnimationScheduler {
    private tasks;
    private intervalId;
    private checkInterval;
    constructor(checkInterval?: number);
    /**
     * addTask 方法用于向调度器添加一个动画任务。
     * @param condition - 判断是否执行任务的条件函数。
     * @param animation - 要执行的 KeyframeAnimation 实例。
     */
    addTask(condition: () => boolean, animation: KeyframeAnimation): void;
    /**
     * start 方法开始调度任务。
     */
    start(): void;
    /**
     * stop 方法停止调度任务。
     */
    stop(): void;
    /**
     * checkTasks 方法检查并执行符合条件的任务。
     */
    private checkTasks;
}
/**
* 使用示例：
* const scheduler = new AnimationScheduler(200);
* const anim = new KeyframeAnimation(element, { duration: 1000 });
* scheduler.addTask(() => document.querySelector('#startButton')?.classList.contains('active'), anim);
* scheduler.start(); // 当 startButton 具有 active 类时启动动画
*/
