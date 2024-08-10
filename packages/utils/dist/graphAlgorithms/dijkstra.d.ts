/**
 * Dijkstra算法模块，用于在带权图中计算最短路径。
 */
interface Edge {
    target: string;
    weight: number;
}
interface Graph {
    [key: string]: Edge[];
}
export declare class Dijkstra {
    private graph;
    constructor(graph: Graph);
    /**
     * 计算从源节点到所有其他节点的最短路径。
     * @param source 源节点的名称。
     * @returns 从源节点到其他节点的最短路径长度和前驱节点。
     */
    calculateShortestPath(source: string): {
        distances: {
            [key: string]: number;
        };
        previous: {
            [key: string]: string | null;
        };
    };
    /**
     * 获取从源节点到目标节点的最短路径。
     * @param source 源节点的名称。
     * @param target 目标节点的名称。
     * @returns 最短路径数组，从源节点到目标节点的路径节点列表。
     */
    getShortestPath(source: string, target: string): string[];
}
export {};
/**
 * 使用示例：
 * ```typescript
 * const graph: Graph = {
 *   A: [{ target: 'B', weight: 1 }, { target: 'C', weight: 4 }],
 *   B: [{ target: 'C', weight: 2 }, { target: 'D', weight: 5 }],
 *   C: [{ target: 'D', weight: 1 }],
 *   D: [],
 * };
 *
 * const dijkstra = new Dijkstra(graph);
 * const shortestPath = dijkstra.getShortestPath('A', 'D');
 * console.log(shortestPath); // 输出: ['A', 'B', 'C', 'D']
 * ```
 */
