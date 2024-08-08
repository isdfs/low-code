"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLogger = void 0;
/**
 * 日志记录器，用于记录和管理应用程序中的日志信息。
 *
 * @param {string} context - 日志记录器的上下文名称。
 * @returns {{
*   info: (message: string, ...data: any[]) => void,
*   warn: (message: string, ...data: any[]) => void,
*   error: (message: string, ...data: any[]) => void,
*   setLevel: (level: 'info' | 'warn' | 'error') => void
* }} - 包含记录信息、警告和错误日志的方法，以及设置日志级别的方法。
*
* @example
* const logger = createLogger('MyApp');
* logger.info('This is an info message');
* logger.warn('This is a warning message');
* logger.error('This is an error message');
* logger.setLevel('warn');
*/
function createLogger(context) {
    var level = 'info';
    function log(levelName, message) {
        var _a;
        var data = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            data[_i - 2] = arguments[_i];
        }
        (_a = console)[levelName].apply(_a, __spreadArray(["[".concat(context, "] ").concat(message)], data, false));
    }
    function info(message) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (['info'].includes(level))
            log.apply(void 0, __spreadArray(['info', message], data, false));
    }
    function warn(message) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (['info', 'warn'].includes(level))
            log.apply(void 0, __spreadArray(['warn', message], data, false));
    }
    function error(message) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        if (['info', 'warn', 'error'].includes(level))
            log.apply(void 0, __spreadArray(['error', message], data, false));
    }
    function setLevel(newLevel) {
        level = newLevel;
    }
    return {
        info: info,
        warn: warn,
        error: error,
        setLevel: setLevel,
    };
}
exports.createLogger = createLogger;
