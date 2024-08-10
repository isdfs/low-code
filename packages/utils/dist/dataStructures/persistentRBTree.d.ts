/**
 * 持久化红黑树中的节点类。
 * @template K - 树中键的类型。
 * @template V - 树中值的类型。
 */
declare class PersistentRBTreeNode<K, V> {
    key: K;
    value: V;
    left: PersistentRBTreeNode<K, V> | null;
    right: PersistentRBTreeNode<K, V> | null;
    color: 'red' | 'black';
    /**
     * 构造一个持久化红黑树的节点。
     * @param key - 节点的键。
     * @param value - 节点的值。
     * @param color - 节点的颜色，可以是 'red' 或 'black'。
     * @param left - 节点的左子节点（可选），默认为 null。
     * @param right - 节点的右子节点（可选），默认为 null。
     */
    constructor(key: K, value: V, color: 'red' | 'black', left?: PersistentRBTreeNode<K, V> | null, right?: PersistentRBTreeNode<K, V> | null);
}
/**
* 持久化红黑树类。
* @template K - 树中键的类型。
* @template V - 树中值的类型。
*/
declare class PersistentRBTree<K, V> {
    private root;
    /**
     * 插入一个键值对到红黑树中，返回新的树。
     * @param key - 要插入的键。
     * @param value - 要插入的值。
     * @returns 返回一个新的红黑树。
     */
    insert(key: K, value: V): PersistentRBTree<K, V>;
    /**
     * 插入一个节点到红黑树中。
     * @param node - 当前节点。
     * @param key - 要插入的键。
     * @param value - 要插入的值。
     * @returns 返回插入后的新节点。
     */
    private insertNode;
    /**
     * 平衡红黑树的节点。
     * @param node - 当前节点。
     * @returns 返回平衡后的节点。
     */
    private balance;
    /**
     * 判断节点是否为红色。
     * @param node - 要检查的节点。
     * @returns 如果节点是红色，返回 true；否则返回 false。
     */
    private isRed;
    /**
     * 左旋转节点。
     * @param node - 要旋转的节点。
     * @returns 返回左旋转后的新节点。
     */
    private rotateLeft;
    /**
     * 右旋转节点。
     * @param node - 要旋转的节点。
     * @returns 返回右旋转后的新节点。
     */
    private rotateRight;
    /**
     * 翻转节点及其子节点的颜色。
     * @param node - 要翻转颜色的节点。
     */
    private flipColors;
}
