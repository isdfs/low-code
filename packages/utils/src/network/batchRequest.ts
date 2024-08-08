/**
 * 批量发送网络请求，并在所有请求完成后返回结果。
 *
 * @template T - 请求结果的类型。
 * @param {Array<() => Promise<T>>} requests - 包含请求的Promise数组。
 * @param {number} batchSize - 每批并发执行的请求数量。
 * @returns {Promise<T[]>} 返回包含所有请求结果的Promise。
 *
 * @example
 * const request1 = () => fetch('/api/data1').then(res => res.json());
 * const request2 = () => fetch('/api/data2').then(res => res.json());
 * batchRequest([request1, request2], 1).then(results => console.log(results));
 */
export function batchRequest<T>(requests: Array<() => Promise<T>>, batchSize: number): Promise<T[]> {
  const results: T[] = [];
  
  async function executeBatch(batch: Array<() => Promise<T>>): Promise<void> {
      const batchResults = await Promise.all(batch.map(request => request()));
      results.push(...batchResults);
  }

  async function processBatches(): Promise<void> {
      for (let i = 0; i < requests.length; i += batchSize) {
          const batch = requests.slice(i, i + batchSize);
          await executeBatch(batch);
      }
  }

  return processBatches().then(() => results);
}
