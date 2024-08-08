"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectDevice = void 0;
/**
 * 检测用户的设备类型（桌面、平板、手机）。
 *
 * @returns {'desktop' | 'tablet' | 'mobile'} 返回检测到的设备类型。
 *
 * @example
 * const deviceType = detectDevice();
 * console.log(deviceType); // 'mobile'（根据实际设备返回）
 */
function detectDevice() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
        if (/ipad|tablet/i.test(userAgent)) {
            return 'tablet';
        }
        return 'mobile';
    }
    return 'desktop';
}
exports.detectDevice = detectDevice;
