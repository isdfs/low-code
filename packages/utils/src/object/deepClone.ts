/**
 * 深度克隆一个对象。
 * 
 * @param obj - 要克隆的对象。
 * @returns 克隆后的对象。
 */
export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}
