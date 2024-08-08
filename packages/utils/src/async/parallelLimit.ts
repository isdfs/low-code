/**
 * 并行执行异步任务，并限制同时执行的任务数。
 * @param tasks - 一个包含异步函数的数组。
 * @param limit - 同时执行的最大任务数。
 * @returns 返回一个Promise数组，包含所有任务的结果。
 */
export async function parallelLimit<T>(tasks: (() => Promise<T>)[], limit: number): Promise<T[]> {
  const results: T[] = [];
  const executing: Promise<void>[] = [];

  for (const task of tasks) {
      const p: any = task().then(result => results.push(result));
      executing.push(p);

      if (executing.length >= limit) {
          await Promise.race(executing);
          executing.splice(executing.findIndex((e: any) => e === p), 1);
      }
  }

  await Promise.all(executing);
  return results;
}
