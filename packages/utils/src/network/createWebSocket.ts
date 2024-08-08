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
export function createWebSocket(
   url: string,
   eventHandlers: Record<string, (data: any) => void> | any
) {
   const ws = new WebSocket(url);

   ws.addEventListener('open', () => eventHandlers.open && eventHandlers.open());
   ws.addEventListener('message', (event) => eventHandlers.message && eventHandlers.message(event.data));
   ws.addEventListener('close', () => eventHandlers.close && eventHandlers.close());
   ws.addEventListener('error', (event) => eventHandlers.error && eventHandlers.error(event));

   function send(message: any) {
       if (ws.readyState === WebSocket.OPEN) {
           ws.send(JSON.stringify(message));
       } else {
           console.error('WebSocket is not open.');
       }
   }

   function close() {
       ws.close();
   }

   return {
       send,
       close,
   };
}
