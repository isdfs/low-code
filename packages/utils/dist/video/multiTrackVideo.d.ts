/**
 * 多轨道视频合成
 * @param {HTMLVideoElement[]} videoTracks - 视频轨道元素数组
 * @param {HTMLAudioElement[]} audioTracks - 音频轨道元素数组
 * @returns {Promise<Blob>} 返回合成后的多轨道视频Blob对象
 * @description 该函数将多个视频轨道和音频轨道合成为一个多轨道的视频文件。
 */
export declare function multiTrackVideo(videoTracks: HTMLVideoElement[], audioTracks: HTMLAudioElement[]): Promise<Blob>;
