/**
 * 创建并管理一个WebSocket连接。
 *
 * @param {string} url - WebSocket服务器的URL。
 * @param {Record<string, (data: any) => void>} eventHandlers - WebSocket事件的处理程序。
 * @returns {{
*  send: (message: any) => void,
*  close: () => void
* }} - 包含发送消息和关闭连接的方法。
*
* @example
* const ws = createWebSocket('ws://example.com/socket', {
*   open: () => console.log('WebSocket connection opened'),
*   message: (data) => console.log('Received:', data),
*   close: () => console.log('WebSocket connection closed'),
*   error: (error) => console.error('WebSocket error:', error)
* });
* ws.send({ action: 'subscribe', channel: 'updates' });
*/
export declare function createWebSocket(url: string, eventHandlers: Record<string, (data: any) => void> | any): {
    send: (message: any) => void;
    close: () => void;
};
