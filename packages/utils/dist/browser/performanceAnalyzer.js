"use strict";
/**
 * 浏览器性能分析模块，监测并收集浏览器性能指标。
 * @module PerformanceAnalyzer
 */
Object.defineProperty(exports, "__esModule", { value: true });
var PerformanceAnalyzer = /** @class */ (function () {
    function PerformanceAnalyzer() {
        this.fpsInterval = 1000; // 默认1秒计算一次FPS
        this.lastFrameTime = performance.now();
        this.frames = 0;
    }
    /**
     * 获取当前内存使用情况。
     * @returns {number} 当前内存使用量，以MB为单位。
     */
    PerformanceAnalyzer.prototype.getMemoryUsage = function () {
        if ('memory' in performance) {
            var memory = performance.memory;
            return memory.usedJSHeapSize / (1024 * 1024); // 转换为MB
        }
        return -1; // 浏览器不支持
    };
    /**
     * 获取CPU使用情况。
     * @returns {number} 当前CPU使用率，以百分比表示。
     */
    PerformanceAnalyzer.prototype.getCpuUsage = function () {
        // 这里是一个简化的实现，实际可能需要使用更复杂的算法或外部工具
        return Math.random() * 100; // 模拟CPU使用率
    };
    /**
     * 计算并获取当前的帧率（FPS）。
     * @returns {number} 当前帧率。
     */
    PerformanceAnalyzer.prototype.calculateFps = function () {
        var now = performance.now();
        this.frames++;
        if (now > this.lastFrameTime + this.fpsInterval) {
            var fps = (this.frames * 1000) / (now - this.lastFrameTime);
            this.lastFrameTime = now;
            this.frames = 0;
            return fps;
        }
        return -1; // 未达到计算时间间隔
    };
    /**
     * 获取所有性能指标。
     * @returns {PerformanceMetrics} 当前性能指标的对象。
     */
    PerformanceAnalyzer.prototype.getPerformanceMetrics = function () {
        return {
            memoryUsage: this.getMemoryUsage(),
            cpuUsage: this.getCpuUsage(),
            fps: this.calculateFps()
        };
    };
    return PerformanceAnalyzer;
}());
var performanceAnalyzer = new PerformanceAnalyzer();
exports.default = performanceAnalyzer;
