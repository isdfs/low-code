/**
 * 将嵌套的数组展平成一个单一数组。
 * 
 * @param array - 要展平的数组。
 * @returns 展平后的数组。
 */
export function flatten<T>(array: any[]): T[] {
  return array.reduce((acc, val) => Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), []);
}
