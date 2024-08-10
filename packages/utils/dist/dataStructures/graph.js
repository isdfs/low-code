"use strict";
/**
 * 图数据结构模块，支持无向图和有向图的操作。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Graph = exports.GraphType = void 0;
var GraphType;
(function (GraphType) {
    GraphType[GraphType["UNDIRECTED"] = 0] = "UNDIRECTED";
    GraphType[GraphType["DIRECTED"] = 1] = "DIRECTED";
})(GraphType = exports.GraphType || (exports.GraphType = {}));
var Graph = /** @class */ (function () {
    function Graph(type) {
        if (type === void 0) { type = GraphType.UNDIRECTED; }
        this.adjacencyList = new Map();
        this.type = type;
    }
    /**
     * 添加节点到图中。
     * @param node 要添加的节点。
     */
    Graph.prototype.addNode = function (node) {
        if (!this.adjacencyList.has(node)) {
            this.adjacencyList.set(node, []);
        }
    };
    /**
     * 添加边到图中。
     * @param node1 第一个节点。
     * @param node2 第二个节点。
     */
    Graph.prototype.addEdge = function (node1, node2) {
        this.addNode(node1);
        this.addNode(node2);
        this.adjacencyList.get(node1).push(node2);
        if (this.type === GraphType.UNDIRECTED) {
            this.adjacencyList.get(node2).push(node1);
        }
    };
    /**
     * 深度优先搜索（DFS）。
     * @param start 起始节点。
     * @param visitCallback 访问节点时的回调函数。
     */
    Graph.prototype.depthFirstSearch = function (start, visitCallback) {
        var visited = new Set();
        this.dfsHelper(start, visited, visitCallback);
    };
    Graph.prototype.dfsHelper = function (node, visited, visitCallback) {
        if (!visited.has(node)) {
            visitCallback(node);
            visited.add(node);
            for (var _i = 0, _a = this.adjacencyList.get(node) || []; _i < _a.length; _i++) {
                var neighbor = _a[_i];
                this.dfsHelper(neighbor, visited, visitCallback);
            }
        }
    };
    /**
     * 广度优先搜索（BFS）。
     * @param start 起始节点。
     * @param visitCallback 访问节点时的回调函数。
     */
    Graph.prototype.breadthFirstSearch = function (start, visitCallback) {
        var visited = new Set();
        var queue = [start];
        visited.add(start);
        while (queue.length > 0) {
            var node = queue.shift();
            visitCallback(node);
            for (var _i = 0, _a = this.adjacencyList.get(node) || []; _i < _a.length; _i++) {
                var neighbor = _a[_i];
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    };
    /**
     * 获取节点的邻居。
     * @param node 要查询的节点。
     * @returns 返回节点的邻居列表。
     */
    Graph.prototype.getNeighbors = function (node) {
        return this.adjacencyList.get(node);
    };
    return Graph;
}());
exports.Graph = Graph;
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
