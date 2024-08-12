/**
 * VideoSyncAnimationOptions 用于配置视频同步动画的选项。
 * @param videoElement - 目标视频元素。
 * @param animation - 要执行的 KeyframeAnimation 实例。
 */
interface VideoSyncAnimationOptions {
  videoElement: HTMLVideoElement;
  animation: any;
}

/**
* VideoSyncAnimation 类实现了视频同步动画。
*/
class VideoSyncAnimation {
  private videoElement: HTMLVideoElement;
  private animation: any;

  constructor(options: VideoSyncAnimationOptions) {
      this.videoElement = options.videoElement;
      this.animation = options.animation;
      this.init();
  }

  /**
   * init 方法初始化视频同步事件监听器。
   */
  private init() {
      this.videoElement.addEventListener('play', this.handlePlay.bind(this));
      this.videoElement.addEventListener('pause', this.handlePause.bind(this));
      this.videoElement.addEventListener('seeked', this.handleSeek.bind(this));
  }

  /**
   * handlePlay 方法在视频播放时启动动画。
   */
  private handlePlay() {
      this.animation.start();
  }

  /**
   * handlePause 方法在视频暂停时停止动画。
   */
  private handlePause() {
      this.animation.stop();
  }

  /**
   * handleSeek 方法在视频跳转时调整动画进度。
   */
  private handleSeek() {
      const progress = this.videoElement.currentTime / this.videoElement.duration;
      // 假设动画的时间轴与视频的时间轴一致
      const easedProgress = progress * this.animation.options.duration;
      this.animation.start(); // 重启动画以同步进度
  }
}

/**
* 使用示例：
* const videoElement = document.querySelector('video#myVideo') as HTMLVideoElement
*/
