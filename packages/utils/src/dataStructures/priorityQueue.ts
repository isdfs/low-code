/**
 * 优先队列模块，实现了基于最小堆的优先队列。
 */

interface QueueElement<T> {
    value: T;
    priority: number;
  }
  
  export class PriorityQueue<T> {
    private heap: QueueElement<T>[] = [];
  
    /**
     * 检查队列是否为空。
     * @returns 如果队列为空，返回true；否则返回false。
     */
    isEmpty(): boolean {
      return this.heap.length === 0;
    }
  
    /**
     * 向队列中添加元素。
     * @param value 要添加的元素。
     * @param priority 元素的优先级，数值越小优先级越高。
     */
    enqueue(value: T, priority: number): void {
      const element: QueueElement<T> = { value, priority };
      this.heap.push(element);
      this.bubbleUp(this.heap.length - 1);
    }
  
    /**
     * 从队列中取出优先级最高的元素。
     * @returns 优先级最高的元素，如果队列为空则返回null。
     */
    dequeue(): T | null {
      if (this.isEmpty()) {
        return null;
      }
      const min = this.heap[0];
      const end = this.heap.pop()!;
      if (this.heap.length > 0) {
        this.heap[0] = end;
        this.sinkDown(0);
      }
      return min.value;
    }
  
    /**
     * 上浮操作，维持最小堆性质。
     * @param index 要上浮的元素索引。
     * @private
     */
    private bubbleUp(index: number): void {
      const element = this.heap[index];
      while (index > 0) {
        const parentIndex = Math.floor((index - 1) / 2);
        const parent = this.heap[parentIndex];
        if (element.priority >= parent.priority) break;
        this.heap[parentIndex] = element;
        this.heap[index] = parent;
        index = parentIndex;
      }
    }
  
    /**
     * 下沉操作，维持最小堆性质。
     * @param index 要下沉的元素索引。
     * @private
     */
    private sinkDown(index: number): void {
      const length = this.heap.length;
      const element = this.heap[index];
  
      while (true) {
        let leftChildIdx = 2 * index + 1;
        let rightChildIdx = 2 * index + 2;
        let swap: number | null = null;
  
        if (leftChildIdx < length) {
          const leftChild = this.heap[leftChildIdx];
          if (leftChild.priority < element.priority) {
            swap = leftChildIdx;
          }
        }
  
        if (rightChildIdx < length) {
          const rightChild = this.heap[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < this.heap[swap].priority)
          ) {
            swap = rightChildIdx;
          }
        }
  
        if (swap === null) break;
        this.heap[index] = this.heap[swap];
        this.heap[swap] = element;
        index = swap;
      }
    }
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
  