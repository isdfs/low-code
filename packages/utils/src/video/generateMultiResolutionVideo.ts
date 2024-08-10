// 文件名: generateMultiResolutionVideo.ts

/**
 * 生成多分辨率视频
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} resolutions - 需要生成的分辨率数组（如[480, 720, 1080]）
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob[]>} 返回生成的多分辨率视频Blob对象数组
 * @description 该函数将输入视频处理为多种分辨率版本，适用于响应式视频流。
 */
export async function generateMultiResolutionVideo(videoElement: HTMLVideoElement, resolutions: number[], mimeType: string): Promise<Blob[]> {
  const results: Blob[] = [];
  
  for (let resolution of resolutions) {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
          throw new Error("无法获取Canvas上下文。");
      }

      canvas.width = resolution * (videoElement.videoWidth / videoElement.videoHeight);
      canvas.height = resolution;

      const stream = canvas.captureStream();
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
      const chunks: Blob[] = [];

      mediaRecorder.ondataavailable = (e) => {
          if (e.data.size > 0) {
              chunks.push(e.data);
          }
      };

      await new Promise<void>((resolve, reject) => {
          videoElement.addEventListener('play', function handler() {
              videoElement.removeEventListener('play', handler);

              const renderFrame = () => {
                  if (!videoElement.paused && !videoElement.ended) {
                      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                      requestAnimationFrame(renderFrame);
                  } else {
                      mediaRecorder.stop();
                  }
              };

              renderFrame();
              mediaRecorder.start();
          });

          mediaRecorder.onstop = () => {
              results.push(new Blob(chunks, { type: mimeType }));
              resolve();
          };

          videoElement.play();
      });
  }

  return results;
}

/*
使用示例:

import { generateMultiResolutionVideo } from './generateMultiResolutionVideo';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const resolutions = [480, 720, 1080];

generateMultiResolutionVideo(videoElement, resolutions, 'video/webm').then(videoBlobs => {
  videoBlobs.forEach((blob, index) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `video_${resolutions[index]}p.webm`;
      a.click(); // 触发下载每个分辨率的视频文件
  });
}).catch(error => {
  console.error('生成多分辨率视频失败:', error);
});

*/
