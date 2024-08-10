"use strict";
/**
 * 日期格式化工具模块，提供多种日期和时间格式化函数。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateFormatter = void 0;
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    /**
     * 将日期格式化为YYYY-MM-DD格式。
     * @param date 要格式化的日期对象。
     * @returns 格式化后的日期字符串。
     */
    DateFormatter.formatToDate = function (date) {
        var year = date.getFullYear();
        var month = String(date.getMonth() + 1).padStart(2, '0');
        var day = String(date.getDate()).padStart(2, '0');
        return "".concat(year, "-").concat(month, "-").concat(day);
    };
    /**
     * 将日期格式化为HH:MM:SS格式。
     * @param date 要格式化的日期对象。
     * @returns 格式化后的时间字符串。
     */
    DateFormatter.formatToTime = function (date) {
        var hours = String(date.getHours()).padStart(2, '0');
        var minutes = String(date.getMinutes()).padStart(2, '0');
        var seconds = String(date.getSeconds()).padStart(2, '0');
        return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    };
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
    DateFormatter.formatCustom = function (date, format) {
        var replacements = {
            'YYYY': String(date.getFullYear()),
            'MM': String(date.getMonth() + 1).padStart(2, '0'),
            'DD': String(date.getDate()).padStart(2, '0'),
            'HH': String(date.getHours()).padStart(2, '0'),
            'mm': String(date.getMinutes()).padStart(2, '0'),
            'ss': String(date.getSeconds()).padStart(2, '0'),
        };
        return format.replace(/YYYY|MM|DD|HH|mm|ss/g, function (match) { return replacements[match]; });
    };
    return DateFormatter;
}());
exports.DateFormatter = DateFormatter;
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
