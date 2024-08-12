/**
 * 生成视频
 * @param {HTMLVideoElement[]} videos - 需要合成的视频元素数组
 * @param {number} [frameRate=30] - 视频的帧率
 * @returns {Promise<Blob>} 返回生成的视频文件Blob对象
 * @description 该函数将多个视频片段合成为一个新的视频，并返回该视频的Blob对象。
 */
export declare function generateVideo(videos: HTMLVideoElement[], frameRate?: number): Promise<Blob>;
