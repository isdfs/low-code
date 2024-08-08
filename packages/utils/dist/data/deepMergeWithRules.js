"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMergeWithRules = void 0;
/**
 * 深度合并对象，根据自定义规则处理冲突。
 *
 * @template T - 对象的类型。
 * @param {T[]} objects - 要合并的对象数组。
 * @param {Record<string, (a: any, b: any) => any>} rules - 冲突处理规则映射表，键为对象属性，值为合并函数。
 * @returns {T} 返回合并后的新对象。
 *
 * @example
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { a: 2, b: { d: 3 } };
 * const rules = {
 *   a: (x, y) => x + y,
 *   'b.c': (x, y) => Math.max(x, y)
 * };
 * const merged = deepMergeWithRules([obj1, obj2], rules);
 * console.log(merged); // { a: 3, b: { c: 2, d: 3 } }
 */
function deepMergeWithRules(objects, rules) {
    function merge(target, source) {
        for (var key in source) {
            var fullPath = key.split('.').reduce(function (path, part) { return path ? "".concat(path, ".").concat(part) : part; }, '');
            if (source[key] instanceof Object && key in target) {
                Object.assign(source[key], merge(target[key], source[key]));
            }
            target[key] = key in rules ? rules[fullPath](target[key], source[key]) : source[key];
        }
        return target;
    }
    return objects.reduce(function (prev, next) { return merge(prev, next); }, {});
}
exports.deepMergeWithRules = deepMergeWithRules;
