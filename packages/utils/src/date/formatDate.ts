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
export function formatDate(date: Date, format: string): string {
  const map: { [key: string]: string } = {
      'YYYY': date.getFullYear().toString(),
      'MM': ('0' + (date.getMonth() + 1)).slice(-2),
      'DD': ('0' + date.getDate()).slice(-2),
      'HH': ('0' + date.getHours()).slice(-2),
      'mm': ('0' + date.getMinutes()).slice(-2),
      'ss': ('0' + date.getSeconds()).slice(-2),
  };

  return format.replace(/YYYY|MM|DD|HH|mm|ss/gi, matched => map[matched]);
}
