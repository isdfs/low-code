/**
 * 事件埋点模块。
 *
 * 该模块提供了捕获用户事件（如点击、表单提交等）的功能，并将事件数据发送到指定的服务器。
 *
 * @example
 * ```
 * trackEvent('button_click', { buttonId: 'submit-button', page: 'home' });
 * ```
 */
/**
 * 发送事件数据到指定的服务器。
 *
 * @param {string} eventName - 事件名称。
 * @param {Record<string, any>} eventData - 事件关联的详细数据。
 * @param {string} [url='/track'] - 接收事件数据的服务器URL，默认为 '/track'。
 * @returns {void}
 *
 * @example
 * ```
 * trackEvent('button_click', { buttonId: 'submit-button', page: 'home' });
 * ```
 */
export declare function trackEvent(eventName: string, eventData: Record<string, any>, url?: string): void;
