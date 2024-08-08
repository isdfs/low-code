// src/async/asyncQueue.ts

/**
 * 异步队列，用于控制异步操作的顺序执行
 */
export class AsyncQueue {
  private queue: (() => Promise<void>)[] = [];
  private running: boolean = false;

  /**
   * 将任务添加到队列中
   *
   * @param {() => Promise<void>} task - 异步任务
   */
  enqueue(task: () => Promise<void>) {
      this.queue.push(task);
      this.run();
  }

  /**
   * 执行队列中的任务
   */
  private async run() {
      if (this.running) return;

      this.running = true;
      while (this.queue.length > 0) {
          const task = this.queue.shift();
          if (task) await task();
      }
      this.running = false;
  }
}

// 使用示例
const queue = new AsyncQueue();

queue.enqueue(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Task 1 completed');
});

queue.enqueue(async () => {
  console.log('Task 2 completed');
});
