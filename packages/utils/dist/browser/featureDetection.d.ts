/**
 * 检测浏览器特性支持。
 *
 * 该方法用于检测浏览器是否支持指定的 API 或特性，可以帮助开发者实现功能降级。
 *
 * @param {string} feature - 要检测的特性名称，如 'serviceWorker', 'localStorage', 'WebGL' 等。
 * @returns {boolean} 若浏览器支持该特性，则返回 true，否则返回 false。
 *
 * @example
 * ```
 * if (isFeatureSupported('serviceWorker')) {
 *   console.log('浏览器支持 Service Worker');
 * } else {
 *   console.log('浏览器不支持 Service Worker');
 * }
 * ```
 */
export declare function isFeatureSupported(feature: string): boolean;
