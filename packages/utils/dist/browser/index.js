"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQueryParam = exports.detectDevice = exports.detectBrowser = exports.copyToClipboard = void 0;
/**
 * 将文本复制到剪贴板。
 *
 * @param {string} text - 要复制的文本。
 * @returns {Promise<void>} 复制操作的Promise。
 *
 * @example
 * copyToClipboard('Hello World').then(() => console.log('Text copied!'));
 */
var copyToClipboard_1 = require("./copyToClipboard");
Object.defineProperty(exports, "copyToClipboard", { enumerable: true, get: function () { return copyToClipboard_1.copyToClipboard; } });
/**
 * 检测用户当前使用的浏览器类型及版本。
 * @returns 包含浏览器名称和版本的对象。
 */
var detectBrowser_1 = require("./detectBrowser");
Object.defineProperty(exports, "detectBrowser", { enumerable: true, get: function () { return detectBrowser_1.detectBrowser; } });
/**
 * 检测用户的设备类型（桌面、平板、手机）。
 *
 * @returns {'desktop' | 'tablet' | 'mobile'} 返回检测到的设备类型。
 *
 * @example
 * const deviceType = detectDevice();
 * console.log(deviceType); // 'mobile'（根据实际设备返回）
 */
var detectDevice_1 = require("./detectDevice");
Object.defineProperty(exports, "detectDevice", { enumerable: true, get: function () { return detectDevice_1.detectDevice; } });
/**
 * 从URL中获取指定的查询参数值。
 *
 * @param {string} paramName - 要获取的查询参数名称。
 * @returns {string | null} 查询参数的值，如果不存在则返回null。
 *
 * @example
 * const value = getQueryParam('token');
 * console.log(value); // 例如：'abc123'
 */
var getQueryParam_1 = require("./getQueryParam");
Object.defineProperty(exports, "getQueryParam", { enumerable: true, get: function () { return getQueryParam_1.getQueryParam; } });
