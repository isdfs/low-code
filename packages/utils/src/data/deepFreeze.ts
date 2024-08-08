/**
 * 递归地冻结对象，防止其被修改。
 * @param obj - 要冻结的对象。
 * @returns 返回被冻结的对象。
 */
export function deepFreeze<T extends object>(obj: T): T {
  Object.freeze(obj);

  Object.keys(obj).forEach((key) => {
      const prop = (obj as Record<string, any>)[key];
      if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
          deepFreeze(prop);
      }
  });

  return obj;
}
