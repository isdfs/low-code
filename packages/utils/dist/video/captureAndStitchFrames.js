"use strict";
// 文件名: captureAndStitchFrames.ts
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
exports.captureAndStitchFrames = void 0;
/**
 * 视频帧捕捉与拼接
 * @param {HTMLVideoElement} videoElement - 输入的视频元素
 * @param {number[]} captureTimes - 需要捕捉的时间点数组（单位：秒）
 * @param {number} frameRate - 生成视频的帧率
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob>} 返回拼接后的视频Blob对象
 * @description 该函数从视频中捕捉指定时间点的帧，并将这些帧拼接为一个新的视频文件。
 */
function captureAndStitchFrames(videoElement, captureTimes, frameRate, mimeType) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx, stream, mediaRecorder, chunks, _i, captureTimes_1, time;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    if (!ctx) {
                        throw new Error("无法获取Canvas上下文。");
                    }
                    canvas.width = videoElement.videoWidth;
                    canvas.height = videoElement.videoHeight;
                    stream = canvas.captureStream(frameRate);
                    mediaRecorder = new MediaRecorder(stream, { mimeType: mimeType });
                    chunks = [];
                    mediaRecorder.ondataavailable = function (e) {
                        if (e.data.size > 0) {
                            chunks.push(e.data);
                        }
                    };
                    mediaRecorder.start();
                    _i = 0, captureTimes_1 = captureTimes;
                    _a.label = 1;
                case 1:
                    if (!(_i < captureTimes_1.length)) return [3 /*break*/, 4];
                    time = captureTimes_1[_i];
                    videoElement.currentTime = time;
                    return [4 /*yield*/, new Promise(function (resolve) {
                            videoElement.addEventListener('seeked', function handler() {
                                videoElement.removeEventListener('seeked', handler);
                                ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                                setTimeout(resolve, 1000 / frameRate);
                            });
                        })];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4:
                    mediaRecorder.stop();
                    return [2 /*return*/, new Promise(function (resolve) {
                            mediaRecorder.onstop = function () {
                                resolve(new Blob(chunks, { type: mimeType }));
                            };
                        })];
            }
        });
    });
}
exports.captureAndStitchFrames = captureAndStitchFrames;
/*
使用示例:

import { captureAndStitchFrames } from './captureAndStitchFrames';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const captureTimes = [0, 5, 10, 15, 20]; // 捕捉0秒、5秒、10秒、15秒、20秒的帧

captureAndStitchFrames(videoElement, captureTimes, 1, 'video/webm').then(stitchedBlob => {
  const url = URL.createObjectURL(stitchedBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'stitched_video.webm';
  a.click(); // 触发下载拼接后的视频文件
}).catch(error => {
  console.error('帧捕捉与拼接失败:', error);
});

*/
