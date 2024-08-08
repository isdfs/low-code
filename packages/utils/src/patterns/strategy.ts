/**
 * 策略模式实现，用于根据不同策略执行不同逻辑。
 *
 * @template T - 策略输入的类型。
 * @template R - 策略输出的类型。
 * @returns {{
*   addStrategy: (name: string, strategy: (input: T) => R) => void,
*   execute: (name: string, input: T) => R
* }} - 包含添加策略和执行策略的方法。
*
* @example
* const strategies = strategy<number, string>();
* strategies.addStrategy('double', n => `Double: ${n * 2}`);
* strategies.addStrategy('square', n => `Square: ${n * n}`);
* console.log(strategies.execute('double', 4)); // 输出: Double: 8
* console.log(strategies.execute('square', 4)); // 输出: Square: 16
*/
export function strategy<T, R>() {
   const strategies = new Map<string, (input: T) => R>();

   function addStrategy(name: string, strategy: (input: T) => R) {
       strategies.set(name, strategy);
   }

   function execute(name: string, input: T): R {
       const strategy = strategies.get(name);
       if (!strategy) {
           throw new Error(`Strategy '${name}' not found`);
       }
       return strategy(input);
   }

   return {
       addStrategy,
       execute,
   };
}
