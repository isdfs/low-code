/**
 * 根据对象数组中的指定键，将对象分组。
 * @param array - 要分组的对象数组。
 * @param key - 用于分组的键。
 * @returns 返回一个对象，其中键是分组键，值是对应的对象数组。
 */
export function groupByKey<T>(array: T[], key: keyof T): Record<string, T[]> {
  return array.reduce((result, currentValue) => {
      const groupKey = String(currentValue[key]);
      if (!result[groupKey]) {
          result[groupKey] = [];
      }
      result[groupKey].push(currentValue);
      return result;
  }, {} as Record<string, T[]>);
}
