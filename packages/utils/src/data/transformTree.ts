/**
 * 将平铺的数据结构转换为树结构。
 *
 * @template T - 原始数据的类型。
 * @template K - 数据键的类型。
 * @param {T[]} items - 原始平铺数据的数组。
 * @param {K} idKey - 标识每个项唯一性的键。
 * @param {K} parentKey - 标识父级项的键。
 * @returns {T[]} 转换后的树结构数据。
 *
 * @example
 * const items = [
 *   { id: 1, parentId: null, name: 'Root' },
 *   { id: 2, parentId: 1, name: 'Child 1' },
 *   { id: 3, parentId: 1, name: 'Child 2' }
 * ];
 * const tree = transformTree(items, 'id', 'parentId');
 * console.log(tree); // [{ id: 1, parentId: null, name: 'Root', children: [{ id: 2, parentId: 1, name: 'Child 1' }, { id: 3, parentId: 1, name: 'Child 2' }] }]
 */
export function transformTree<T, K extends keyof T>(items: T[], idKey: K, parentKey: K): T[] {
  const itemMap: Record<string | number, T & { children?: T[] }> = {};
  const result: T[] = [];

  items.forEach(item => {
      itemMap[item[idKey] as any] = { ...item, children: [] };
  });

  items.forEach(item => {
      const parentId = item[parentKey];
      if (parentId === null || parentId === undefined) {
          result.push(itemMap[item[idKey] as any]);
      } else {
          const parentItem = itemMap[parentId as any];
          if (parentItem) {
              parentItem.children!.push(itemMap[item[idKey] as any]);
          }
      }
  });

  return result;
}
