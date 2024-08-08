/**
 * 高级策略模式实现，支持动态添加策略、条件执行和策略组合。
 *
 * @template T - 策略输入的类型。
 * @template R - 策略输出的类型。
 * @returns {{
*   addStrategy: (name: string, strategy: (input: T) => R, condition?: (input: T) => boolean) => void,
*   execute: (name: string, input: T) => R
* }} - 包含添加策略、条件执行策略和组合策略的方法。
*
* @example
* const strategies = advancedStrategy<number, string>();
* strategies.addStrategy('double', n => `Double: ${n * 2}`, n => n > 0);
* strategies.addStrategy('square', n => `Square: ${n * n}`);
* console.log(strategies.execute('double', 4)); // 输出: Double: 8
* console.log(strategies.execute('square', -2)); // 输出: Square: 4
*/
export declare function advancedStrategy<T, R>(): {
    addStrategy: (name: string, strategy: (input: T) => R, condition?: ((input: T) => boolean) | undefined) => void;
    execute: (name: string, input: T) => R;
};
