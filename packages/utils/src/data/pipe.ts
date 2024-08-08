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
export function pipe<T>(...fns: Array<(arg: T) => T>): (initialValue: T) => T {
  return (initialValue: T) => fns.reduce((acc, fn) => fn(acc), initialValue);
}
