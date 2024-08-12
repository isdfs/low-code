"use strict";
// 文件名: concatenateVideos.ts
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
exports.concatenateVideos = void 0;
/**
 * 视频拼接
 * @param {Blob[]} videoBlobs - 需要拼接的视频Blob对象数组
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob>} 返回拼接后的视频Blob对象
 * @description 该函数将多个视频片段拼接为一个新的视频文件。
 */
function concatenateVideos(videoBlobs, mimeType) {
    return __awaiter(this, void 0, void 0, function () {
        var canvas, ctx, firstVideo, stream, mediaRecorder, chunks, _loop_1, _i, videoBlobs_1, blob;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    canvas = document.createElement('canvas');
                    ctx = canvas.getContext('2d');
                    if (!ctx) {
                        throw new Error("无法获取Canvas上下文。");
                    }
                    firstVideo = document.createElement('video');
                    firstVideo.src = URL.createObjectURL(videoBlobs[0]);
                    return [4 /*yield*/, new Promise(function (resolve) {
                            firstVideo.onloadedmetadata = function () {
                                canvas.width = firstVideo.videoWidth;
                                canvas.height = firstVideo.videoHeight;
                                resolve();
                            };
                        })];
                case 1:
                    _a.sent();
                    stream = canvas.captureStream();
                    mediaRecorder = new MediaRecorder(stream, { mimeType: mimeType });
                    chunks = [];
                    mediaRecorder.ondataavailable = function (e) {
                        if (e.data.size > 0) {
                            chunks.push(e.data);
                        }
                    };
                    mediaRecorder.start();
                    _loop_1 = function (blob) {
                        var videoElement;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    videoElement = document.createElement('video');
                                    videoElement.src = URL.createObjectURL(blob);
                                    return [4 /*yield*/, new Promise(function (resolve) {
                                            videoElement.onloadeddata = function () {
                                                videoElement.play();
                                                var renderFrame = function () {
                                                    if (!videoElement.paused && !videoElement.ended) {
                                                        ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                                                        requestAnimationFrame(renderFrame);
                                                    }
                                                    else {
                                                        resolve();
                                                    }
                                                };
                                                renderFrame();
                                            };
                                        })];
                                case 1:
                                    _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    };
                    _i = 0, videoBlobs_1 = videoBlobs;
                    _a.label = 2;
                case 2:
                    if (!(_i < videoBlobs_1.length)) return [3 /*break*/, 5];
                    blob = videoBlobs_1[_i];
                    return [5 /*yield**/, _loop_1(blob)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _i++;
                    return [3 /*break*/, 2];
                case 5:
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
exports.concatenateVideos = concatenateVideos;
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
