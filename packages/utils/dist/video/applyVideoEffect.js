"use strict";
// 文件名: applyVideoEffect.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyVideoEffect = void 0;
/**
 * 视频特效应用
 * @param {HTMLVideoElement} videoElement - 要应用特效的视频元素
 * @param {(ctx: CanvasRenderingContext2D) => void} effect - 应用的特效函数
 * @returns {void}
 * @description 该函数允许用户在视频流上应用实时特效，通过一个自定义的特效函数修改Canvas渲染上下文。
 */
function applyVideoEffect(videoElement, effect) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    if (!ctx) {
        throw new Error("无法获取Canvas上下文。");
    }
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    videoElement.addEventListener('play', function () {
        var renderFrame = function () {
            if (!videoElement.paused && !videoElement.ended) {
                ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                effect(ctx); // 应用自定义特效
                requestAnimationFrame(renderFrame);
            }
        };
        renderFrame();
    });
}
exports.applyVideoEffect = applyVideoEffect;
/*
使用示例:

import { applyVideoEffect } from './applyVideoEffect';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;

// 应用灰度特效
applyVideoEffect(videoElement, (ctx) => {
  const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = data[i + 1] = data[i + 2] = avg;
  }
  ctx.putImageData(imageData, 0, 0);
});

videoElement.play();

*/
