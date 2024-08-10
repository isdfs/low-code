/**
 * 监听网络速度变化。
 * 
 * 该方法用于检测并监听网络速度的变化，如在用户切换网络环境（WiFi、4G 等）时自动检测当前网络类型。
 * 
 * @returns {void}
 * 
 * @example
 * ```
 * monitorNetworkSpeed(speed => {
 *   console.log('当前网络速度:', speed);
 * });
 * ```
 */
export function monitorNetworkSpeed(callback: (speed: string) => void): void {
  function updateNetworkSpeed() {
      const connection = (navigator as any).connection || {};
      const speed = connection.effectiveType || 'unknown';
      callback(speed);
  }

  updateNetworkSpeed();
  (navigator as any).connection?.addEventListener('change', updateNetworkSpeed);
}
