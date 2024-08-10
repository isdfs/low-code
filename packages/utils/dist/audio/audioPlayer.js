"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopAudio = exports.pauseAudio = exports.playAudio = exports.createAudioPlayer = void 0;
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
function createAudioPlayer(src) {
    var audio = new Audio(src);
    return audio;
}
exports.createAudioPlayer = createAudioPlayer;
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
function playAudio(audio) {
    audio.play().catch(function (error) { return console.error('音频播放失败:', error); });
}
exports.playAudio = playAudio;
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
function pauseAudio(audio) {
    audio.pause();
}
exports.pauseAudio = pauseAudio;
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
function stopAudio(audio) {
    audio.pause();
    audio.currentTime = 0;
}
exports.stopAudio = stopAudio;
