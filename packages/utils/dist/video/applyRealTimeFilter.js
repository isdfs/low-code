"use strict";
// 文件名: applyRealTimeFilter.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRealTimeFilter = void 0;
/**
 * 实时视频过滤
 * @param {MediaStream} stream - 实时视频流
 * @param {(imageData: ImageData) => ImageData} filter - 应用的滤镜函数
 * @returns {HTMLVideoElement} 返回带有滤镜的HTMLVideoElement元素
 * @description 该函数允许在实时视频流上应用滤镜，并将结果显示在一个新的HTMLVideoElement中。
 */
function applyRealTimeFilter(stream, filter) {
    var videoElement = document.createElement('video');
    videoElement.srcObject = stream;
    videoElement.play();
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error("无法获取Canvas上下文。");
    }
    videoElement.addEventListener('play', function () {
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        var renderFrame = function () {
            if (!videoElement.paused && !videoElement.ended) {
                ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                imageData = filter(imageData);
                ctx.putImageData(imageData, 0, 0);
                requestAnimationFrame(renderFrame);
            }
        };
        renderFrame();
    });
    document.body.appendChild(canvas);
    return videoElement;
}
exports.applyRealTimeFilter = applyRealTimeFilter;
/*
使用示例:

import { applyRealTimeFilter } from './applyRealTimeFilter';

navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  const videoElement = applyRealTimeFilter(stream, (imageData) => {
      // 简单的反色滤镜
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i]; // R
          data[i + 1] = 255 - data[i + 1]; // G
          data[i + 2] = 255 - data[i + 2]; // B
      }
      return imageData;
  });

  document.body.appendChild(videoElement);
}).catch((error) => {
  console.error('获取摄像头流失败:', error);
});

*/
