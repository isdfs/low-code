/**
 * 节流函数，限制函数在一定时间内只能执行一次。
 *
 * @param {Function} func - 需要节流的函数。
 * @param {number} limit - 时间限制（毫秒）。
 * @returns {Function} 节流后的函数。
 *
 * @example
 * const throttledFunc = throttle(() => { console.log('Called'); }, 1000);
 * window.addEventListener('resize', throttledFunc);
 */
export function throttle(func: (...args: any[]) => void, limit: number): (...args: any[]) => void {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
      if (!inThrottle) {
          func.apply(this, args);
          inThrottle = true;
          setTimeout(() => inThrottle = false, limit);
      }
  }
}
