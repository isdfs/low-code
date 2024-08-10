/**
 * 将一组异步任务分批执行，以控制并发量。
 * @param tasks - 包含异步函数的数组。
 * @param batchSize - 每批次执行的任务数。
 * @returns 返回一个Promise数组，包含所有任务的结果。
 */
export declare function batchProcess<T>(tasks: (() => Promise<T>)[], batchSize: number): Promise<T[]>;
