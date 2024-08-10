/**
 * 二叉堆数据结构模块，支持最小堆和最大堆的构建和操作。
 */

export type HeapType = 'min' | 'max';

export class BinaryHeap<T> {
  private heap: T[] = [];
  private type: HeapType;

  constructor(type: HeapType = 'min') {
    this.type = type;
  }

  /**
   * 插入一个新元素到堆中。
   * @param value 要插入的元素。
   */
  insert(value: T): void {
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }

  /**
   * 删除并返回堆顶元素。
   * @returns 堆顶元素。
   */
  extract(): T | null {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop()!;

    const top = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    this.sinkDown(0);

    return top;
  }

  /**
   * 获取堆顶元素而不删除它。
   * @returns 堆顶元素。
   */
  peek(): T | null {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  /**
   * 堆的大小。
   * @returns 堆中元素的数量。
   */
  size(): number {
    return this.heap.length;
  }

  /**
   * 堆是否为空。
   * @returns 如果堆为空，返回true；否则返回false。
   */
  isEmpty(): boolean {
    return this.heap.length === 0;
  }

  private bubbleUp(index: number): void {
    const parentIndex = Math.floor((index - 1) / 2);

    if (parentIndex >= 0 && this.shouldSwap(index, parentIndex)) {
      this.swap(index, parentIndex);
      this.bubbleUp(parentIndex);
    }
  }

  private sinkDown(index: number): void {
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = 2 * index + 2;
    let swapIndex = index;

    if (leftChildIndex < this.heap.length && this.shouldSwap(leftChildIndex, swapIndex)) {
      swapIndex = leftChildIndex;
    }

    if (rightChildIndex < this.heap.length && this.shouldSwap(rightChildIndex, swapIndex)) {
      swapIndex = rightChildIndex;
    }

    if (swapIndex !== index) {
      this.swap(index, swapIndex);
      this.sinkDown(swapIndex);
    }
  }

  private shouldSwap(childIndex: number, parentIndex: number): boolean {
    if (this.type === 'min') {
      return this.heap[childIndex] < this.heap[parentIndex];
    } else {
      return this.heap[childIndex] > this.heap[parentIndex];
    }
  }

  private swap(index1: number, index2: number): void {
    [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
  }
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
