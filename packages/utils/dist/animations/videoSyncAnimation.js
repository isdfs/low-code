"use strict";
/**
* VideoSyncAnimation 类实现了视频同步动画。
*/
var VideoSyncAnimation = /** @class */ (function () {
    function VideoSyncAnimation(options) {
        this.videoElement = options.videoElement;
        this.animation = options.animation;
        this.init();
    }
    /**
     * init 方法初始化视频同步事件监听器。
     */
    VideoSyncAnimation.prototype.init = function () {
        this.videoElement.addEventListener('play', this.handlePlay.bind(this));
        this.videoElement.addEventListener('pause', this.handlePause.bind(this));
        this.videoElement.addEventListener('seeked', this.handleSeek.bind(this));
    };
    /**
     * handlePlay 方法在视频播放时启动动画。
     */
    VideoSyncAnimation.prototype.handlePlay = function () {
        this.animation.start();
    };
    /**
     * handlePause 方法在视频暂停时停止动画。
     */
    VideoSyncAnimation.prototype.handlePause = function () {
        this.animation.stop();
    };
    /**
     * handleSeek 方法在视频跳转时调整动画进度。
     */
    VideoSyncAnimation.prototype.handleSeek = function () {
        var progress = this.videoElement.currentTime / this.videoElement.duration;
        // 假设动画的时间轴与视频的时间轴一致
        var easedProgress = progress * this.animation.options.duration;
        this.animation.start(); // 重启动画以同步进度
    };
    return VideoSyncAnimation;
}());
/**
* 使用示例：
* const videoElement = document.querySelector('video#myVideo') as HTMLVideoElement
*/
