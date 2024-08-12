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
declare class VideoSyncAnimation {
    private videoElement;
    private animation;
    constructor(options: VideoSyncAnimationOptions);
    /**
     * init 方法初始化视频同步事件监听器。
     */
    private init;
    /**
     * handlePlay 方法在视频播放时启动动画。
     */
    private handlePlay;
    /**
     * handlePause 方法在视频暂停时停止动画。
     */
    private handlePause;
    /**
     * handleSeek 方法在视频跳转时调整动画进度。
     */
    private handleSeek;
}
/**
* 使用示例：
* const videoElement = document.querySelector('video#myVideo') as HTMLVideoElement
*/
