/**
 * 深度合并多个对象。
 *
 * @param target - 目标对象。
 * @param sources - 要合并的源对象。
 * @returns 合并后的目标对象。
 */
export declare function merge<T extends object>(target: T, ...sources: Partial<T>[]): T;
/**
 * 检查一个值是否为对象。
 *
 * @param item - 要检查的值。
 * @returns 如果是对象则返回 true，否则返回 false。
 */
export declare function isObject(item: any): item is object;
