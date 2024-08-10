/**
 * 浏览器网络状态监控模块，提供网络状态变化的监控和事件处理。
 * @module NetworkStatusMonitor
 */

type NetworkStatus = 'online' | 'offline' | 'slow';

interface NetworkStatusHandler {
    handleStatusChange(status: NetworkStatus): void;
}

class DefaultNetworkStatusHandler implements NetworkStatusHandler {
    handleStatusChange(status: NetworkStatus): void {
        console.log('Network status changed to:', status);
        // 处理网络状态变化的逻辑
    }
}

class NetworkStatusMonitor {
    private handler: NetworkStatusHandler;

    constructor(handler: NetworkStatusHandler = new DefaultNetworkStatusHandler()) {
        this.handler = handler;
        this.init();
    }

    private init() {
        window.addEventListener('online', () => this.handler.handleStatusChange('online'));
        window.addEventListener('offline', () => this.handler.handleStatusChange('offline'));
        this.checkInitialStatus();
    }

    private checkInitialStatus() {
        if (!navigator.onLine) {
            this.handler.handleStatusChange('offline');
        }
    }
}

// 实例化并使用网络状态监控器
const networkStatusMonitor = new NetworkStatusMonitor();
export default networkStatusMonitor;
