// 文件名: splitAndMergeVideo.ts

/**
 * 视频分割
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} splitPoints - 分割点的时间数组（单位：秒）
 * @returns {Promise<Blob[]>} 返回分割后的视频片段Blob数组
 * @description 该函数将视频按照指定的时间点分割为多个片段。
 */
export async function splitVideo(videoElement: HTMLVideoElement, splitPoints: number[]): Promise<Blob[]> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const segments: Blob[] = [];

  for (let i = 0; i < splitPoints.length - 1; i++) {
      const startTime = splitPoints[i];
      const endTime = splitPoints[i + 1];

      videoElement.currentTime = startTime;
      await new Promise<void>((resolve) => {
          videoElement.addEventListener('seeked', function onSeeked() {
              videoElement.removeEventListener('seeked', onSeeked);
              videoElement.play();

              const stream = canvas.captureStream();
              const mediaRecorder = new MediaRecorder(stream);
              const chunks: Blob[] = [];

              mediaRecorder.ondataavailable = (e) => {
                  if (e.data.size > 0) {
                      chunks.push(e.data);
                  }
              };

              mediaRecorder.start();

              setTimeout(() => {
                  videoElement.pause();
                  mediaRecorder.stop();
                  mediaRecorder.onstop = () => {
                      segments.push(new Blob(chunks, { type: 'video/webm' }));
                      resolve();
                  };
              }, (endTime - startTime) * 1000);
          });
      });
  }

  return segments;
}

/**
* 视频重组
* @param {Blob[]} videoSegments - 要重组的视频片段Blob数组
* @param {string} mimeType - 生成的视频MIME类型
* @returns {Promise<Blob>} 返回重组后的视频Blob对象
* @description 该函数将多个视频片段重新组合为一个新的视频文件。
*/
export async function mergeVideoSegments(videoSegments: Blob[], mimeType: string): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  let firstVideo = document.createElement('video');
  firstVideo.src = URL.createObjectURL(videoSegments[0]);
  await new Promise<void>((resolve) => {
      firstVideo.onloadedmetadata = () => {
          canvas.width = firstVideo.videoWidth;
          canvas.height = firstVideo.videoHeight;
          resolve();
      };
  });

  const stream = canvas.captureStream();
  const mediaRecorder = new MediaRecorder(stream, { mimeType });
  const chunks: Blob[] = [];

  mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
          chunks.push(e.data);
      }
  };

  mediaRecorder.start();

  for (let blob of videoSegments) {
      const videoElement = document.createElement('video');
      videoElement.src = URL.createObjectURL(blob);

      await new Promise<void>((resolve) => {
          videoElement.onloadeddata = () => {
              videoElement.play();
              const renderFrame = () => {
                  if (!videoElement.paused && !videoElement.ended) {
                      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                      requestAnimationFrame(renderFrame);
                  } else {
                      resolve();
                  }
              };
              renderFrame();
          };
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

import { splitVideo, mergeVideoSegments } from './splitAndMergeVideo';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const splitPoints = [0, 10, 20, 30]; // 在0秒、10秒、20秒和30秒处分割

splitVideo(videoElement, splitPoints).then(segments => {
  mergeVideoSegments(segments, 'video/webm').then(mergedBlob => {
      const url = URL.createObjectURL(mergedBlob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'merged_video.webm';
      a.click(); // 触发下载重组后的视频文件
  }).catch(error => {
      console.error('重组视频失败:', error);
  });
}).catch(error => {
  console.error('视频分割失败:', error);
});

*/
