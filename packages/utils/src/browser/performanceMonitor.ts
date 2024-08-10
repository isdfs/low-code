/**
 * 页面性能监控。
 * 
 * 该模块提供了对页面性能的监控功能，可以获取加载时间、渲染时间等性能指标。
 * 
 * @returns {PerformanceEntry[]} 包含性能数据的数组。
 * 
 * @example
 * ```
 * const metrics = monitorPerformance();
 * metrics.forEach(metric => {
 *   console.log(`${metric.name}: ${metric.startTime}ms`);
 * });
 * ```
 */
export function monitorPerformance(): PerformanceEntry[] {
  return performance.getEntriesByType('navigation');
}

/**
* 获取页面首次绘制时间（First Paint）。
* 
* @returns {number} 首次绘制时间（以毫秒为单位）。
* 
* @example
* ```
* const firstPaintTime = getFirstPaint();
* console.log(`首次绘制时间: ${firstPaintTime}ms`);
* ```
*/
export function getFirstPaint(): number {
  const entries = performance.getEntriesByName('first-paint');
  return entries.length > 0 ? entries[0].startTime : 0;
}

/**
* 获取页面内容加载完成时间（DOMContentLoaded）。
* 
* @returns {number} 内容加载完成时间（以毫秒为单位）。
* 
* @example
* ```
* const domContentLoadedTime = getDOMContentLoadedTime();
* console.log(`内容加载完成时间: ${domContentLoadedTime}ms`);
* ```
*/
export function getDOMContentLoadedTime(): number {
  const entries = performance.getEntriesByType('navigation');
  return entries.length > 0 ? entries[0].domContentLoadedEventEnd : 0;
}
