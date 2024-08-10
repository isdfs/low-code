/**
 * 高级浏览器历史管理模块，提供对浏览器历史记录的增强管理功能。
 * @module HistoryManager
 */

interface HistoryState {
  [key: string]: any;
}

class HistoryManager {
  private history: History;

  constructor() {
      this.history = window.history;
  }

  pushState(state: HistoryState, title: string, url?: string): void {
      this.history.pushState(state, title, url);
  }

  replaceState(state: HistoryState, title: string, url?: string): void {
      this.history.replaceState(state, title, url);
  }

  goBack(): void {
      this.history.back();
  }

  goForward(): void {
      this.history.forward();
  }

  getCurrentState(): HistoryState | null {
      return this.history.state;
  }

  listenToPopState(callback: (state: HistoryState | null) => void): void {
      window.addEventListener('popstate', (event) => callback(event.state));
  }

  // 示例：动态修改URL参数
  updateQueryParam(param: string, value: string) {
      const url = new URL(window.location.href);
      url.searchParams.set(param, value);
      this.replaceState(this.getCurrentState(), document.title, url.toString());
  }
}

// 实例化并使用历史管理器
const historyManager = new HistoryManager();
export default historyManager;
