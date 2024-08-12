/**
 * 实时视频过滤
 * @param {MediaStream} stream - 实时视频流
 * @param {(imageData: ImageData) => ImageData} filter - 应用的滤镜函数
 * @returns {HTMLVideoElement} 返回带有滤镜的HTMLVideoElement元素
 * @description 该函数允许在实时视频流上应用滤镜，并将结果显示在一个新的HTMLVideoElement中。
 */
export declare function applyRealTimeFilter(stream: MediaStream, filter: (imageData: ImageData) => ImageData): HTMLVideoElement;
