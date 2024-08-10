// 文件名: frameToFrameTransition.ts

/**
 * 视频帧到帧过渡效果
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {(ctx: CanvasRenderingContext2D, frameIndex: number, totalFrames: number) => void} transitionEffect - 过渡效果处理函数
 * @returns {Promise<void>}
 * @description 该函数在视频的帧与帧之间添加过渡效果，使得视频播放更加流畅和具有视觉冲击力。
 */
export async function frameToFrameTransition(videoElement: HTMLVideoElement, transitionEffect: (ctx: CanvasRenderingContext2D, frameIndex: number, totalFrames: number) => void): Promise<void> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  let totalFrames = Math.floor(videoElement.duration * 30); // 假设30帧率
  let frameIndex = 0;

  videoElement.addEventListener('play', () => {
      const renderFrame = () => {
          if (!videoElement.paused && !videoElement.ended) {
              ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
              transitionEffect(ctx, frameIndex, totalFrames);
              frameIndex++;
              requestAnimationFrame(renderFrame);
          }
      };
      renderFrame();
  });

  videoElement.srcObject = canvas.captureStream();
}

/*
使用示例:

import { frameToFrameTransition } from './frameToFrameTransition';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;

// 添加帧到帧之间的淡入淡出效果
frameToFrameTransition(videoElement, (ctx, frameIndex, totalFrames) => {
  const alpha = Math.sin((frameIndex / totalFrames) * Math.PI); // 使用正弦曲线模拟淡入淡出效果
  ctx.globalAlpha = alpha;
});

videoElement.play();

*/
