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
export function createVideoPlayer(src: string): HTMLVideoElement {
  const video = document.createElement('video');
  video.src = src;
  return video;
}

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
export function playVideo(video: HTMLVideoElement): void {
  video.play().catch(error => console.error('视频播放失败:', error));
}

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
export function pauseVideo(video: HTMLVideoElement): void {
  video.pause();
}

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
export function stopVideo(video: HTMLVideoElement): void {
  video.pause();
  video.currentTime = 0;
}

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
export function toggleFullscreen2(video: HTMLVideoElement): void {
  if (!document.fullscreenElement) {
      video.requestFullscreen().catch(err => console.error(`无法进入全屏模式: ${err.message}`));
  } else {
      document.exitFullscreen().catch(err => console.error(`无法退出全屏模式: ${err.message}`));
  }
}
