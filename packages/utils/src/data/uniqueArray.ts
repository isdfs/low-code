/**
 * 从数组中移除重复项，返回去重后的新数组。
 * @param array - 要去重的数组。
 * @returns 返回去重后的数组。
 */
export function uniqueArray<T>(array: T[]): T[] {
  return Array.from(new Set(array));
}
