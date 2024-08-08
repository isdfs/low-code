/**
 * 检测用户的设备类型（桌面、平板、手机）。
 *
 * @returns {'desktop' | 'tablet' | 'mobile'} 返回检测到的设备类型。
 *
 * @example
 * const deviceType = detectDevice();
 * console.log(deviceType); // 'mobile'（根据实际设备返回）
 */
export declare function detectDevice(): 'desktop' | 'tablet' | 'mobile';
