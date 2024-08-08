/**
 * 确保某个函数只被调用一次。
 * @param fn - 要执行的函数。
 * @returns 一个只执行一次的函数。
 */
export declare function once<T extends (...args: any[]) => any>(fn: T): (...args: Parameters<T>) => ReturnType<T> | undefined;
