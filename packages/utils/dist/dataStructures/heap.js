"use strict";
/**
 * 二叉堆数据结构模块，支持最小堆和最大堆的构建和操作。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinaryHeap = void 0;
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap(type) {
        if (type === void 0) { type = 'min'; }
        this.heap = [];
        this.type = type;
    }
    /**
     * 插入一个新元素到堆中。
     * @param value 要插入的元素。
     */
    BinaryHeap.prototype.insert = function (value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    };
    /**
     * 删除并返回堆顶元素。
     * @returns 堆顶元素。
     */
    BinaryHeap.prototype.extract = function () {
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop();
        var top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown(0);
        return top;
    };
    /**
     * 获取堆顶元素而不删除它。
     * @returns 堆顶元素。
     */
    BinaryHeap.prototype.peek = function () {
        return this.heap.length > 0 ? this.heap[0] : null;
    };
    /**
     * 堆的大小。
     * @returns 堆中元素的数量。
     */
    BinaryHeap.prototype.size = function () {
        return this.heap.length;
    };
    /**
     * 堆是否为空。
     * @returns 如果堆为空，返回true；否则返回false。
     */
    BinaryHeap.prototype.isEmpty = function () {
        return this.heap.length === 0;
    };
    BinaryHeap.prototype.bubbleUp = function (index) {
        var parentIndex = Math.floor((index - 1) / 2);
        if (parentIndex >= 0 && this.shouldSwap(index, parentIndex)) {
            this.swap(index, parentIndex);
            this.bubbleUp(parentIndex);
        }
    };
    BinaryHeap.prototype.sinkDown = function (index) {
        var leftChildIndex = 2 * index + 1;
        var rightChildIndex = 2 * index + 2;
        var swapIndex = index;
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
    };
    BinaryHeap.prototype.shouldSwap = function (childIndex, parentIndex) {
        if (this.type === 'min') {
            return this.heap[childIndex] < this.heap[parentIndex];
        }
        else {
            return this.heap[childIndex] > this.heap[parentIndex];
        }
    };
    BinaryHeap.prototype.swap = function (index1, index2) {
        var _a;
        _a = [this.heap[index2], this.heap[index1]], this.heap[index1] = _a[0], this.heap[index2] = _a[1];
    };
    return BinaryHeap;
}());
exports.BinaryHeap = BinaryHeap;
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
