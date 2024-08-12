/**
 * 添加视频水印
 * @param {HTMLVideoElement} videoElement - 要添加水印的视频元素
 * @param {HTMLImageElement} watermarkImage - 水印图片元素
 * @param {number} x - 水印在视频中的X坐标
 * @param {number} y - 水印在视频中的Y坐标
 * @returns {void}
 * @description 该函数在视频播放过程中动态添加水印，适用于版权保护或品牌推广。
 */
export declare function addWatermark(videoElement: HTMLVideoElement, watermarkImage: HTMLImageElement, x: number, y: number): void;
