"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleFullscreen2 = exports.stopVideo = exports.pauseVideo = exports.playVideo = exports.createVideoPlayer = void 0;
/**
 * 视频播放管理。
 *
 * 该模块提供了一个简单的接口来控制视频的播放、暂停、停止和全屏，适用于视频播放器功能。
 *
 * @param {string} src - 视频文件的URL。
 *
 * @returns {HTMLVideoElement} 返回Video元素实例。
 *
 * @example
 * ```
 * const video = createVideoPlayer('path/to/video.mp4');
 * playVideo(video);
 * pauseVideo(video);
 * stopVideo(video);
 * toggleFullscreen(video);
 * ```
 */
function createVideoPlayer(src) {
    var video = document.createElement('video');
    video.src = src;
    return video;
}
exports.createVideoPlayer = createVideoPlayer;
/**
* 播放视频。
*
* @param {HTMLVideoElement} video - 要播放的Video元素。
*
* @returns {void}
*
* @example
* ```
* playVideo(video);
* ```
*/
function playVideo(video) {
    video.play().catch(function (error) { return console.error('视频播放失败:', error); });
}
exports.playVideo = playVideo;
/**
* 暂停视频。
*
* @param {HTMLVideoElement} video - 要暂停的Video元素。
*
* @returns {void}
*
* @example
* ```
* pauseVideo(video);
* ```
*/
function pauseVideo(video) {
    video.pause();
}
exports.pauseVideo = pauseVideo;
/**
* 停止视频播放。
*
* 该方法会将视频播放位置重置为开始位置，并暂停播放。
*
* @param {HTMLVideoElement} video - 要停止的Video元素。
*
* @returns {void}
*
* @example
* ```
* stopVideo(video);
* ```
*/
function stopVideo(video) {
    video.pause();
    video.currentTime = 0;
}
exports.stopVideo = stopVideo;
/**
* 切换视频全屏模式。
*
* 该方法用于切换视频元素的全屏模式。
*
* @param {HTMLVideoElement} video - 要切换全屏的Video元素。
*
* @returns {void}
*
* @example
* ```
* toggleFullscreen(video);
* ```
*/
function toggleFullscreen2(video) {
    if (!document.fullscreenElement) {
        video.requestFullscreen().catch(function (err) { return console.error("\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F\u6A21\u5F0F: ".concat(err.message)); });
    }
    else {
        document.exitFullscreen().catch(function (err) { return console.error("\u65E0\u6CD5\u9000\u51FA\u5168\u5C4F\u6A21\u5F0F: ".concat(err.message)); });
    }
}
exports.toggleFullscreen2 = toggleFullscreen2;
