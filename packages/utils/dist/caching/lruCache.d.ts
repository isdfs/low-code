/**
 * LRU缓存模块，实现了最近最少使用策略的缓存机制。
 */
export declare class LRUCache<K, V> {
    private capacity;
    private cacheMap;
    private head;
    private tail;
    /**
     * 创建一个指定容量的LRU缓存实例。
     * @param capacity 缓存的最大容量。
     */
    constructor(capacity: number);
    /**
     * 获取缓存中指定键的值。
     * @param key 要获取的键。
     * @returns 如果键存在，返回对应的值；否则返回null。
     */
    get(key: K): V | null;
    /**
     * 向缓存中添加或更新一个键值对。
     * @param key 要添加或更新的键。
     * @param value 要添加或更新的值。
     */
    put(key: K, value: V): void;
    /**
     * 将节点移动到双向链表的头部，表示最近使用。
     * @param node 要移动的节点。
     * @private
     */
    private moveToHead;
    /**
     * 从双向链表中移除节点。
     * @param node 要移除的节点。
     * @private
     */
    private removeNode;
    /**
     * 将节点添加到双向链表的头部。
     * @param node 要添加的节点。
     * @private
     */
    private addToHead;
    /**
     * 移除双向链表的尾部节点，即最久未使用的节点。
     * @private
     */
    private removeTail;
}
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
