"use strict";
// dataStructures/persistentRBTree.ts
/**
 * 持久化红黑树中的节点类。
 * @template K - 树中键的类型。
 * @template V - 树中值的类型。
 */
var PersistentRBTreeNode = /** @class */ (function () {
    /**
     * 构造一个持久化红黑树的节点。
     * @param key - 节点的键。
     * @param value - 节点的值。
     * @param color - 节点的颜色，可以是 'red' 或 'black'。
     * @param left - 节点的左子节点（可选），默认为 null。
     * @param right - 节点的右子节点（可选），默认为 null。
     */
    function PersistentRBTreeNode(key, value, color, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
        this.color = color;
    }
    return PersistentRBTreeNode;
}());
/**
* 持久化红黑树类。
* @template K - 树中键的类型。
* @template V - 树中值的类型。
*/
var PersistentRBTree = /** @class */ (function () {
    function PersistentRBTree() {
        this.root = null;
    }
    /**
     * 插入一个键值对到红黑树中，返回新的树。
     * @param key - 要插入的键。
     * @param value - 要插入的值。
     * @returns 返回一个新的红黑树。
     */
    PersistentRBTree.prototype.insert = function (key, value) {
        var newRoot = this.insertNode(this.root, key, value);
        newRoot.color = 'black'; // 根节点必须是黑色
        return new PersistentRBTree(newRoot);
    };
    /**
     * 插入一个节点到红黑树中。
     * @param node - 当前节点。
     * @param key - 要插入的键。
     * @param value - 要插入的值。
     * @returns 返回插入后的新节点。
     */
    PersistentRBTree.prototype.insertNode = function (node, key, value) {
        if (!node) {
            return new PersistentRBTreeNode(key, value, 'red');
        }
        if (key < node.key) {
            return this.balance(new PersistentRBTreeNode(node.key, node.value, node.color, this.insertNode(node.left, key, value), node.right));
        }
        else if (key > node.key) {
            return this.balance(new PersistentRBTreeNode(node.key, node.value, node.color, node.left, this.insertNode(node.right, key, value)));
        }
        else {
            return new PersistentRBTreeNode(key, value, node.color, node.left, node.right); // 更新现有节点的值
        }
    };
    /**
     * 平衡红黑树的节点。
     * @param node - 当前节点。
     * @returns 返回平衡后的节点。
     */
    PersistentRBTree.prototype.balance = function (node) {
        var _a;
        if (this.isRed(node.right) && !this.isRed(node.left))
            node = this.rotateLeft(node);
        if (this.isRed(node.left) && this.isRed((_a = node.left) === null || _a === void 0 ? void 0 : _a.left))
            node = this.rotateRight(node);
        if (this.isRed(node.left) && this.isRed(node.right))
            this.flipColors(node);
        return node;
    };
    /**
     * 判断节点是否为红色。
     * @param node - 要检查的节点。
     * @returns 如果节点是红色，返回 true；否则返回 false。
     */
    PersistentRBTree.prototype.isRed = function (node) {
        return (node === null || node === void 0 ? void 0 : node.color) === 'red';
    };
    /**
     * 左旋转节点。
     * @param node - 要旋转的节点。
     * @returns 返回左旋转后的新节点。
     */
    PersistentRBTree.prototype.rotateLeft = function (node) {
        var x = node.right;
        node.right = x.left;
        x.left = node;
        x.color = node.color;
        node.color = 'red';
        return x;
    };
    /**
     * 右旋转节点。
     * @param node - 要旋转的节点。
     * @returns 返回右旋转后的新节点。
     */
    PersistentRBTree.prototype.rotateRight = function (node) {
        var x = node.left;
        node.left = x.right;
        x.right = node;
        x.color = node.color;
        node.color = 'red';
        return x;
    };
    /**
     * 翻转节点及其子节点的颜色。
     * @param node - 要翻转颜色的节点。
     */
    PersistentRBTree.prototype.flipColors = function (node) {
        node.color = 'red';
        if (node.left)
            node.left.color = 'black';
        if (node.right)
            node.right.color = 'black';
    };
    return PersistentRBTree;
}());
