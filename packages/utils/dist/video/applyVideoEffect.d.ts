/**
 * 视频特效应用
 * @param {HTMLVideoElement} videoElement - 要应用特效的视频元素
 * @param {(ctx: CanvasRenderingContext2D) => void} effect - 应用的特效函数
 * @returns {void}
 * @description 该函数允许用户在视频流上应用实时特效，通过一个自定义的特效函数修改Canvas渲染上下文。
 */
export declare function applyVideoEffect(videoElement: HTMLVideoElement, effect: (ctx: CanvasRenderingContext2D) => void): void;
