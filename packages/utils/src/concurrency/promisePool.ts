/**
 * Promise池模块，用于控制并发的Promise数量。
 */

export class PromisePool<T> {
  private tasks: Array<() => Promise<T>>;
  private concurrency: number;

  /**
   * 创建一个Promise池实例。
   * @param tasks 要执行的Promise任务数组，每个任务是一个返回Promise的函数。
   * @param concurrency 最大并发数量。
   */
  constructor(tasks: Array<() => Promise<T>>, concurrency: number) {
    if (concurrency <= 0) {
      throw new Error('并发数量必须大于0');
    }
    this.tasks = tasks;
    this.concurrency = concurrency;
  }

  /**
   * 开始执行所有任务，并在所有任务完成后返回结果数组。
   * @returns 所有任务的结果数组。
   */
  async start(): Promise<T[]> {
    const results: T[] = [];
    const executing: Promise<void>[] = [];

    for (const task of this.tasks) {
      const p = Promise.resolve().then(() => task()).then(result => {
        results.push(result);
      });
      executing.push(p);

      if (executing.length >= this.concurrency) {
        await Promise.race(executing);
        executing.splice(executing.findIndex(e => e === p), 1);
      }
    }

    await Promise.all(executing);
    return results;
  }
}

/**
 * 使用示例：
 * ```typescript
 * const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
 * 
 * const tasks = [
 *   () => delay(1000).then(() => 'Task 1'),
 *   () => delay(500).then(() => 'Task 2'),
 *   () => delay(2000).then(() => 'Task 3'),
 *   () => delay(1500).then(() => 'Task 4'),
 * ];
 * 
 * const pool = new PromisePool(tasks, 2);
 * pool.start().then(results => {
 *   console.log(results); // 输出: ['Task 1', 'Task 2', 'Task 3', 'Task 4']
 * });
 * ```
 */
