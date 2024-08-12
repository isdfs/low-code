/**
 * @module video
 * @description 高级视频处理模块，提供视频加载、缓存、实时流处理、动态调整等功能。
 */
export interface VideoOptions {
    useCache?: boolean;
    streaming?: boolean;
    preload?: boolean;
}
export declare class Video {
    private videoElement;
    private cache;
    private options;
    /**
     * 创建一个新的 Video 实例
     * @param {HTMLVideoElement} videoElement - 用于呈现视频的 HTMLVideoElement 元素
     * @param {VideoOptions} options - 视频播放的配置选项
     */
    constructor(videoElement: HTMLVideoElement, options?: VideoOptions);
    /**
     * 预加载视频资源并缓存
     * @param {string} url - 视频的URL地址
     * @returns {Promise<void>}
     * @description 如果启用了缓存选项，该函数会在加载时将视频内容缓存起来，以供后续快速访问。
     */
    private preloadVideo;
    /**
     * 加载并播放视频
     * @param {string} url - 视频的URL地址
     * @returns {Promise<void>}
     * @description 该函数根据配置选项决定是否使用缓存或启用实时流播放。
     */
    loadAndPlay(url: string): Promise<void>;
    /**
     * 切换到实时流播放模式
     * @param {MediaStream} stream - 实时流对象
     * @description 启用实时流处理，用于显示来自摄像头或其他实时数据源的视频流。
     */
    enableStreaming(stream: MediaStream): void;
    /**
     * 暂停视频播放
     * @description 该函数暂停当前的视频播放。
     */
    pause(): void;
    /**
     * 恢复视频播放
     * @description 该函数恢复暂停中的视频播放。
     */
    resume(): void;
    /**
     * 停止视频播放并重置播放时间
     * @description 停止当前的视频播放并将播放进度重置到0。
     */
    stop(): void;
    /**
     * 清除缓存
     * @description 清空视频缓存数据，以释放内存。
     */
    clearCache(): void;
    /**
     * 调整视频的播放速率
     * @param {number} rate - 播放速率，1.0 表示正常速率
     * @description 根据需要动态调整视频的播放速率。
     */
    setPlaybackRate(rate: number): void;
    /**
     * 截取当前视频帧
     * @returns {HTMLCanvasElement} 返回一个包含当前视频帧的Canvas元素
     * @description 提供视频帧的截屏功能，将当前帧保存到Canvas中。
     */
    captureFrame(): HTMLCanvasElement;
    /**
     * 销毁视频对象，清理资源
     * @description 释放视频相关的资源，包括缓存和视频元素对象，避免内存泄漏。
     */
    destroy(): void;
}
