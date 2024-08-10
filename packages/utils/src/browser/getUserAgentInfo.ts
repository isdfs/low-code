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
export function getUserAgentInfo(): { browser: string; version: string; os: string } {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let version = 'Unknown';
  let os = 'Unknown';

  if (/MSIE|Trident/.test(ua)) {
      browser = 'Internet Explorer';
      version = ua.match(/(MSIE |rv:)(\d+\.\d+)/)?.[2] || 'Unknown';
  } else if (/Chrome/.test(ua) && /Google Inc/.test(navigator.vendor)) {
      browser = 'Chrome';
      version = ua.match(/Chrome\/(\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (/Safari/.test(ua) && /Apple Computer/.test(navigator.vendor)) {
      browser = 'Safari';
      version = ua.match(/Version\/(\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (/Firefox/.test(ua)) {
      browser = 'Firefox';
      version = ua.match(/Firefox\/(\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (/Edge/.test(ua)) {
      browser = 'Edge';
      version = ua.match(/Edge\/(\d+\.\d+)/)?.[1] || 'Unknown';
  }

  if (/Windows NT/.test(ua)) {
      os = 'Windows';
  } else if (/Mac OS X/.test(ua)) {
      os = 'MacOS';
  } else if (/Linux/.test(ua)) {
      os = 'Linux';
  } else if (/Android/.test(ua)) {
      os = 'Android';
  } else if (/like Mac OS X/.test(ua)) {
      os = 'iOS';
  }

  return { browser, version, os };
}
