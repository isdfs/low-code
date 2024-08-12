/**
 * 视频帧捕捉与拼接
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} captureTimes - 需要捕捉的时间点数组（单位：秒）
 * @param {number} frameRate - 生成视频的帧率
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob>} 返回拼接后的视频Blob对象
 * @description 该函数从视频中捕捉指定时间点的帧，并将这些帧拼接为一个新的视频文件。
 */
export declare function captureAndStitchFrames(videoElement: HTMLVideoElement, captureTimes: number[], frameRate: number, mimeType: string): Promise<Blob>;
