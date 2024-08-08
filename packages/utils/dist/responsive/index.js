"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBreakpoints = void 0;
/**
 * 响应式断点工具，用于检测当前窗口大小是否符合指定的断点。
 *
 * @param {Record<string, number>} breakpoints - 断点配置，键为断点名称，值为宽度阈值。
 * @returns {{
 *   match: (breakpoint: string) => boolean,
 *   onChange: (callback: () => void) => void
 * }} - 包含匹配断点和窗口大小变化时触发回调的方法。
 *
 * @example
 * const responsive = createBreakpoints({ mobile: 480, tablet: 768, desktop: 1024 });
 * console.log(responsive.match('mobile')); // true 或 false
 * responsive.onChange(() => console.log('Viewport size changed'));
 */
var breakpoints_1 = require("./breakpoints");
Object.defineProperty(exports, "createBreakpoints", { enumerable: true, get: function () { return breakpoints_1.createBreakpoints; } });
