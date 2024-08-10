/**
 * 优先队列模块，实现了基于最小堆的优先队列。
 */
export declare class PriorityQueue<T> {
    private heap;
    /**
     * 检查队列是否为空。
     * @returns 如果队列为空，返回true；否则返回false。
     */
    isEmpty(): boolean;
    /**
     * 向队列中添加元素。
     * @param value 要添加的元素。
     * @param priority 元素的优先级，数值越小优先级越高。
     */
    enqueue(value: T, priority: number): void;
    /**
     * 从队列中取出优先级最高的元素。
     * @returns 优先级最高的元素，如果队列为空则返回null。
     */
    dequeue(): T | null;
    /**
     * 上浮操作，维持最小堆性质。
     * @param index 要上浮的元素索引。
     * @private
     */
    private bubbleUp;
    /**
     * 下沉操作，维持最小堆性质。
     * @param index 要下沉的元素索引。
     * @private
     */
    private sinkDown;
}
/**
 * 使用示例：
 * ```typescript
 * const pq = new PriorityQueue<string>();
 * pq.enqueue('Task A', 2);
 * pq.enqueue('Task B', 1);
 * pq.enqueue('Task C', 3);
 *
 * while (!pq.isEmpty()) {
 *   console.log(pq.dequeue()); // 输出顺序: Task B, Task A, Task C
 * }
 * ```
 */
