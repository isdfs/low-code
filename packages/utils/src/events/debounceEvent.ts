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
export function debounceEvent(callback: (...args: any[]) => void, delay: number) {
  let timeoutId: number | null = null;

  return function(this: any, ...args: any[]) {
      if (timeoutId !== null) {
          clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
          callback.apply(this, args);
      }, delay) as unknown as number;
  };
}
