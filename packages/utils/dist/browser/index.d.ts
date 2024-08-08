/**
 * 将文本复制到剪贴板。
 *
 * @param {string} text - 要复制的文本。
 * @returns {Promise<void>} 复制操作的Promise。
 *
 * @example
 * copyToClipboard('Hello World').then(() => console.log('Text copied!'));
 */
export { copyToClipboard } from './copyToClipboard';
/**
 * 检测用户当前使用的浏览器类型及版本。
 * @returns 包含浏览器名称和版本的对象。
 */
export { detectBrowser } from './detectBrowser';
/**
 * 检测用户的设备类型（桌面、平板、手机）。
 *
 * @returns {'desktop' | 'tablet' | 'mobile'} 返回检测到的设备类型。
 *
 * @example
 * const deviceType = detectDevice();
 * console.log(deviceType); // 'mobile'（根据实际设备返回）
 */
export { detectDevice } from './detectDevice';
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
export { getQueryParam } from './getQueryParam';
