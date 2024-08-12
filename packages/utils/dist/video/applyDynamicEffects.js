"use strict";
// 文件名: applyDynamicEffects.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyDynamicEffects = void 0;
/**
 * 应用视频动态特效链
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {Array<(ctx: CanvasRenderingContext2D) => void>} effects - 特效处理函数数组
 * @returns {Promise<void>}
 * @description 该函数按照顺序应用多个特效到视频帧上，形成一个动态特效链。
 */
function applyDynamicEffects(videoElement, effects) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx;
        return __generator(this, function (_a) {
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error("无法获取Canvas上下文。");
            }
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            videoElement.addEventListener('play', function () {
                var renderFrame = function () {
                    if (!videoElement.paused && !videoElement.ended) {
                        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                        // 按顺序应用特效
                        for (var _i = 0, effects_1 = effects; _i < effects_1.length; _i++) {
                            var effect = effects_1[_i];
                            effect(ctx);
                        }
                        requestAnimationFrame(renderFrame);
                    }
                };
                renderFrame();
            });
            videoElement.srcObject = canvas.captureStream();
            return [2 /*return*/];
        });
    });
}
exports.applyDynamicEffects = applyDynamicEffects;
/*
使用示例:

import { applyDynamicEffects } from './applyDynamicEffects';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;

// 创建一个特效链：先应用灰度滤镜，再应用反色效果
const effects = [
  (ctx: CanvasRenderingContext2D) => {
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = data[i + 1] = data[i + 2] = avg;
      }
      ctx.putImageData(imageData, 0, 0);
  },
  (ctx: CanvasRenderingContext2D) => {
      const imageData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
      }
      ctx.putImageData(imageData, 0, 0);
  }
];

applyDynamicEffects(videoElement, effects).then(() => {
  videoElement.play();
}).catch(error => {
  console.error('应用动态特效失败:', error);
});

*/
