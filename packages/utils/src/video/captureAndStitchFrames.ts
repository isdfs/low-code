// 文件名: captureAndStitchFrames.ts

/**
 * 视频帧捕捉与拼接
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} captureTimes - 需要捕捉的时间点数组（单位：秒）
 * @param {number} frameRate - 生成视频的帧率
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob>} 返回拼接后的视频Blob对象
 * @description 该函数从视频中捕捉指定时间点的帧，并将这些帧拼接为一个新的视频文件。
 */
export async function captureAndStitchFrames(videoElement: HTMLVideoElement, captureTimes: number[], frameRate: number, mimeType: string): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const stream = canvas.captureStream(frameRate);
  const mediaRecorder = new MediaRecorder(stream, { mimeType });
  const chunks: Blob[] = [];

  mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
          chunks.push(e.data);
      }
  };

  mediaRecorder.start();

  for (let time of captureTimes) {
      videoElement.currentTime = time;
      await new Promise<void>((resolve) => {
          videoElement.addEventListener('seeked', function handler() {
              videoElement.removeEventListener('seeked', handler);
              ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
              setTimeout(resolve, 1000 / frameRate);
          });
      });
  }

  mediaRecorder.stop();

  return new Promise<Blob>((resolve) => {
      mediaRecorder.onstop = () => {
          resolve(new Blob(chunks, { type: mimeType }));
      };
  });
}

/*
使用示例:

import { captureAndStitchFrames } from './captureAndStitchFrames';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const captureTimes = [0, 5, 10, 15, 20]; // 捕捉0秒、5秒、10秒、15秒、20秒的帧

captureAndStitchFrames(videoElement, captureTimes, 1, 'video/webm').then(stitchedBlob => {
  const url = URL.createObjectURL(stitchedBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'stitched_video.webm';
  a.click(); // 触发下载拼接后的视频文件
}).catch(error => {
  console.error('帧捕捉与拼接失败:', error);
});

*/
