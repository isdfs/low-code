/**
 * 音频播放管理。
 * 
 * 该模块提供了一个简单的接口来控制音频的播放、暂停和停止，适用于音频播放器功能。
 * 
 * @param {string} src - 音频文件的URL。
 * 
 * @returns {HTMLAudioElement} 返回Audio元素实例。
 * 
 * @example
 * ```
 * const audio = createAudioPlayer('path/to/audio.mp3');
 * playAudio(audio);
 * pauseAudio(audio);
 * stopAudio(audio);
 * ```
 */
export function createAudioPlayer(src: string): HTMLAudioElement {
  const audio = new Audio(src);
  return audio;
}

/**
* 播放音频。
* 
* @param {HTMLAudioElement} audio - 要播放的Audio元素。
* 
* @returns {void}
* 
* @example
* ```
* playAudio(audio);
* ```
*/
export function playAudio(audio: HTMLAudioElement): void {
  audio.play().catch(error => console.error('音频播放失败:', error));
}

/**
* 暂停音频。
* 
* @param {HTMLAudioElement} audio - 要暂停的Audio元素。
* 
* @returns {void}
* 
* @example
* ```
* pauseAudio(audio);
* ```
*/
export function pauseAudio(audio: HTMLAudioElement): void {
  audio.pause();
}

/**
* 停止音频播放。
* 
* 该方法会将音频播放位置重置为开始位置，并暂停播放。
* 
* @param {HTMLAudioElement} audio - 要停止的Audio元素。
* 
* @returns {void}
* 
* @example
* ```
* stopAudio(audio);
* ```
*/
export function stopAudio(audio: HTMLAudioElement): void {
  audio.pause();
  audio.currentTime = 0;
}
