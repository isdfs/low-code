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
export declare function aggregateBy<T, K extends string | number, V>(array: T[], keyFn: (item: T) => K, aggregateFn: (group: T[]) => V): Record<K, V>;
