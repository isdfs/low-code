/**
 * 高级数据同步模块，用于在多个窗口或标签页之间同步数据，并处理离线数据同步。
 * @module AdvancedDataSynchronizer
 */
export interface SyncOptions {
    channelName?: string;
    autoSync?: boolean;
}
declare class AdvancedDataSynchronizer {
    private channel;
    private autoSync;
    constructor(options?: SyncOptions);
    /**
     * 同步数据到所有窗口或标签页。
     * @param {any} data - 要同步的数据。
     */
    syncData(data: any): void;
    /**
     * 处理接收到的同步数据。
     * @param {any} data - 接收到的数据。
     */
    private handleSync;
    /**
     * 恢复并同步上一次的离线数据。
     */
    restoreLastSync(): void;
}
declare const advancedDataSynchronizer: AdvancedDataSynchronizer;
export default advancedDataSynchronizer;
