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
export declare function createVideoPlayer(src: string): HTMLVideoElement;
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
export declare function playVideo(video: HTMLVideoElement): void;
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
export declare function pauseVideo(video: HTMLVideoElement): void;
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
export declare function stopVideo(video: HTMLVideoElement): void;
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
export declare function toggleFullscreen2(video: HTMLVideoElement): void;
