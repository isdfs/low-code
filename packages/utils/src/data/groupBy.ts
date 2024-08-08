// src/data/groupBy.ts

/**
 * 根据指定的键对数组进行分组
 *
 * @template T
 * @param {T[]} array - 输入数组
 * @param {(item: T) => string} keyGetter - 用于获取分组键的函数
 * @returns {Record<string, T[]>} 分组后的对象
 *
 * @example
 * const data = [
 *   { category: 'fruit', name: 'apple' },
 *   { category: 'fruit', name: 'banana' },
 *   { category: 'vegetable', name: 'carrot' },
 * ];
 * const grouped = groupBy(data, item => item.category);
 * console.log(grouped); 
 * // {
 * //   fruit: [{ category: 'fruit', name: 'apple' }, { category: 'fruit', name: 'banana' }],
 * //   vegetable: [{ category: 'vegetable', name: 'carrot' }]
 * // }
 */
export function groupBy<T>(array: T[], keyGetter: (item: T) => string): Record<string, T[]> {
  return array.reduce((result, item) => {
      const key = keyGetter(item);
      if (!result[key]) {
          result[key] = [];
      }
      result[key].push(item);
      return result;
  }, {} as Record<string, T[]>);
}
