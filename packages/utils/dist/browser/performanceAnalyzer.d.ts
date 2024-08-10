/**
 * 浏览器性能分析模块，监测并收集浏览器性能指标。
 * @module PerformanceAnalyzer
 */
export interface PerformanceMetrics {
    memoryUsage: number;
    cpuUsage: number;
    fps: number;
}
declare class PerformanceAnalyzer {
    private fpsInterval;
    private lastFrameTime;
    private frames;
    constructor();
    /**
     * 获取当前内存使用情况。
     * @returns {number} 当前内存使用量，以MB为单位。
     */
    getMemoryUsage(): number;
    /**
     * 获取CPU使用情况。
     * @returns {number} 当前CPU使用率，以百分比表示。
     */
    getCpuUsage(): number;
    /**
     * 计算并获取当前的帧率（FPS）。
     * @returns {number} 当前帧率。
     */
    calculateFps(): number;
    /**
     * 获取所有性能指标。
     * @returns {PerformanceMetrics} 当前性能指标的对象。
     */
    getPerformanceMetrics(): PerformanceMetrics;
}
declare const performanceAnalyzer: PerformanceAnalyzer;
export default performanceAnalyzer;
