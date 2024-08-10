// 文件名: clipVideo.ts

/**
 * 视频剪辑
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number} startTime - 剪辑的起始时间（单位：秒）
 * @param {number} endTime - 剪辑的结束时间（单位：秒）
 * @returns {Promise<Blob>} 返回剪辑后的视频Blob对象
 * @description 该函数从视频中剪辑指定时间段的片段，并返回一个新的视频文件。
 */
export async function clipVideo(videoElement: HTMLVideoElement, startTime: number, endTime: number): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const stream = canvas.captureStream();
  const mediaRecorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];

  mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
          chunks.push(e.data);
      }
  };

  videoElement.currentTime = startTime;

  return new Promise<Blob>((resolve, reject) => {
      videoElement.addEventListener('seeked', function onSeeked() {
          videoElement.removeEventListener('seeked', onSeeked);
          videoElement.play();
          mediaRecorder.start();

          setTimeout(() => {
              videoElement.pause();
              mediaRecorder.stop();
          }, (endTime - startTime) * 1000);
      });

      mediaRecorder.onstop = () => {
          resolve(new Blob(chunks, { type: 'video/webm' }));
      };

      videoElement.addEventListener('error', (e) => {
          reject(e);
      });
  });
}

/*
使用示例:

import { clipVideo } from './clipVideo';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const startTime = 10; // 剪辑开始时间，单位：秒
const endTime = 20; // 剪辑结束时间，单位：秒

clipVideo(videoElement, startTime, endTime).then(clippedBlob => {
  const url = URL.createObjectURL(clippedBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'clipped_video.webm';
  a.click(); // 触发下载剪辑后的视频文件
}).catch(error => {
  console.error('视频剪辑失败:', error);
});

*/
