"use strict";
/**
 * Dijkstra算法模块，用于在带权图中计算最短路径。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dijkstra = void 0;
var Dijkstra = /** @class */ (function () {
    function Dijkstra(graph) {
        this.graph = graph;
    }
    /**
     * 计算从源节点到所有其他节点的最短路径。
     * @param source 源节点的名称。
     * @returns 从源节点到其他节点的最短路径长度和前驱节点。
     */
    Dijkstra.prototype.calculateShortestPath = function (source) {
        var distances = {};
        var previous = {};
        var visited = new Set();
        var priorityQueue = [];
        Object.keys(this.graph).forEach(function (node) {
            distances[node] = Infinity;
            previous[node] = null;
        });
        distances[source] = 0;
        priorityQueue.push([source, 0]);
        while (priorityQueue.length > 0) {
            priorityQueue.sort(function (a, b) { return a[1] - b[1]; });
            var currentNode = priorityQueue.shift()[0];
            visited.add(currentNode);
            for (var _i = 0, _a = this.graph[currentNode]; _i < _a.length; _i++) {
                var _b = _a[_i], target = _b.target, weight = _b.weight;
                if (visited.has(target))
                    continue;
                var newDist = distances[currentNode] + weight;
                if (newDist < distances[target]) {
                    distances[target] = newDist;
                    previous[target] = currentNode;
                    priorityQueue.push([target, newDist]);
                }
            }
        }
        return { distances: distances, previous: previous };
    };
    /**
     * 获取从源节点到目标节点的最短路径。
     * @param source 源节点的名称。
     * @param target 目标节点的名称。
     * @returns 最短路径数组，从源节点到目标节点的路径节点列表。
     */
    Dijkstra.prototype.getShortestPath = function (source, target) {
        var _a = this.calculateShortestPath(source), distances = _a.distances, previous = _a.previous;
        var path = [];
        var currentNode = target;
        while (currentNode) {
            path.unshift(currentNode);
            currentNode = previous[currentNode];
        }
        if (distances[target] === Infinity) {
            return []; // 目标节点不可达
        }
        return path;
    };
    return Dijkstra;
}());
exports.Dijkstra = Dijkstra;
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
