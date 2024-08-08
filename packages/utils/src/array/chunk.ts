/**
 * 将数组按指定大小分块。
 * 
 * @param array - 要分块的数组。
 * @param size - 每块的大小。
 * @returns 分块后的数组。
 */
export function chunk<T>(array: T[], size: number): T[][] {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
}
