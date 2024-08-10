"use strict";
/**
 * LRU缓存模块，实现了最近最少使用策略的缓存机制。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LRUCache = void 0;
var LRUCache = /** @class */ (function () {
    /**
     * 创建一个指定容量的LRU缓存实例。
     * @param capacity 缓存的最大容量。
     */
    function LRUCache(capacity) {
        this.head = null;
        this.tail = null;
        if (capacity <= 0) {
            throw new Error('容量必须大于0');
        }
        this.capacity = capacity;
        this.cacheMap = new Map();
    }
    /**
     * 获取缓存中指定键的值。
     * @param key 要获取的键。
     * @returns 如果键存在，返回对应的值；否则返回null。
     */
    LRUCache.prototype.get = function (key) {
        var node = this.cacheMap.get(key);
        if (!node) {
            return null;
        }
        this.moveToHead(node);
        return node.value;
    };
    /**
     * 向缓存中添加或更新一个键值对。
     * @param key 要添加或更新的键。
     * @param value 要添加或更新的值。
     */
    LRUCache.prototype.put = function (key, value) {
        var node = this.cacheMap.get(key);
        if (node) {
            node.value = value;
            this.moveToHead(node);
        }
        else {
            node = { key: key, value: value, prev: null, next: null };
            if (this.cacheMap.size >= this.capacity) {
                this.removeTail();
            }
            this.addToHead(node);
            this.cacheMap.set(key, node);
        }
    };
    /**
     * 将节点移动到双向链表的头部，表示最近使用。
     * @param node 要移动的节点。
     * @private
     */
    LRUCache.prototype.moveToHead = function (node) {
        if (node === this.head) {
            return;
        }
        this.removeNode(node);
        this.addToHead(node);
    };
    /**
     * 从双向链表中移除节点。
     * @param node 要移除的节点。
     * @private
     */
    LRUCache.prototype.removeNode = function (node) {
        if (node.prev) {
            node.prev.next = node.next;
        }
        else {
            this.head = node.next;
        }
        if (node.next) {
            node.next.prev = node.prev;
        }
        else {
            this.tail = node.prev;
        }
    };
    /**
     * 将节点添加到双向链表的头部。
     * @param node 要添加的节点。
     * @private
     */
    LRUCache.prototype.addToHead = function (node) {
        node.next = this.head;
        node.prev = null;
        if (this.head) {
            this.head.prev = node;
        }
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
    };
    /**
     * 移除双向链表的尾部节点，即最久未使用的节点。
     * @private
     */
    LRUCache.prototype.removeTail = function () {
        if (this.tail) {
            this.cacheMap.delete(this.tail.key);
            this.removeNode(this.tail);
        }
    };
    return LRUCache;
}());
exports.LRUCache = LRUCache;
/**
 * 使用示例：
 * ```typescript
 * const lruCache = new LRUCache<string, number>(3);
 * lruCache.put('A', 1);
 * lruCache.put('B', 2);
 * lruCache.put('C', 3);
 *
 * console.log(lruCache.get('A')); // 输出: 1
 *
 * lruCache.put('D', 4); // 此时，键'B'将被移除
 *
 * console.log(lruCache.get('B')); // 输出: null
 * ```
 */
