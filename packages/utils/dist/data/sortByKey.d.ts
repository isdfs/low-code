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
export declare function sortByKey<T>(array: T[], key: keyof T, ascending?: boolean): T[];
