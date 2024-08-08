"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = void 0;
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
function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
exports.addDays = addDays;
