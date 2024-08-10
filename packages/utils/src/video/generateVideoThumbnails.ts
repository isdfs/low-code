// 文件名: generateVideoThumbnails.ts

/**
 * 生成视频缩略图
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} captureTimes - 需要捕捉的时间点数组（单位：秒）
 * @returns {Promise<HTMLCanvasElement[]>} 返回包含缩略图的Canvas元素数组
 * @description 该函数从视频中捕捉多个时间点的帧，生成相应的缩略图。
 */
export async function generateVideoThumbnails(videoElement: HTMLVideoElement, captureTimes: number[]): Promise<HTMLCanvasElement[]> {
  const thumbnails: HTMLCanvasElement[] = [];

  for (let time of captureTimes) {
      videoElement.currentTime = time;

      await new Promise<void>((resolve) => {
          videoElement.addEventListener('seeked', function onSeeked() {
              videoElement.removeEventListener('seeked', onSeeked);

              const canvas = document.createElement('canvas');
              canvas.width = videoElement.videoWidth;
              canvas.height = videoElement.videoHeight;

              const ctx = canvas.getContext('2d');
              if (ctx) {
                  ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                  thumbnails.push(canvas);
              }
              resolve();
          });
      });
  }

  return thumbnails;
}

/*
使用示例:

import { generateVideoThumbnails } from './generateVideoThumbnails';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const captureTimes = [5, 10, 15]; // 捕捉视频5秒、10秒和15秒的缩略图

generateVideoThumbnails(videoElement, captureTimes).then(thumbnails => {
  thumbnails.forEach((thumbnail, index) => {
      document.body.appendChild(thumbnail); // 在页面中显示每个缩略图
  });
}).catch(error => {
  console.error('生成缩略图失败:', error);
});

*/
