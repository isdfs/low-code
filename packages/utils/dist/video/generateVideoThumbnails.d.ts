/**
 * 生成视频缩略图
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} captureTimes - 需要捕捉的时间点数组（单位：秒）
 * @returns {Promise<HTMLCanvasElement[]>} 返回包含缩略图的Canvas元素数组
 * @description 该函数从视频中捕捉多个时间点的帧，生成相应的缩略图。
 */
export declare function generateVideoThumbnails(videoElement: HTMLVideoElement, captureTimes: number[]): Promise<HTMLCanvasElement[]>;
