/**
 * 滚动事件埋点模块。
 *
 * 该模块用于捕获页面滚动事件，并将滚动深度数据发送到指定的服务器。
 *
 * @param {string} [url='/track'] - 接收滚动事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackScrollDepth();
 * ```
 */
/**
 * 捕获滚动深度并发送数据。
 *
 * @param {string} [url='/track'] - 接收滚动事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackScrollDepth();
 * ```
 */
export declare function trackScrollDepth(url?: string): void;
