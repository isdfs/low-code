/**
 * 遍历并映射树形结构中的每个节点，返回新树。
 * @param tree - 树的根节点。
 * @param callback - 应用于每个节点的回调函数。
 * @returns 映射后的新树。
 */
export declare function mapTree<T>(tree: T, callback: (node: T) => T): T;
