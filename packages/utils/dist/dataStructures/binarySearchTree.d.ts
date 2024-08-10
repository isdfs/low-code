/**
* 二叉搜索树类，支持插入、查找和删除操作。
*/
export declare class BinarySearchTree<T> {
    private root;
    /**
     * 向树中插入一个新元素。
     * @param value - 要插入的元素。
     */
    insert(value: T): void;
    private insertNode;
    /**
     * 查找树中的一个元素。
     * @param value - 要查找的元素值。
     * @returns 如果找到元素则返回true，否则返回false。
     */
    search(value: T): boolean;
    private searchNode;
    /**
     * 从树中删除一个元素。
     * @param value - 要删除的元素值。
     */
    remove(value: T): void;
    private removeNode;
    private findMinNode;
}
