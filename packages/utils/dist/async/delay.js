"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
/**
 * 延迟执行操作。
 * @param ms - 延迟的时间，单位为毫秒。
 * @returns 返回一个Promise，等待指定时间后解决。
 */
function delay(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
exports.delay = delay;
