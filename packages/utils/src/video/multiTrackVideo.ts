// 文件名: multiTrackVideo.ts

/**
 * 多轨道视频合成
 * @param {HTMLVideoElement[]} videoTracks - 视频轨道元素数组
 * @param {HTMLAudioElement[]} audioTracks - 音频轨道元素数组
 * @returns {Promise<Blob>} 返回合成后的多轨道视频Blob对象
 * @description 该函数将多个视频轨道和音频轨道合成为一个多轨道的视频文件。
 */
export async function multiTrackVideo(videoTracks: HTMLVideoElement[], audioTracks: HTMLAudioElement[]): Promise<Blob> {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
      throw new Error("无法获取Canvas上下文。");
  }

  // 设置Canvas尺寸为第一个视频的分辨率
  canvas.width = videoTracks[0].videoWidth;
  canvas.height = videoTracks[0].videoHeight;

  const stream = canvas.captureStream();
  const mediaRecorder = new MediaRecorder(stream);
  const chunks: Blob[] = [];

  mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
          chunks.push(e.data);
      }
  };

  // 将音频轨道添加到流中
  audioTracks.forEach((audioTrack: any) => {
      const audioStream = audioTrack.captureStream();
      audioStream.getAudioTracks().forEach((track: any) => stream.addTrack(track));
  });

  mediaRecorder.start();

  // 渲染视频轨道到Canvas
  for (let i = 0; i < videoTracks.length; i++) {
      videoTracks[i].play();
      while (!videoTracks[i].ended) {
          ctx.drawImage(videoTracks[i], 0, 0, canvas.width, canvas.height);
          await new Promise((resolve) => setTimeout(resolve, 1000 / 30)); // 这里假设使用30帧率
      }
      videoTracks[i].pause();
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

import { multiTrackVideo } from './multiTrackVideo';

// 假设已经有多个HTMLVideoElement和HTMLAudioElement实例
const videoElements = [
  document.getElementById('video1') as HTMLVideoElement,
  document.getElementById('video2') as HTMLVideoElement,
];
const audioElements = [
  document.getElementById('audio1') as HTMLAudioElement,
  document.getElementById('audio2') as HTMLAudioElement,
];

multiTrackVideo(videoElements, audioElements).then(videoBlob => {
  const url = URL.createObjectURL(videoBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'multi_track_output.webm';
  a.click(); // 触发下载合成的视频文件
}).catch(error => {
  console.error('合成视频失败:', error);
});

*/
