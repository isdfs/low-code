/**
 * 页面访问埋点模块。
 * 
 * 该模块在页面加载时自动捕获页面访问事件，并将数据发送到指定的服务器。
 * 
 * @param {string} [url='/track'] - 接收页面访问数据的服务器URL，默认为 '/track'。
 * @returns {void}
 * 
 * @example
 * ```
 * trackPageView('/home');
 * ```
 */

/**
 * 发送页面访问数据到指定的服务器。
 * 
 * @param {string} pagePath - 当前页面的路径。
 * @param {string} [url='/track'] - 接收页面访问数据的服务器URL，默认为 '/track'。
 * @returns {void}
 * 
 * @example
 * ```
 * trackPageView('/home');
 * ```
 */
export function trackPageView(pagePath: string, url: string = '/track'): void {
  const data = {
      event: 'page_view',
      page: pagePath,
      timestamp: new Date().toISOString(),
  };

  navigator.sendBeacon(url, JSON.stringify(data));
}
