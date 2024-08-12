/**
 * 视频剪辑
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number} startTime - 剪辑的起始时间（单位：秒）
 * @param {number} endTime - 剪辑的结束时间（单位：秒）
 * @returns {Promise<Blob>} 返回剪辑后的视频Blob对象
 * @description 该函数从视频中剪辑指定时间段的片段，并返回一个新的视频文件。
 */
export declare function clipVideo(videoElement: HTMLVideoElement, startTime: number, endTime: number): Promise<Blob>;
