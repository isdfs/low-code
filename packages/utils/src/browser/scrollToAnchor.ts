/**
 * 页面片段导航模块。
 * 
 * 该模块提供了页面内的片段导航功能，可以平滑滚动到指定的锚点位置。
 * 
 * @param {string} anchorId - 目标锚点的ID。
 * @returns {void}
 * 
 * @example
 * ```
 * scrollToAnchor('section-1');
 * ```
 */

/**
 * 滚动到指定的锚点。
 * 
 * @param {string} anchorId - 目标锚点的ID。
 * @returns {void}
 * 
 * @example
 * ```
 * scrollToAnchor('section-1');
 * ```
 */
export function scrollToAnchor(anchorId: string): void {
  const element = document.getElementById(anchorId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  } else {
      console.error(`未找到ID为 ${anchorId} 的锚点`);
  }
}
