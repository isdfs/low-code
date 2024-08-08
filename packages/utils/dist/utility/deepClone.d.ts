/**
 * 深度克隆一个对象或数组。
 *
 * @param {T} obj - 要克隆的对象或数组。
 * @returns {T} 克隆后的新对象或数组。
 *
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * console.log(clone); // { a: 1, b: { c: 2 } }
 */
export declare function deepClone2<T>(obj: T): T;
