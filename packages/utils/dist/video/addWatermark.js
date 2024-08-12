"use strict";
// 文件名: addWatermark.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.addWatermark = void 0;
/**
 * 添加视频水印
 * @param {HTMLVideoElement} videoElement - 要添加水印的视频元素
 * @param {HTMLImageElement} watermarkImage - 水印图片元素
 * @param {number} x - 水印在视频中的X坐标
 * @param {number} y - 水印在视频中的Y坐标
 * @returns {void}
 * @description 该函数在视频播放过程中动态添加水印，适用于版权保护或品牌推广。
 */
function addWatermark(videoElement, watermarkImage, x, y) {
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
                ctx.drawImage(watermarkImage, x, y);
                requestAnimationFrame(renderFrame);
            }
        };
        renderFrame();
    });
    videoElement.srcObject = canvas.captureStream();
}
exports.addWatermark = addWatermark;
/*
使用示例:

import { addWatermark } from './addWatermark';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const watermarkImage = new Image();
watermarkImage.src = 'https://example.com/watermark.png';

watermarkImage.onload = () => {
  addWatermark(videoElement, watermarkImage, 10, 10); // 在左上角添加水印
  videoElement.play();
};

*/
