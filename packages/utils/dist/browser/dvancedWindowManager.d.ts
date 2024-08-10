/**
 * 高级窗口管理模块，支持多个窗口或标签页之间的数据通信和同步。
 * @module AdvancedWindowManager
 */
export interface WindowMessage {
    type: string;
    data: any;
}
declare class AdvancedWindowManager {
    private channel;
    constructor(channelName?: string);
    /**
     * 初始化消息监听器。
     */
    private initMessageListener;
    /**
     * 发送消息到所有其他窗口。
     * @param {WindowMessage} message - 要发送的消息对象。
     */
    sendMessage(message: WindowMessage): void;
    /**
     * 处理接收到的消息。
     * @param {WindowMessage} message - 接收到的消息对象。
     */
    private handleMessage;
    /**
     * 同步消息到本地存储，用于窗口重新加载时恢复状态。
     * @param {WindowMessage} message - 要同步的消息对象。
     */
    private syncToLocalStorage;
    /**
     * 从本地存储恢复最后的消息。
     * @returns {WindowMessage | null} 恢复的消息对象，若无则返回 null。
     */
    restoreLastMessage(): WindowMessage | null;
}
declare const windowManager: AdvancedWindowManager;
export default windowManager;
