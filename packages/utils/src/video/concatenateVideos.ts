// 文件名: concatenateVideos.ts

/**
 * 视频拼接
 * @param {Blob[]} videoBlobs - 需要拼接的视频Blob对象数组
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob>} 返回拼接后的视频Blob对象
 * @description 该函数将多个视频片段拼接为一个新的视频文件。
 */
export async function concatenateVideos(videoBlobs: Blob[], mimeType: string): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  let firstVideo = document.createElement('video');
  firstVideo.src = URL.createObjectURL(videoBlobs[0]);
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

  for (let blob of videoBlobs) {
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

import { concatenateVideos } from './concatenateVideos';

// const videoBlobs = [
//   new Blob([/* 第一个视频的数据 ], { type: 'video/mp4' }),
//   new Blob([/* 第二个视频的数据 ], { type: 'video/mp4' }),
//   new Blob([/* 第三个视频的数据 ], { type: 'video/mp4' })
// ];

// concatenateVideos(videoBlobs, 'video/webm').then(concatenatedBlob => {
//   const url = URL.createObjectURL(concatenatedBlob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'concatenated_video.webm';
//   a.click(); // 触发下载拼接后的视频文件
// }).catch(error => {
//   console.error('视频拼接失败:', error);
// });

// */
