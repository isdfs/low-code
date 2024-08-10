/**
 * 获取浏览器地理位置。
 * 
 * 该方法使用浏览器的 Geolocation API 获取当前设备的地理位置信息。
 * 
 * @returns {Promise<GeolocationPosition>} 返回一个 Promise，解析为包含地理位置数据的对象。
 * 
 * @example
 * ```
 * getCurrentPosition()
 *   .then(position => {
 *     console.log('当前位置信息:', position);
 *   })
 *   .catch(error => {
 *     console.error('获取地理位置失败:', error);
 *   });
 * ```
 */
export function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
          reject(new Error('Geolocation is not supported by this browser.'));
      } else {
          navigator.geolocation.getCurrentPosition(resolve, reject);
      }
  });
}
