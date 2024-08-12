/**
 * 点击事件埋点模块。
 *
 * 该模块用于捕获页面上的点击事件，并将点击事件数据发送到指定的服务器。
 *
 * @param {string} selector - 要捕获点击事件的元素选择器。
 * @param {string} [url='/track'] - 接收点击事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackClickEvent('.trackable-button');
 * ```
 */
/**
 * 捕获点击事件并发送数据。
 *
 * @param {string} selector - 要捕获点击事件的元素选择器。
 * @param {string} [url='/track'] - 接收点击事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackClickEvent('.trackable-button');
 * ```
 */
export declare function trackClickEvent(selector: string, url?: string): void;
