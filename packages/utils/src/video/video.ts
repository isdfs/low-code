/**
 * @module video
 * @description 高级视频处理模块，提供视频加载、缓存、实时流处理、动态调整等功能。
 */

export interface VideoOptions {
  useCache?: boolean; // 是否使用缓存
  streaming?: boolean; // 是否启用实时流处理
  preload?: boolean; // 是否预加载视频
}

export class Video {
  private videoElement: HTMLVideoElement;
  private cache: Map<string, Blob>;
  private options: VideoOptions;

  /**
   * 创建一个新的 Video 实例
   * @param {HTMLVideoElement} videoElement - 用于呈现视频的 HTMLVideoElement 元素
   * @param {VideoOptions} options - 视频播放的配置选项
   */
  constructor(videoElement: HTMLVideoElement, options: VideoOptions = {}) {
      this.videoElement = videoElement;
      this.cache = new Map();
      this.options = options;
      
      if (this.options.preload && !this.options.streaming) {
          this.preloadVideo(this.videoElement.src);
      }
  }

  /**
   * 预加载视频资源并缓存
   * @param {string} url - 视频的URL地址
   * @returns {Promise<void>}
   * @description 如果启用了缓存选项，该函数会在加载时将视频内容缓存起来，以供后续快速访问。
   */
  private async preloadVideo(url: string): Promise<void> {
      if (this.options.useCache && this.cache.has(url)) {
          this.videoElement.src = URL.createObjectURL(this.cache.get(url)!);
      } else {
          try {
              const response = await fetch(url);
              const videoBlob = await response.blob();
              this.cache.set(url, videoBlob);
              this.videoElement.src = URL.createObjectURL(videoBlob);
          } catch (error) {
              console.error("预加载视频失败:", error);
          }
      }
  }

  /**
   * 加载并播放视频
   * @param {string} url - 视频的URL地址
   * @returns {Promise<void>}
   * @description 该函数根据配置选项决定是否使用缓存或启用实时流播放。
   */
  async loadAndPlay(url: string): Promise<void> {
      if (this.options.streaming) {
          console.warn("实时流模式下无法加载本地视频文件。");
          return;
      }

      if (this.options.useCache && this.cache.has(url)) {
          this.videoElement.src = URL.createObjectURL(this.cache.get(url)!);
      } else {
          try {
              const response = await fetch(url);
              const videoBlob = await response.blob();
              this.cache.set(url, videoBlob);
              this.videoElement.src = URL.createObjectURL(videoBlob);
          } catch (error) {
              console.error("加载视频失败:", error);
          }
      }
      
      this.videoElement.play();
  }

  /**
   * 切换到实时流播放模式
   * @param {MediaStream} stream - 实时流对象
   * @description 启用实时流处理，用于显示来自摄像头或其他实时数据源的视频流。
   */
  enableStreaming(stream: MediaStream): void {
      this.videoElement.srcObject = stream;
      this.options.streaming = true;
      this.videoElement.play();
  }

  /**
   * 暂停视频播放
   * @description 该函数暂停当前的视频播放。
   */
  pause(): void {
      this.videoElement.pause();
  }

  /**
   * 恢复视频播放
   * @description 该函数恢复暂停中的视频播放。
   */
  resume(): void {
      if (this.options.streaming) {
          console.warn("实时流模式下无法恢复本地视频播放。");
          return;
      }
      this.videoElement.play();
  }

  /**
   * 停止视频播放并重置播放时间
   * @description 停止当前的视频播放并将播放进度重置到0。
   */
  stop(): void {
      this.pause();
      this.videoElement.currentTime = 0;
  }

  /**
   * 清除缓存
   * @description 清空视频缓存数据，以释放内存。
   */
  clearCache(): void {
      this.cache.clear();
  }
  
  /**
   * 调整视频的播放速率
   * @param {number} rate - 播放速率，1.0 表示正常速率
   * @description 根据需要动态调整视频的播放速率。
   */
  setPlaybackRate(rate: number): void {
      this.videoElement.playbackRate = rate;
  }

  /**
   * 截取当前视频帧
   * @returns {HTMLCanvasElement} 返回一个包含当前视频帧的Canvas元素
   * @description 提供视频帧的截屏功能，将当前帧保存到Canvas中。
   */
  captureFrame(): HTMLCanvasElement {
      const canvas = document.createElement('canvas');
      canvas.width = this.videoElement.videoWidth;
      canvas.height = this.videoElement.videoHeight;
      const ctx = canvas.getContext('2d');
      if (ctx) {
          ctx.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
      }
      return canvas;
  }

  /**
   * 销毁视频对象，清理资源
   * @description 释放视频相关的资源，包括缓存和视频元素对象，避免内存泄漏。
   */
  destroy(): void {
      this.clearCache();
      this.videoElement.srcObject = null;
      this.videoElement.src = '';
      this.videoElement.load();
  }
}

/*
使用示例：

const videoElement = document.querySelector('video') as HTMLVideoElement;
const videoPlayer = new Video(videoElement, { useCache: true, preload: true });

// 加载并播放视频
videoPlayer.loadAndPlay('https://example.com/video.mp4');

// 暂停视频
videoPlayer.pause();

// 调整播放速率
videoPlayer.setPlaybackRate(1.5);

// 捕捉当前帧
const frameCanvas = videoPlayer.captureFrame();
document.body.appendChild(frameCanvas);

// 切换到实时流
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
      videoPlayer.enableStreaming(stream);
  });

// 销毁视频对象，清理资源
videoPlayer.destroy();

*/
