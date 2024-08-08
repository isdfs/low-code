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
export declare function paginate<T>(data: T[], pageSize: number, pageNumber: number): T[];
