/**
 * 图数据结构模块，支持无向图和有向图的操作。
 */

export enum GraphType {
  UNDIRECTED,
  DIRECTED,
}

export class Graph<T> {
  private adjacencyList: Map<T, T[]> = new Map();
  private type: GraphType;

  constructor(type: GraphType = GraphType.UNDIRECTED) {
    this.type = type;
  }

  /**
   * 添加节点到图中。
   * @param node 要添加的节点。
   */
  addNode(node: T): void {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  /**
   * 添加边到图中。
   * @param node1 第一个节点。
   * @param node2 第二个节点。
   */
  addEdge(node1: T, node2: T): void {
    this.addNode(node1);
    this.addNode(node2);

    this.adjacencyList.get(node1)!.push(node2);
    if (this.type === GraphType.UNDIRECTED) {
      this.adjacencyList.get(node2)!.push(node1);
    }
  }

  /**
   * 深度优先搜索（DFS）。
   * @param start 起始节点。
   * @param visitCallback 访问节点时的回调函数。
   */
  depthFirstSearch(start: T, visitCallback: (node: T) => void): void {
    const visited = new Set<T>();
    this.dfsHelper(start, visited, visitCallback);
  }

  private dfsHelper(node: T, visited: Set<T>, visitCallback: (node: T) => void): void {
    if (!visited.has(node)) {
      visitCallback(node);
      visited.add(node);

      for (const neighbor of this.adjacencyList.get(node) || []) {
        this.dfsHelper(neighbor, visited, visitCallback);
      }
    }
  }

  /**
   * 广度优先搜索（BFS）。
   * @param start 起始节点。
   * @param visitCallback 访问节点时的回调函数。
   */
  breadthFirstSearch(start: T, visitCallback: (node: T) => void): void {
    const visited = new Set<T>();
    const queue: T[] = [start];

    visited.add(start);

    while (queue.length > 0) {
      const node = queue.shift()!;
      visitCallback(node);

      for (const neighbor of this.adjacencyList.get(node) || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }

  /**
   * 获取节点的邻居。
   * @param node 要查询的节点。
   * @returns 返回节点的邻居列表。
   */
  getNeighbors(node: T): T[] | undefined {
    return this.adjacencyList.get(node);
  }
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
