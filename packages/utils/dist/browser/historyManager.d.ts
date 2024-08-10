/**
 * 高级浏览器历史管理模块，提供对浏览器历史记录的增强管理功能。
 * @module HistoryManager
 */
interface HistoryState {
    [key: string]: any;
}
declare class HistoryManager {
    private history;
    constructor();
    pushState(state: HistoryState, title: string, url?: string): void;
    replaceState(state: HistoryState, title: string, url?: string): void;
    goBack(): void;
    goForward(): void;
    getCurrentState(): any;
    listenToPopState(callback: (state: HistoryState | null) => void): void;
    updateQueryParam(param: string, value: string): void;
}
declare const historyManager: HistoryManager;
export default historyManager;
