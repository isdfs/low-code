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
export declare function mergeAndDeduplicate<T>(arr1: T[], arr2: T[]): T[];
