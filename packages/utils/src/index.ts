// src/index.ts

/**
 * 检查一个值是否为数字
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是数字则返回 true，否则返回 false
 */
export function isNumber(value: any): boolean {
  return typeof value === 'number' && !isNaN(value);
}

/**
 * 将字符串的首字母大写
 * @param {string} str - 要转换的字符串
 * @returns {string} - 首字母大写后的字符串
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 防抖函数
 * @param {Function} func - 要防抖的函数
 * @param {number} wait - 延迟时间，单位为毫秒
 * @returns {Function} - 防抖后的函数
 */
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...args: Parameters<T>): void {
    const later = function(this: any) {
      clearTimeout(timeout);
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
