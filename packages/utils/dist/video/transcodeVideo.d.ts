/**
 * 视频转码
 * @param {Blob} videoBlob - 要转码的视频Blob对象
 * @param {string} mimeType - 目标视频的MIME类型
 * @returns {Promise<Blob>} 返回转码后的视频Blob对象
 * @description 该函数将视频文件从一种格式转码为另一种格式，适用于需要支持不同设备或平台的场景。
 */
export declare function transcodeVideo(videoBlob: Blob, mimeType: string): Promise<Blob>;
/**
使用示例:

import { transcodeVideo } from './transcodeVideo';

const inputVideoBlob = new Blob([/* 视频文件数据 ], { type: 'video/mp4' });

/**transcodeVideo(inputVideoBlob, 'video/webm').then(transcodedBlob => {
  const url = URL.createObjectURL(transcodedBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'transcoded_video.webm';
  a.click(); // 触发下载转码后的视频文件
}).catch(error => {
  console.error('转码失败:', error);
});

*/
