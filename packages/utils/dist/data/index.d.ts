/**
 * 根据指定的键对数组进行聚合处理，并计算每组的汇总数据。
 *
 * @template T - 数组元素的类型。
 * @template K - 聚合键的类型。
 * @template V - 聚合值的类型。
 * @param {T[]} array - 要聚合的数组。
 * @param {(item: T) => K} keyFn - 返回用于分组的键的函数。
 * @param {(group: T[]) => V} aggregateFn - 返回聚合值的函数。
 * @returns {Record<K, V>} 聚合后的结果对象。
 *
 * @example
 * const data = [
 *   { category: 'fruit', quantity: 10 },
 *   { category: 'fruit', quantity: 20 },
 *   { category: 'vegetable', quantity: 15 }
 * ];
 * const aggregated = aggregateBy(data, item => item.category, group => group.reduce((sum, item) => sum + item.quantity, 0));
 * console.log(aggregated); // { fruit: 30, vegetable: 15 }
 */
export { aggregateBy } from './aggregateBy';
/**
 * 防抖 Promise 的执行，限制在指定时间内只执行最后一个请求
 *
 * @param {Function} fn - 返回 Promise 的函数
 * @param {number} wait - 防抖的等待时间 (毫秒)
 * @returns {Function} 返回处理后的函数
 *
 * @example
 * const fetchData = (query) => fetch(`https://api.example.com/search?q=${query}`);
 * const debouncedFetch = debouncePromises(fetchData, 300);
 * debouncedFetch('term').then(response => console.log(response));
 */
export { debouncePromises } from './debouncePromises';
/**
 * 递归地冻结对象，防止其被修改。
 * @param obj - 要冻结的对象。
 * @returns 返回被冻结的对象。
 */
export { deepFreeze } from './deepFreeze';
/**
 * 深度合并多个对象。
 *
 * @template T - 对象的类型。
 * @param {...Partial<T>[]} objects - 需要合并的多个对象。
 * @returns {T} 合并后的对象。
 *
 * @example
 * const obj1 = { a: 1, b: { x: 1 } };
 * const obj2 = { b: { y: 2 }, c: 3 };
 * const merged = deepMerge(obj1, obj2);
 * console.log(merged); // { a: 1, b: { x: 1, y: 2 }, c: 3 }
 */
export { deepMerge } from './deepMerge';
/**
 * 深度合并对象，根据自定义规则处理冲突。
 *
 * @template T - 对象的类型。
 * @param {T[]} objects - 要合并的对象数组。
 * @param {Record<string, (a: any, b: any) => any>} rules - 冲突处理规则映射表，键为对象属性，值为合并函数。
 * @returns {T} 返回合并后的新对象。
 *
 * @example
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 2, b: { d: 3 } };
 * const rules = {
 *   a: (x, y) => x + y,
 *   'b.c': (x, y) => Math.max(x, y)
 * };
 * const merged = deepMergeWithRules([obj1, obj2], rules);
 * console.log(merged); // { a: 3, b: { c: 2, d: 3 } }
 */
export { deepMergeWithRules } from './deepMergeWithRules';
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
export { groupBy } from './groupBy';
/**
 * 合并两个数组并去重
 *
 * @template T
 * @param {T[]} arr1 - 第一个数组
 * @param {T[]} arr2 - 第二个数组
 * @returns {T[]} 合并且去重后的数组
 *
 * @example
 * const array1 = [1, 2, 3];
 * const array2 = [3, 4, 5];
 * const result = mergeAndDeduplicate(array1, array2);
 * console.log(result); // [1, 2, 3, 4, 5]
 */
export { mergeAndDeduplicate } from './mergeAndDeduplicate';
/**
 * 可观察数据流，用于处理和订阅实时数据流。
 *
 * @template T - 数据流中的数据类型。
 * @returns {{
 *   subscribe: (callback: (data: T) => void) => () => void,
 *   next: (data: T) => void,
 *   complete: () => void
 * }} - 包含订阅、发送数据和完成流的方法。
 *
 * @example
 * const stream = observableStream<number>();
 * const unsubscribe = stream.subscribe(data => console.log('Received:', data));
 * stream.next(42); // 输出: Received: 42
 * unsubscribe();
 * stream.next(100); // 不再输出
 * stream.complete();
 */
export { observableStream } from './observableStream';
/**
 * 分页处理函数
 *
 * @template T
 * @param {T[]} data - 输入数据
 * @param {number} pageSize - 每页的大小
 * @param {number} pageNumber - 页码（从1开始）
 * @returns {T[]} 当前页的数据
 *
 * @example
 * const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * const page1 = paginate(data, 3, 1); // [1, 2, 3]
 * const page2 = paginate(data, 3, 2); // [4, 5, 6]
 * const page3 = paginate(data, 3, 3); // [7, 8, 9]
 */
export { paginate } from './paginate';
/**
 * 管道函数，用于将多个函数组合起来按顺序执行。
 *
 * @template T - 初始数据的类型。
 * @param {(...fns: Array<(arg: T) => T>) => T} - 要按顺序执行的函数列表。
 * @returns {(initialValue: T) => T} 返回执行后的最终结果。
 *
 * @example
 * const addOne = (x: number) => x + 1;
 * const double = (x: number) => x * 2;
 * const square = (x: number) => x * x;
 * const result = pipe(addOne, double, square)(2);
 * console.log(result); // 36
 */
export { pipe } from './pipe';
/**
 * 数据快照管理器，用于管理数据的快照和回滚。
 *
 * @template T - 数据类型。
 * @returns {{
 *   takeSnapshot: (data: T) => void,
 *   rollback: () => T | undefined,
 *   clearSnapshots: () => void
 * }} - 包含创建快照、回滚和清除快照的方法。
 *
 * @example
 * const snapshotManager = createSnapshotManager<{ count: number }>();
 * snapshotManager.takeSnapshot({ count: 1 });
 * snapshotManager.takeSnapshot({ count: 2 });
 * console.log(snapshotManager.rollback()); // { count: 2 }
 * console.log(snapshotManager.rollback()); // { count: 1 }
 */
export { createSnapshotManager } from './snapshotManager';
/**
 * 根据对象数组的指定键进行排序。
 *
 * @template T - 数组中对象的类型。
 * @param {T[]} array - 需要排序的对象数组。
 * @param {keyof T} key - 对象中用于排序的键。
 * @param {boolean} [ascending=true] - 是否按升序排序。默认为true。
 * @returns {T[]} 排序后的数组。
 *
 * @example
 * const data = [{ name: 'Alice', age: 25 }, { name: 'Bob', age: 22 }];
 * const sorted = sortByKey(data, 'age');
 * console.log(sorted); // [{ name: 'Bob', age: 22 }, { name: 'Alice', age: 25 }]
 */
export { sortByKey } from './sortByKey';
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
export { transformTree } from './transformTree';
