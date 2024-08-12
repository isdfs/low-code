/**
 * 视频帧到帧过渡效果
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {(ctx: CanvasRenderingContext2D, frameIndex: number, totalFrames: number) => void} transitionEffect - 过渡效果处理函数
 * @returns {Promise<void>}
 * @description 该函数在视频的帧与帧之间添加过渡效果，使得视频播放更加流畅和具有视觉冲击力。
 */
export declare function frameToFrameTransition(videoElement: HTMLVideoElement, transitionEffect: (ctx: CanvasRenderingContext2D, frameIndex: number, totalFrames: number) => void): Promise<void>;
