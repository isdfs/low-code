// 文件名: getFirstFrame.ts

/**
 * 获取视频的首帧
 * @param {string} url - 视频的URL地址
 * @returns {Promise<HTMLCanvasElement>} 返回一个包含首帧图像的Canvas元素
 * @description 该函数加载视频并提取首帧图像，适用于生成视频预览或缩略图。
 */
export async function getFirstFrame(url: string): Promise<HTMLCanvasElement> {
  return new Promise<HTMLCanvasElement>((resolve, reject) => {
      const video = document.createElement('video');
      video.src = url;
      video.crossOrigin = 'anonymous';
      video.muted = true;
      video.currentTime = 0;

      video.addEventListener('loadeddata', () => {
          const canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          const ctx = canvas.getContext('2d');
          if (ctx) {
              ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              resolve(canvas);
          } else {
              reject(new Error("无法获取Canvas上下文。"));
          }
      });

      video.addEventListener('error', (e) => {
          reject(e);
      });
  });
}

/*
使用示例:

import { getFirstFrame } from './getFirstFrame';

const url = 'https://example.com/video.mp4';
getFirstFrame(url).then(canvas => {
  document.body.appendChild(canvas); // 在页面中显示首帧图像
}).catch(error => {
  console.error('获取首帧失败:', error);
});

*/
