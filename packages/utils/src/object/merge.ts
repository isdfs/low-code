/**
 * 深度合并多个对象。
 * 
 * @param target - 目标对象。
 * @param sources - 要合并的源对象。
 * @returns 合并后的目标对象。
 */
export function merge<T extends object>(target: T, ...sources: Partial<T>[]): T {
    if (!sources.length) return target;
    const source = sources.shift();
  
    if (source) {
        for (const key in source) {
            if (source.hasOwnProperty(key)) {
                const value = source[key as keyof T];
                if (isObject(value)) {
                    if (!target[key as keyof T]) Object.assign(target, { [key]: {} });
                    merge(target[key as keyof T] as unknown as object, value);
                } else {
                    Object.assign(target, { [key]: value });
                }
            }
        }
    }
  
    return merge(target, ...sources);
  }
  
  /**
   * 检查一个值是否为对象。
   * 
   * @param item - 要检查的值。
   * @returns 如果是对象则返回 true，否则返回 false。
   */
  export function isObject(item: any): item is object {
    return item && typeof item === 'object' && !Array.isArray(item);
  }
  