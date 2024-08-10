// 文件名: applyDynamicEffects.ts

/**
 * 应用视频动态特效链
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {Array<(ctx: CanvasRenderingContext2D) => void>} effects - 特效处理函数数组
 * @returns {Promise<void>}
 * @description 该函数按照顺序应用多个特效到视频帧上，形成一个动态特效链。
 */
export async function applyDynamicEffects(videoElement: HTMLVideoElement, effects: Array<(ctx: CanvasRenderingContext2D) => void>): Promise<void> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  videoElement.addEventListener('play', () => {
      const renderFrame = () => {
          if (!videoElement.paused && !videoElement.ended) {
              ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
              
              // 按顺序应用特效
              for (let effect of effects) {
                  effect(ctx);
              }
              
              requestAnimationFrame(renderFrame);
          }
      };
      renderFrame();
  });

  videoElement.srcObject = canvas.captureStream();
}

/*
使用示例:

import { applyDynamicEffects } from './applyDynamicEffects';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;

// 创建一个特效链：先应用灰度滤镜，再应用反色效果
const effects = [
  (ctx: CanvasRenderingContext2D) => {
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
      }
      ctx.putImageData(imageData, 0, 0);
  },
  (ctx: CanvasRenderingContext2D) => {
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
      }
      ctx.putImageData(imageData, 0, 0);
  }
];

applyDynamicEffects(videoElement, effects).then(() => {
  videoElement.play();
}).catch(error => {
  console.error('应用动态特效失败:', error);
});

*/
