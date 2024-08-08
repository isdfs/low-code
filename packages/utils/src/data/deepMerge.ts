/**
 * 深度合并多个对象。
 *
 * @template T - 对象的类型。
 * @param {...Partial<T>[]} objects - 需要合并的多个对象。
 * @returns {T} 合并后的对象。
 *
 * @example
 * const obj1 = { a: 1, b: { x: 1 } };
 * const obj2 = { b: { y: 2 }, c: 3 };
 * const merged = deepMerge(obj1, obj2);
 * console.log(merged); // { a: 1, b: { x: 1, y: 2 }, c: 3 }
 */
export function deepMerge<T>(...objects: Partial<T>[]): any {
  const isObject = (obj: any): obj is Record<string, any> => obj && typeof obj === 'object';

  return objects.reduce((prev, obj) => {
      Object.keys(obj).forEach(key => {
          const pVal = prev[key as keyof T];
          const oVal = obj[key as keyof T];

          if (Array.isArray(pVal) && Array.isArray(oVal)) {
              (prev[key as keyof T] as unknown) = pVal.concat(...oVal) as unknown as T[keyof T];
          } else if (isObject(pVal) && isObject(oVal)) {
              (prev[key as keyof T] as unknown) = deepMerge(pVal, oVal) as T[keyof T];
          } else {
              (prev[key as keyof T] as unknown) = oVal as T[keyof T];
          }
      });

      return prev;
  }, {} as T);
}
