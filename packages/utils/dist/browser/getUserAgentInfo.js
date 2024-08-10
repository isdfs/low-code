"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserAgentInfo = void 0;
/**
 * 获取当前浏览器的用户代理信息。
 *
 * 该方法用于解析浏览器的用户代理字符串，提取出浏览器名称、版本号以及操作系统信息。
 *
 * @returns {object} 包含浏览器名称、版本号和操作系统信息的对象。
 *
 * @example
 * ```
 * const userAgentInfo = getUserAgentInfo();
 * console.log(userAgentInfo.browser);  // 输出浏览器名称，如 'Chrome'
 * console.log(userAgentInfo.version);  // 输出浏览器版本号，如 '91.0.4472.124'
 * console.log(userAgentInfo.os);       // 输出操作系统，如 'Windows'
 * ```
 */
function getUserAgentInfo() {
    var _a, _b, _c, _d, _e;
    var ua = navigator.userAgent;
    var browser = 'Unknown';
    var version = 'Unknown';
    var os = 'Unknown';
    if (/MSIE|Trident/.test(ua)) {
        browser = 'Internet Explorer';
        version = ((_a = ua.match(/(MSIE |rv:)(\d+\.\d+)/)) === null || _a === void 0 ? void 0 : _a[2]) || 'Unknown';
    }
    else if (/Chrome/.test(ua) && /Google Inc/.test(navigator.vendor)) {
        browser = 'Chrome';
        version = ((_b = ua.match(/Chrome\/(\d+\.\d+)/)) === null || _b === void 0 ? void 0 : _b[1]) || 'Unknown';
    }
    else if (/Safari/.test(ua) && /Apple Computer/.test(navigator.vendor)) {
        browser = 'Safari';
        version = ((_c = ua.match(/Version\/(\d+\.\d+)/)) === null || _c === void 0 ? void 0 : _c[1]) || 'Unknown';
    }
    else if (/Firefox/.test(ua)) {
        browser = 'Firefox';
        version = ((_d = ua.match(/Firefox\/(\d+\.\d+)/)) === null || _d === void 0 ? void 0 : _d[1]) || 'Unknown';
    }
    else if (/Edge/.test(ua)) {
        browser = 'Edge';
        version = ((_e = ua.match(/Edge\/(\d+\.\d+)/)) === null || _e === void 0 ? void 0 : _e[1]) || 'Unknown';
    }
    if (/Windows NT/.test(ua)) {
        os = 'Windows';
    }
    else if (/Mac OS X/.test(ua)) {
        os = 'MacOS';
    }
    else if (/Linux/.test(ua)) {
        os = 'Linux';
    }
    else if (/Android/.test(ua)) {
        os = 'Android';
    }
    else if (/like Mac OS X/.test(ua)) {
        os = 'iOS';
    }
    return { browser: browser, version: version, os: os };
}
exports.getUserAgentInfo = getUserAgentInfo;
