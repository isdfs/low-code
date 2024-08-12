/**
 * 视频分割
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} splitPoints - 分割点的时间数组（单位：秒）
 * @returns {Promise<Blob[]>} 返回分割后的视频片段Blob数组
 * @description 该函数将视频按照指定的时间点分割为多个片段。
 */
export declare function splitVideo(videoElement: HTMLVideoElement, splitPoints: number[]): Promise<Blob[]>;
/**
* 视频重组
* @param {Blob[]} videoSegments - 要重组的视频片段Blob数组
* @param {string} mimeType - 生成的视频MIME类型
* @returns {Promise<Blob>} 返回重组后的视频Blob对象
* @description 该函数将多个视频片段重新组合为一个新的视频文件。
*/
export declare function mergeVideoSegments(videoSegments: Blob[], mimeType: string): Promise<Blob>;
