/**
 * 为日期对象添加指定天数。
 *
 * @param {Date} date - 要操作的日期对象。
 * @param {number} days - 要添加的天数。
 * @returns {Date} 添加天数后的新日期对象。
 *
 * @example
 * const newDate = addDays(new Date(), 10);
 * console.log(newDate); // 当前日期加上10天
 */
export { addDays } from './addDays';
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
export { formatDate } from './formatDate';
