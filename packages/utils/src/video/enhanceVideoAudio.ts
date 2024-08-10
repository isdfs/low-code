// 文件名: enhanceVideoAudio.ts

/**
 * 视频声音增强处理
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {(audioContext: AudioContext, sourceNode: MediaElementAudioSourceNode) => void} audioProcessor - 音频处理函数
 * @returns {void}
 * @description 该函数允许用户对视频音频进行增强处理，例如提升音量或应用均衡器。
 */
export function enhanceVideoAudio(videoElement: HTMLVideoElement, audioProcessor: (audioContext: AudioContext, sourceNode: MediaElementAudioSourceNode) => void): void {
  const audioContext = new AudioContext();
  const sourceNode = audioContext.createMediaElementSource(videoElement);

  audioProcessor(audioContext, sourceNode);

  sourceNode.connect(audioContext.destination);
}

/*
使用示例:

import { enhanceVideoAudio } from './enhanceVideoAudio';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;

// 提升音量到两倍
enhanceVideoAudio(videoElement, (audioContext, sourceNode) => {
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 2; // 提升音量到两倍
  sourceNode.connect(gainNode);
  gainNode.connect(audioContext.destination);
});

videoElement.play();

*/
