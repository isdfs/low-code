/**
 * 递归地冻结对象，防止其被修改。
 * @param obj - 要冻结的对象。
 * @returns 返回被冻结的对象。
 */
export declare function deepFreeze<T extends object>(obj: T): T;
