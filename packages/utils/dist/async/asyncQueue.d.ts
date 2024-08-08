/**
 * 异步队列，用于控制异步操作的顺序执行
 */
export declare class AsyncQueue {
    private queue;
    private running;
    /**
     * 将任务添加到队列中
     *
     * @param {() => Promise<void>} task - 异步任务
     */
    enqueue(task: () => Promise<void>): void;
    /**
     * 执行队列中的任务
     */
    private run;
}
