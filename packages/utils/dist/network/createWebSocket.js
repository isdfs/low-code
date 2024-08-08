"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWebSocket = void 0;
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
function createWebSocket(url, eventHandlers) {
    var ws = new WebSocket(url);
    ws.addEventListener('open', function () { return eventHandlers.open && eventHandlers.open(); });
    ws.addEventListener('message', function (event) { return eventHandlers.message && eventHandlers.message(event.data); });
    ws.addEventListener('close', function () { return eventHandlers.close && eventHandlers.close(); });
    ws.addEventListener('error', function (event) { return eventHandlers.error && eventHandlers.error(event); });
    function send(message) {
        if (ws.readyState === WebSocket.OPEN) {
            ws.send(JSON.stringify(message));
        }
        else {
            console.error('WebSocket is not open.');
        }
    }
    function close() {
        ws.close();
    }
    return {
        send: send,
        close: close,
    };
}
exports.createWebSocket = createWebSocket;
