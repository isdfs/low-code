/**
* 链表类，支持插入、删除和遍历操作。
*/
export declare class LinkedList<T> {
    private head;
    /**
     * 向链表末尾添加一个新元素。
     * @param value - 要添加的元素。
     */
    append(value: T): void;
    /**
     * 从链表中删除一个元素。
     * @param value - 要删除的元素值。
     * @returns 如果成功删除则返回true，否则返回false。
     */
    remove(value: T): boolean;
    /**
     * 遍历链表，执行给定的回调函数。
     * @param callback - 对每个元素执行的回调函数。
     */
    traverse(callback: (value: T) => void): void;
}
