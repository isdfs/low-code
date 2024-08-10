/**
 * 二叉堆数据结构模块，支持最小堆和最大堆的构建和操作。
 */
export declare type HeapType = 'min' | 'max';
export declare class BinaryHeap<T> {
    private heap;
    private type;
    constructor(type?: HeapType);
    /**
     * 插入一个新元素到堆中。
     * @param value 要插入的元素。
     */
    insert(value: T): void;
    /**
     * 删除并返回堆顶元素。
     * @returns 堆顶元素。
     */
    extract(): T | null;
    /**
     * 获取堆顶元素而不删除它。
     * @returns 堆顶元素。
     */
    peek(): T | null;
    /**
     * 堆的大小。
     * @returns 堆中元素的数量。
     */
    size(): number;
    /**
     * 堆是否为空。
     * @returns 如果堆为空，返回true；否则返回false。
     */
    isEmpty(): boolean;
    private bubbleUp;
    private sinkDown;
    private shouldSwap;
    private swap;
}
/**
 * 使用示例：
 * ```typescript
 * const minHeap = new BinaryHeap<number>('min');
 * minHeap.insert(5);
 * minHeap.insert(3);
 * minHeap.insert(8);
 *
 * console.log(minHeap.extract()); // 输出: 3
 * console.log(minHeap.peek()); // 输出: 5
 * console.log(minHeap.size()); // 输出: 2
 * ```
 */
