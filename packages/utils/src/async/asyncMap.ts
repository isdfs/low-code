/**
 * 异步映射数组中的每个元素，返回新数组。
 * @param array - 要映射的数组。
 * @param callback - 异步处理每个元素的回调函数。
 * @returns 包含映射结果的新数组。
 */
export async function asyncMap<T, U>(array: T[], callback: (item: T, index: number, array: T[]) => Promise<U>): Promise<U[]> {
  const result: U[] = [];
  for (let i = 0; i < array.length; i++) {
      result.push(await callback(array[i], i, array));
  }
  return result;
}
