"use strict";
// 文件名: transcodeVideo.ts
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
exports.transcodeVideo = void 0;
/**
 * 视频转码
 * @param {Blob} videoBlob - 要转码的视频Blob对象
 * @param {string} mimeType - 目标视频的MIME类型
 * @returns {Promise<Blob>} 返回转码后的视频Blob对象
 * @description 该函数将视频文件从一种格式转码为另一种格式，适用于需要支持不同设备或平台的场景。
 */
function transcodeVideo(videoBlob, mimeType) {
    return __awaiter(this, void 0, void 0, function () {
        var videoElement, canvas, ctx;
        return __generator(this, function (_a) {
            videoElement = document.createElement('video');
            canvas = document.createElement('canvas');
            ctx = canvas.getContext('2d');
            if (!ctx) {
                throw new Error("无法获取Canvas上下文。");
            }
            videoElement.src = URL.createObjectURL(videoBlob);
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    videoElement.addEventListener('loadeddata', function () {
                        canvas.width = videoElement.videoWidth;
                        canvas.height = videoElement.videoHeight;
                        var stream = canvas.captureStream();
                        var mediaRecorder = new MediaRecorder(stream, { mimeType: mimeType });
                        var chunks = [];
                        mediaRecorder.ondataavailable = function (e) {
                            if (e.data.size > 0) {
                                chunks.push(e.data);
                            }
                        };
                        mediaRecorder.onstop = function () {
                            resolve(new Blob(chunks, { type: mimeType }));
                        };
                        videoElement.play();
                        mediaRecorder.start();
                        videoElement.addEventListener('ended', function () {
                            mediaRecorder.stop();
                        });
                    });
                    videoElement.addEventListener('error', function (e) {
                        reject(e);
                    });
                })];
        });
    });
}
exports.transcodeVideo = transcodeVideo;
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
