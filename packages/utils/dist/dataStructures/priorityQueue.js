"use strict";
/**
 * 优先队列模块，实现了基于最小堆的优先队列。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.heap = [];
    }
    /**
     * 检查队列是否为空。
     * @returns 如果队列为空，返回true；否则返回false。
     */
    PriorityQueue.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    /**
     * 向队列中添加元素。
     * @param value 要添加的元素。
     * @param priority 元素的优先级，数值越小优先级越高。
     */
    PriorityQueue.prototype.enqueue = function (value, priority) {
        var element = { value: value, priority: priority };
        this.heap.push(element);
        this.bubbleUp(this.heap.length - 1);
    };
    /**
     * 从队列中取出优先级最高的元素。
     * @returns 优先级最高的元素，如果队列为空则返回null。
     */
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        var min = this.heap[0];
        var end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown(0);
        }
        return min.value;
    };
    /**
     * 上浮操作，维持最小堆性质。
     * @param index 要上浮的元素索引。
     * @private
     */
    PriorityQueue.prototype.bubbleUp = function (index) {
        var element = this.heap[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent_1 = this.heap[parentIndex];
            if (element.priority >= parent_1.priority)
                break;
            this.heap[parentIndex] = element;
            this.heap[index] = parent_1;
            index = parentIndex;
        }
    };
    /**
     * 下沉操作，维持最小堆性质。
     * @param index 要下沉的元素索引。
     * @private
     */
    PriorityQueue.prototype.sinkDown = function (index) {
        var length = this.heap.length;
        var element = this.heap[index];
        while (true) {
            var leftChildIdx = 2 * index + 1;
            var rightChildIdx = 2 * index + 2;
            var swap = null;
            if (leftChildIdx < length) {
                var leftChild = this.heap[leftChildIdx];
                if (leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < length) {
                var rightChild = this.heap[rightChildIdx];
                if ((swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < this.heap[swap].priority)) {
                    swap = rightChildIdx;
                }
            }
            if (swap === null)
                break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
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
