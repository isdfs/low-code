/**
 * 生成多分辨率视频
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} resolutions - 需要生成的分辨率数组（如[480, 720, 1080]）
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob[]>} 返回生成的多分辨率视频Blob对象数组
 * @description 该函数将输入视频处理为多种分辨率版本，适用于响应式视频流。
 */
export declare function generateMultiResolutionVideo(videoElement: HTMLVideoElement, resolutions: number[], mimeType: string): Promise<Blob[]>;
