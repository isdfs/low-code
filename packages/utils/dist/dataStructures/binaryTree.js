"use strict";
/**
 * 二叉树数据结构模块，支持插入、查找和遍历操作。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryTree = void 0;
var BinaryTreeNode = /** @class */ (function () {
    function BinaryTreeNode(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
    return BinaryTreeNode;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    /**
     * 向二叉树中插入一个新值。
     * @param value 要插入的值。
     */
    BinaryTree.prototype.insert = function (value) {
        var newNode = new BinaryTreeNode(value);
        if (!this.root) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    };
    BinaryTree.prototype.insertNode = function (node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        }
        else {
            if (!node.right) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }
        }
    };
    /**
     * 在二叉树中查找一个值。
     * @param value 要查找的值。
     * @returns 如果找到，返回节点；否则返回null。
     */
    BinaryTree.prototype.find = function (value) {
        return this.findNode(this.root, value);
    };
    BinaryTree.prototype.findNode = function (node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            return node;
        }
        else if (value < node.value) {
            return this.findNode(node.left, value);
        }
        else {
            return this.findNode(node.right, value);
        }
    };
    /**
     * 中序遍历二叉树。
     * @param visitCallback 访问节点时的回调函数。
     */
    BinaryTree.prototype.inOrderTraverse = function (visitCallback) {
        this.inOrderTraverseNode(this.root, visitCallback);
    };
    BinaryTree.prototype.inOrderTraverseNode = function (node, visitCallback) {
        if (node) {
            this.inOrderTraverseNode(node.left, visitCallback);
            visitCallback(node);
            this.inOrderTraverseNode(node.right, visitCallback);
        }
    };
    /**
     * 先序遍历二叉树。
     * @param visitCallback 访问节点时的回调函数。
     */
    BinaryTree.prototype.preOrderTraverse = function (visitCallback) {
        this.preOrderTraverseNode(this.root, visitCallback);
    };
    BinaryTree.prototype.preOrderTraverseNode = function (node, visitCallback) {
        if (node) {
            visitCallback(node);
            this.preOrderTraverseNode(node.left, visitCallback);
            this.preOrderTraverseNode(node.right, visitCallback);
        }
    };
    /**
     * 后序遍历二叉树。
     * @param visitCallback 访问节点时的回调函数。
     */
    BinaryTree.prototype.postOrderTraverse = function (visitCallback) {
        this.postOrderTraverseNode(this.root, visitCallback);
    };
    BinaryTree.prototype.postOrderTraverseNode = function (node, visitCallback) {
        if (node) {
            this.postOrderTraverseNode(node.left, visitCallback);
            this.postOrderTraverseNode(node.right, visitCallback);
            visitCallback(node);
        }
    };
    return BinaryTree;
}());
exports.BinaryTree = BinaryTree;
/**
 * 使用示例：
 * ```typescript
 * const tree = new BinaryTree<number>();
 * tree.insert(10);
 * tree.insert(5);
 * tree.insert(15);
 * tree.insert(3);
 *
 * console.log('In-order traversal:');
 * tree.inOrderTraverse(node => console.log(node.value)); // 输出: 3, 5, 10, 15
 *
 * console.log('Pre-order traversal:');
 * tree.preOrderTraverse(node => console.log(node.value)); // 输出: 10, 5, 3, 15
 *
 * console.log('Post-order traversal:');
 * tree.postOrderTraverse(node => console.log(node.value)); // 输出: 3, 5, 15, 10
 * ```
 */
