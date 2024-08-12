/**
 * 应用视频动态特效链
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {Array<(ctx: CanvasRenderingContext2D) => void>} effects - 特效处理函数数组
 * @returns {Promise<void>}
 * @description 该函数按照顺序应用多个特效到视频帧上，形成一个动态特效链。
 */
export declare function applyDynamicEffects(videoElement: HTMLVideoElement, effects: Array<(ctx: CanvasRenderingContext2D) => void>): Promise<void>;
