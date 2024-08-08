"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advancedStrategy = void 0;
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
function advancedStrategy() {
    var strategies = new Map();
    function addStrategy(name, strategy, condition) {
        strategies.set(name, { strategy: strategy, condition: condition });
    }
    function execute(name, input) {
        var _a = strategies.get(name) || {}, strategy = _a.strategy, condition = _a.condition;
        if (!strategy) {
            throw new Error("Strategy '".concat(name, "' not found"));
        }
        if (condition && !condition(input)) {
            throw new Error("Condition for strategy '".concat(name, "' not met"));
        }
        return strategy(input);
    }
    return {
        addStrategy: addStrategy,
        execute: execute,
    };
}
exports.advancedStrategy = advancedStrategy;
