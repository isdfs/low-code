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

export class Dijkstra {
  private graph: Graph;

  constructor(graph: Graph) {
    this.graph = graph;
  }

  /**
   * 计算从源节点到所有其他节点的最短路径。
   * @param source 源节点的名称。
   * @returns 从源节点到其他节点的最短路径长度和前驱节点。
   */
  calculateShortestPath(source: string): { distances: { [key: string]: number }, previous: { [key: string]: string | null } } {
    const distances: { [key: string]: number } = {};
    const previous: { [key: string]: string | null } = {};
    const visited: Set<string> = new Set();
    const priorityQueue: [string, number][] = [];

    Object.keys(this.graph).forEach(node => {
      distances[node] = Infinity;
      previous[node] = null;
    });
    distances[source] = 0;
    priorityQueue.push([source, 0]);

    while (priorityQueue.length > 0) {
      priorityQueue.sort((a, b) => a[1] - b[1]);
      const [currentNode] = priorityQueue.shift()!;
      visited.add(currentNode);

      for (const { target, weight } of this.graph[currentNode]) {
        if (visited.has(target)) continue;

        const newDist = distances[currentNode] + weight;
        if (newDist < distances[target]) {
          distances[target] = newDist;
          previous[target] = currentNode;
          priorityQueue.push([target, newDist]);
        }
      }
    }

    return { distances, previous };
  }

  /**
   * 获取从源节点到目标节点的最短路径。
   * @param source 源节点的名称。
   * @param target 目标节点的名称。
   * @returns 最短路径数组，从源节点到目标节点的路径节点列表。
   */
  getShortestPath(source: string, target: string): string[] {
    const { distances, previous } = this.calculateShortestPath(source);

    const path: string[] = [];
    let currentNode: string | null = target;

    while (currentNode) {
      path.unshift(currentNode);
      currentNode = previous[currentNode];
    }

    if (distances[target] === Infinity) {
      return []; // 目标节点不可达
    }

    return path;
  }
}

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
