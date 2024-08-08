"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepFreeze = void 0;
/**
 * 递归地冻结对象，防止其被修改。
 * @param obj - 要冻结的对象。
 * @returns 返回被冻结的对象。
 */
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.keys(obj).forEach(function (key) {
        var prop = obj[key];
        if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });
    return obj;
}
exports.deepFreeze = deepFreeze;
