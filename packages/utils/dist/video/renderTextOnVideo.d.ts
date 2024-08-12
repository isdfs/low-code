/**
 * 视频中的文本渲染
 * @param {HTMLVideoElement} videoElement - 要渲染文本的视频元素
 * @param {string} text - 要渲染的文本内容
 * @param {number} x - 文本在视频中的X坐标
 * @param {number} y - 文本在视频中的Y坐标
 * @param {string} font - 文本的字体样式
 * @param {string} color - 文本的颜色
 * @returns {void}
 * @description 该函数在视频播放过程中动态渲染文本，用于标题、字幕或水印。
 */
export declare function renderTextOnVideo(videoElement: HTMLVideoElement, text: string, x: number, y: number, font?: string, color?: string): void;
