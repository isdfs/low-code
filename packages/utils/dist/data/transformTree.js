"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformTree = void 0;
/**
 * 将平铺的数据结构转换为树结构。
 *
 * @template T - 原始数据的类型。
 * @template K - 数据键的类型。
 * @param {T[]} items - 原始平铺数据的数组。
 * @param {K} idKey - 标识每个项唯一性的键。
 * @param {K} parentKey - 标识父级项的键。
 * @returns {T[]} 转换后的树结构数据。
 *
 * @example
 * const items = [
 *   { id: 1, parentId: null, name: 'Root' },
 *   { id: 2, parentId: 1, name: 'Child 1' },
 *   { id: 3, parentId: 1, name: 'Child 2' }
 * ];
 * const tree = transformTree(items, 'id', 'parentId');
 * console.log(tree); // [{ id: 1, parentId: null, name: 'Root', children: [{ id: 2, parentId: 1, name: 'Child 1' }, { id: 3, parentId: 1, name: 'Child 2' }] }]
 */
function transformTree(items, idKey, parentKey) {
    var itemMap = {};
    var result = [];
    items.forEach(function (item) {
        itemMap[item[idKey]] = __assign(__assign({}, item), { children: [] });
    });
    items.forEach(function (item) {
        var parentId = item[parentKey];
        if (parentId === null || parentId === undefined) {
            result.push(itemMap[item[idKey]]);
        }
        else {
            var parentItem = itemMap[parentId];
            if (parentItem) {
                parentItem.children.push(itemMap[item[idKey]]);
            }
        }
    });
    return result;
}
exports.transformTree = transformTree;
