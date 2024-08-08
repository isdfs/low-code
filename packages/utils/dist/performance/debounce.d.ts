/**
 * 防抖函数，在指定时间内没有新的调用时才执行。
 *
 * @param {Function} func - 需要防抖的函数。
 * @param {number} delay - 延迟时间（毫秒）。
 * @returns {Function} 防抖后的函数。
 *
 * @example
 * const debouncedFunc = debounce(() => { console.log('Called'); }, 300);
 * window.addEventListener('scroll', debouncedFunc);
 */
export declare function debounce(func: (...args: any[]) => void, delay: number): (...args: any[]) => void;
