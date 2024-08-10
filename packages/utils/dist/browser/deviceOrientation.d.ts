/**
 * 设备方向检测。
 *
 * 该方法用于监听设备方向的变化，适用于移动设备上的应用，例如方向感应游戏或导航应用。
 *
 * @param {(event: DeviceOrientationEvent) => void} callback - 设备方向变化时的回调函数。
 *
 * @returns {void}
 *
 * @example
 * ```
 * monitorDeviceOrientation(event => {
 *   console.log('Alpha:', event.alpha);
 *   console.log('Beta:', event.beta);
 *   console.log('Gamma:', event.gamma);
 * });
 * ```
 */
export declare function monitorDeviceOrientation(callback: (event: DeviceOrientationEvent) => void): void;
/**
* 停止监听设备方向。
*
* 该方法用于停止设备方向变化的监听，适用于不再需要检测设备方向时。
*
* @param {(event: DeviceOrientationEvent) => void} callback - 用于监听的回调函数。
*
* @returns {void}
*
* @example
* ```
* // 需要传递相同的回调函数引用来取消监听
* monitorDeviceOrientation(myCallback);
* stopDeviceOrientationMonitoring(myCallback);
* ```
*/
export declare function stopDeviceOrientationMonitoring(callback: (event: DeviceOrientationEvent) => void): void;
