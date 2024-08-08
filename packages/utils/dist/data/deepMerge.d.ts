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
export declare function deepMerge<T>(...objects: Partial<T>[]): any;
