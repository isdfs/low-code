/**
 * 将日期格式化为指定的字符串格式。
 *
 * @param {Date} date - 要格式化的日期对象。
 * @param {string} format - 格式字符串，例如 "YYYY-MM-DD"。
 * @returns {string} 格式化后的日期字符串。
 *
 * @example
 * const formattedDate = formatDate(new Date(), 'YYYY-MM-DD');
 * console.log(formattedDate); // 例如：2024-08-09
 */
export declare function formatDate(date: Date, format: string): string;
