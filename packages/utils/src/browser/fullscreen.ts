/**
 * 全屏模式切换。
 * 
 * 该方法用于在浏览器中开启或退出全屏模式，可以应用于视频播放器、游戏等场景。
 * 
 * @returns {void}
 * 
 * @example
 * ```
 * toggleFullscreen(document.getElementById('myElement'));
 * 
 * document.addEventListener('fullscreenchange', () => {
 *   if (isFullscreen()) {
 *     console.log('当前处于全屏模式');
 *   } else {
 *     console.log('已退出全屏模式');
 *   }
 * });
 * ```
 */
export function toggleFullscreen(element: HTMLElement): void {
  if (!document.fullscreenElement) {
      element.requestFullscreen().catch(err => {
          console.error(`无法进入全屏模式: ${err.message}`);
      });
  } else {
      document.exitFullscreen().catch(err => {
          console.error(`无法退出全屏模式: ${err.message}`);
      });
  }
}

/**
* 检测当前是否处于全屏模式。
* 
* @returns {boolean} 若当前处于全屏模式，则返回 true，否则返回 false。
* 
* @example
* ```
* if (isFullscreen()) {
*   console.log('当前处于全屏模式');
* } else {
*   console.log('未处于全屏模式');
* }
* ```
*/
export function isFullscreen(): boolean {
  return !!document.fullscreenElement;
}
