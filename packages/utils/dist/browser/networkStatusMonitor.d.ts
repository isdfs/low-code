/**
 * 浏览器网络状态监控模块，提供网络状态变化的监控和事件处理。
 * @module NetworkStatusMonitor
 */
declare type NetworkStatus = 'online' | 'offline' | 'slow';
interface NetworkStatusHandler {
    handleStatusChange(status: NetworkStatus): void;
}
declare class NetworkStatusMonitor {
    private handler;
    constructor(handler?: NetworkStatusHandler);
    private init;
    private checkInitialStatus;
}
declare const networkStatusMonitor: NetworkStatusMonitor;
export default networkStatusMonitor;
