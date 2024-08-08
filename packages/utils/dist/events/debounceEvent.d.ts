/**
 * 为事件处理程序添加防抖功能，限制事件处理程序的触发频率。
 *
 * @param {Function} callback - 原始事件处理程序。
 * @param {number} delay - 防抖延迟时间（毫秒）。
 * @returns {Function} 包含防抖功能的新事件处理程序。
 *
 * @example
 * const debouncedClick = debounceEvent(() => {
 *   console.log('Button clicked');
 * }, 300);
 * document.getElementById('myButton')!.addEventListener('click', debouncedClick);
 */
export declare function debounceEvent(callback: (...args: any[]) => void, delay: number): (this: any, ...args: any[]) => void;
