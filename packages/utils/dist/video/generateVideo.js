"use strict";
// 文件名: generateVideo.ts
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
exports.generateVideo = void 0;
/**
 * 生成视频
 * @param {HTMLVideoElement[]} videos - 需要合成的视频元素数组
 * @param {number} [frameRate=30] - 视频的帧率
 * @returns {Promise<Blob>} 返回生成的视频文件Blob对象
 * @description 该函数将多个视频片段合成为一个新的视频，并返回该视频的Blob对象。
 */
function generateVideo(videos, frameRate) {
    if (frameRate === void 0) { frameRate = 30; }
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx, stream, mediaRecorder, chunks, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    if (!ctx) {
                        throw new Error("无法获取Canvas上下文。");
                    }
                    // 设置Canvas尺寸为第一个视频的分辨率
                    canvas.width = videos[0].videoWidth;
                    canvas.height = videos[0].videoHeight;
                    stream = canvas.captureStream(frameRate);
                    mediaRecorder = new MediaRecorder(stream);
                    chunks = [];
                    mediaRecorder.ondataavailable = function (e) {
                        if (e.data.size > 0) {
                            chunks.push(e.data);
                        }
                    };
                    mediaRecorder.start();
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < videos.length)) return [3 /*break*/, 6];
                    videos[i].play();
                    _a.label = 2;
                case 2:
                    if (!!videos[i].ended) return [3 /*break*/, 4];
                    ctx.drawImage(videos[i], 0, 0, canvas.width, canvas.height);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1000 / frameRate); })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 2];
                case 4:
                    videos[i].pause();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 1];
                case 6:
                    mediaRecorder.stop();
                    return [2 /*return*/, new Promise(function (resolve) {
                            mediaRecorder.onstop = function () {
                                var blob = new Blob(chunks, { type: 'video/webm' });
                                resolve(blob);
                            };
                        })];
            }
        });
    });
}
exports.generateVideo = generateVideo;
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
