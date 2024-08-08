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
export function advancedStrategy<T, R>() {
   const strategies = new Map<string, { strategy: (input: T) => R, condition?: (input: T) => boolean }>();

   function addStrategy(name: string, strategy: (input: T) => R, condition?: (input: T) => boolean) {
       strategies.set(name, { strategy, condition });
   }

   function execute(name: string, input: T): R {
       const { strategy, condition } = strategies.get(name) || {};
       if (!strategy) {
           throw new Error(`Strategy '${name}' not found`);
       }
       if (condition && !condition(input)) {
           throw new Error(`Condition for strategy '${name}' not met`);
       }
       return strategy(input);
   }

   return {
       addStrategy,
       execute,
   };
}
