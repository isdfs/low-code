/**
 * 检测和请求浏览器权限。
 *
 * 该方法用于检测浏览器中的权限状态，并可以请求用户授予特定权限。
 *
 * @param {string} permissionName - 要检测的权限名称，如 'geolocation', 'notifications', 'camera' 等。
 * @returns {Promise<PermissionStatus>} 返回一个 Promise，解析为权限状态对象。
 *
 * @example
 * ```
 * checkPermission('geolocation')
 *   .then(status => {
 *     console.log(`地理位置权限状态: ${status.state}`);
 *   })
 *   .catch(error => {
 *     console.error('无法检测权限状态:', error);
 *   });
 *
 * requestPermission('notifications')
 *   .then(status => {
 *     console.log(`通知权限状态: ${status.state}`);
 *   })
 *   .catch(error => {
 *     console.error('请求权限失败:', error);
 *   });
 * ```
 */
export declare function checkPermission(permissionName: string): Promise<PermissionStatus>;
/**
* 请求浏览器权限。
*
* 该方法用于请求用户授予特定的浏览器权限。
*
* @param {string} permissionName - 要请求的权限名称，如 'geolocation', 'notifications', 'camera' 等。
* @returns {Promise<PermissionStatus>} 返回一个 Promise，解析为权限状态对象。
*
* @example
* ```
* requestPermission('notifications')
*   .then(status => {
*     console.log(`通知权限状态: ${status.state}`);
*   })
*   .catch(error => {
*     console.error('请求权限失败:', error);
*   });
* ```
*/
export declare function requestPermission(permissionName: string): Promise<PermissionStatus>;
