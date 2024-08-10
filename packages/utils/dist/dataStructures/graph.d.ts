/**
 * 图数据结构模块，支持无向图和有向图的操作。
 */
export declare enum GraphType {
    UNDIRECTED = 0,
    DIRECTED = 1
}
export declare class Graph<T> {
    private adjacencyList;
    private type;
    constructor(type?: GraphType);
    /**
     * 添加节点到图中。
     * @param node 要添加的节点。
     */
    addNode(node: T): void;
    /**
     * 添加边到图中。
     * @param node1 第一个节点。
     * @param node2 第二个节点。
     */
    addEdge(node1: T, node2: T): void;
    /**
     * 深度优先搜索（DFS）。
     * @param start 起始节点。
     * @param visitCallback 访问节点时的回调函数。
     */
    depthFirstSearch(start: T, visitCallback: (node: T) => void): void;
    private dfsHelper;
    /**
     * 广度优先搜索（BFS）。
     * @param start 起始节点。
     * @param visitCallback 访问节点时的回调函数。
     */
    breadthFirstSearch(start: T, visitCallback: (node: T) => void): void;
    /**
     * 获取节点的邻居。
     * @param node 要查询的节点。
     * @returns 返回节点的邻居列表。
     */
    getNeighbors(node: T): T[] | undefined;
}
/**
 * 使用示例：
 * ```typescript
 * const graph = new Graph<string>(GraphType.DIRECTED);
 * graph.addEdge('A', 'B');
 * graph.addEdge('A', 'C');
 * graph.addEdge('B', 'D');
 * graph.addEdge('C', 'D');
 *
 * console.log('DFS:');
 * graph.depthFirstSearch('A', (node) => console.log(node)); // 输出: A B D C
 *
 * console.log('BFS:');
 * graph.breadthFirstSearch('A', (node) => console.log(node)); // 输出: A B C D
 * ```
 */
