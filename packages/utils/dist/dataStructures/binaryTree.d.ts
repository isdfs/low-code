/**
 * 二叉树数据结构模块，支持插入、查找和遍历操作。
 */
declare class BinaryTreeNode<T> {
    value: T;
    left: BinaryTreeNode<T> | null;
    right: BinaryTreeNode<T> | null;
    constructor(value: T);
}
export declare class BinaryTree<T> {
    private root;
    /**
     * 向二叉树中插入一个新值。
     * @param value 要插入的值。
     */
    insert(value: T): void;
    private insertNode;
    /**
     * 在二叉树中查找一个值。
     * @param value 要查找的值。
     * @returns 如果找到，返回节点；否则返回null。
     */
    find(value: T): BinaryTreeNode<T> | null;
    private findNode;
    /**
     * 中序遍历二叉树。
     * @param visitCallback 访问节点时的回调函数。
     */
    inOrderTraverse(visitCallback: (node: BinaryTreeNode<T>) => void): void;
    private inOrderTraverseNode;
    /**
     * 先序遍历二叉树。
     * @param visitCallback 访问节点时的回调函数。
     */
    preOrderTraverse(visitCallback: (node: BinaryTreeNode<T>) => void): void;
    private preOrderTraverseNode;
    /**
     * 后序遍历二叉树。
     * @param visitCallback 访问节点时的回调函数。
     */
    postOrderTraverse(visitCallback: (node: BinaryTreeNode<T>) => void): void;
    private postOrderTraverseNode;
}
export {};
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
