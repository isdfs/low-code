"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strategy = void 0;
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
function strategy() {
    var strategies = new Map();
    function addStrategy(name, strategy) {
        strategies.set(name, strategy);
    }
    function execute(name, input) {
        var strategy = strategies.get(name);
        if (!strategy) {
            throw new Error("Strategy '".concat(name, "' not found"));
        }
        return strategy(input);
    }
    return {
        addStrategy: addStrategy,
        execute: execute,
    };
}
exports.strategy = strategy;
