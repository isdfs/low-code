// 文件名: renderTextOnVideo.ts

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
export function renderTextOnVideo(videoElement: HTMLVideoElement, text: string, x: number, y: number, font: string = '30px Arial', color: string = 'white'): void {
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
              ctx.font = font;
              ctx.fillStyle = color;
              ctx.fillText(text, x, y);
              requestAnimationFrame(renderFrame);
          }
      };
      renderFrame();
  });

  videoElement.srcObject = canvas.captureStream();
}

/*
使用示例:

import { renderTextOnVideo } from './renderTextOnVideo';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;

renderTextOnVideo(videoElement, 'Hello World!', 50, 50, '40px Arial', 'red');
videoElement.play();

*/
