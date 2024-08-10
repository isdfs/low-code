"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monitorNetworkSpeed = void 0;
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
function monitorNetworkSpeed(callback) {
    var _a;
    function updateNetworkSpeed() {
        var connection = navigator.connection || {};
        var speed = connection.effectiveType || 'unknown';
        callback(speed);
    }
    updateNetworkSpeed();
    (_a = navigator.connection) === null || _a === void 0 ? void 0 : _a.addEventListener('change', updateNetworkSpeed);
}
exports.monitorNetworkSpeed = monitorNetworkSpeed;
