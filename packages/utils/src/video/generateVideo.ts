// 文件名: generateVideo.ts

/**
 * 生成视频
 * @param {HTMLVideoElement[]} videos - 需要合成的视频元素数组
 * @param {number} [frameRate=30] - 视频的帧率
 * @returns {Promise<Blob>} 返回生成的视频文件Blob对象
 * @description 该函数将多个视频片段合成为一个新的视频，并返回该视频的Blob对象。
 */
export async function generateVideo(videos: HTMLVideoElement[], frameRate: number = 30): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  // 设置Canvas尺寸为第一个视频的分辨率
  canvas.width = videos[0].videoWidth;
  canvas.height = videos[0].videoHeight;

  // 创建媒体记录器
  const stream = canvas.captureStream(frameRate);
  const mediaRecorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];

  mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
          chunks.push(e.data);
      }
  };

  mediaRecorder.start();

  // 逐帧渲染视频到Canvas
  for (let i = 0; i < videos.length; i++) {
      videos[i].play();
      while (!videos[i].ended) {
          ctx.drawImage(videos[i], 0, 0, canvas.width, canvas.height);
          await new Promise((resolve) => setTimeout(resolve, 1000 / frameRate));
      }
      videos[i].pause();
  }

  mediaRecorder.stop();

  return new Promise<Blob>((resolve) => {
      mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/webm' });
          resolve(blob);
      };
  });
}

/*
使用示例:

import { generateVideo } from './generateVideo';

// 假设已经有三个HTMLVideoElement实例
const videoElements = [
  document.getElementById('video1') as HTMLVideoElement,
  document.getElementById('video2') as HTMLVideoElement,
  document.getElementById('video3') as HTMLVideoElement,
];

generateVideo(videoElements, 30).then(videoBlob => {
  const url = URL.createObjectURL(videoBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'output.webm';
  a.click(); // 触发下载生成的视频文件
}).catch(error => {
  console.error('生成视频失败:', error);
});

*/
