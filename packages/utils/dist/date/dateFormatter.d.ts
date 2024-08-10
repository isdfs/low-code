/**
 * 日期格式化工具模块，提供多种日期和时间格式化函数。
 */
export declare class DateFormatter {
    /**
     * 将日期格式化为YYYY-MM-DD格式。
     * @param date 要格式化的日期对象。
     * @returns 格式化后的日期字符串。
     */
    static formatToDate(date: Date): string;
    /**
     * 将日期格式化为HH:MM:SS格式。
     * @param date 要格式化的日期对象。
     * @returns 格式化后的时间字符串。
     */
    static formatToTime(date: Date): string;
    /**
     * 将日期格式化为自定义格式。
     * 支持的占位符包括:
     * - YYYY: 年份
     * - MM: 月份（带前导零）
     * - DD: 日期（带前导零）
     * - HH: 小时（带前导零）
     * - mm: 分钟（带前导零）
     * - ss: 秒（带前导零）
     *
     * @param date 要格式化的日期对象。
     * @param format 自定义格式字符串。
     * @returns 格式化后的日期字符串。
     */
    static formatCustom(date: Date, format: string): string;
}
/**
 * 使用示例：
 * ```typescript
 * const date = new Date();
 *
 * console.log(DateFormatter.formatToDate(date)); // 输出: 2024-08-10 (根据当前日期)
 * console.log(DateFormatter.formatToTime(date)); // 输出: 14:35:00 (根据当前时间)
 * console.log(DateFormatter.formatCustom(date, 'YYYY/MM/DD HH:mm:ss')); // 输出: 2024/08/10 14:35:00 (根据当前日期和时间)
 * ```
 */
