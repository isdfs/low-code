"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapTree = void 0;
/**
 * 遍历并映射树形结构中的每个节点，返回新树。
 * @param tree - 树的根节点。
 * @param callback - 应用于每个节点的回调函数。
 * @returns 映射后的新树。
 */
function mapTree(tree, callback) {
    var newNode = callback(tree);
    if (Array.isArray(tree.children)) {
        newNode.children = tree.children.map(function (child) { return mapTree(child, callback); });
    }
    return newNode;
}
exports.mapTree = mapTree;
