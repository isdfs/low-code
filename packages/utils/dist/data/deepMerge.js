"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepMerge = void 0;
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
function deepMerge() {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    var isObject = function (obj) { return obj && typeof obj === 'object'; };
    return objects.reduce(function (prev, obj) {
        Object.keys(obj).forEach(function (key) {
            var pVal = prev[key];
            var oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                prev[key] = pVal.concat.apply(pVal, oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = deepMerge(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });
        return prev;
    }, {});
}
exports.deepMerge = deepMerge;
