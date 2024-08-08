/**
 * 检测用户的设备类型（桌面、平板、手机）。
 *
 * @returns {'desktop' | 'tablet' | 'mobile'} 返回检测到的设备类型。
 *
 * @example
 * const deviceType = detectDevice();
 * console.log(deviceType); // 'mobile'（根据实际设备返回）
 */
export function detectDevice(): 'desktop' | 'tablet' | 'mobile' {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/mobile|android|iphone|ipad|phone/i.test(userAgent)) {
      if (/ipad|tablet/i.test(userAgent)) {
          return 'tablet';
      }
      return 'mobile';
  }
  return 'desktop';
}
