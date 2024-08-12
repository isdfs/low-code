/**
 * 视频声音增强处理
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {(audioContext: AudioContext, sourceNode: MediaElementAudioSourceNode) => void} audioProcessor - 音频处理函数
 * @returns {void}
 * @description 该函数允许用户对视频音频进行增强处理，例如提升音量或应用均衡器。
 */
export declare function enhanceVideoAudio(videoElement: HTMLVideoElement, audioProcessor: (audioContext: AudioContext, sourceNode: MediaElementAudioSourceNode) => void): void;
