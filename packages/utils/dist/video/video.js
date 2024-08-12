"use strict";
/**
 * @module video
 * @description 高级视频处理模块，提供视频加载、缓存、实时流处理、动态调整等功能。
 */
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
exports.Video = void 0;
var Video = /** @class */ (function () {
    /**
     * 创建一个新的 Video 实例
     * @param {HTMLVideoElement} videoElement - 用于呈现视频的 HTMLVideoElement 元素
     * @param {VideoOptions} options - 视频播放的配置选项
     */
    function Video(videoElement, options) {
        if (options === void 0) { options = {}; }
        this.videoElement = videoElement;
        this.cache = new Map();
        this.options = options;
        if (this.options.preload && !this.options.streaming) {
            this.preloadVideo(this.videoElement.src);
        }
    }
    /**
     * 预加载视频资源并缓存
     * @param {string} url - 视频的URL地址
     * @returns {Promise<void>}
     * @description 如果启用了缓存选项，该函数会在加载时将视频内容缓存起来，以供后续快速访问。
     */
    Video.prototype.preloadVideo = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, videoBlob, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.options.useCache && this.cache.has(url))) return [3 /*break*/, 1];
                        this.videoElement.src = URL.createObjectURL(this.cache.get(url));
                        return [3 /*break*/, 5];
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 3:
                        videoBlob = _a.sent();
                        this.cache.set(url, videoBlob);
                        this.videoElement.src = URL.createObjectURL(videoBlob);
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("预加载视频失败:", error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 加载并播放视频
     * @param {string} url - 视频的URL地址
     * @returns {Promise<void>}
     * @description 该函数根据配置选项决定是否使用缓存或启用实时流播放。
     */
    Video.prototype.loadAndPlay = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response, videoBlob, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.options.streaming) {
                            console.warn("实时流模式下无法加载本地视频文件。");
                            return [2 /*return*/];
                        }
                        if (!(this.options.useCache && this.cache.has(url))) return [3 /*break*/, 1];
                        this.videoElement.src = URL.createObjectURL(this.cache.get(url));
                        return [3 /*break*/, 5];
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, fetch(url)];
                    case 2:
                        response = _a.sent();
                        return [4 /*yield*/, response.blob()];
                    case 3:
                        videoBlob = _a.sent();
                        this.cache.set(url, videoBlob);
                        this.videoElement.src = URL.createObjectURL(videoBlob);
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _a.sent();
                        console.error("加载视频失败:", error_2);
                        return [3 /*break*/, 5];
                    case 5:
                        this.videoElement.play();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 切换到实时流播放模式
     * @param {MediaStream} stream - 实时流对象
     * @description 启用实时流处理，用于显示来自摄像头或其他实时数据源的视频流。
     */
    Video.prototype.enableStreaming = function (stream) {
        this.videoElement.srcObject = stream;
        this.options.streaming = true;
        this.videoElement.play();
    };
    /**
     * 暂停视频播放
     * @description 该函数暂停当前的视频播放。
     */
    Video.prototype.pause = function () {
        this.videoElement.pause();
    };
    /**
     * 恢复视频播放
     * @description 该函数恢复暂停中的视频播放。
     */
    Video.prototype.resume = function () {
        if (this.options.streaming) {
            console.warn("实时流模式下无法恢复本地视频播放。");
            return;
        }
        this.videoElement.play();
    };
    /**
     * 停止视频播放并重置播放时间
     * @description 停止当前的视频播放并将播放进度重置到0。
     */
    Video.prototype.stop = function () {
        this.pause();
        this.videoElement.currentTime = 0;
    };
    /**
     * 清除缓存
     * @description 清空视频缓存数据，以释放内存。
     */
    Video.prototype.clearCache = function () {
        this.cache.clear();
    };
    /**
     * 调整视频的播放速率
     * @param {number} rate - 播放速率，1.0 表示正常速率
     * @description 根据需要动态调整视频的播放速率。
     */
    Video.prototype.setPlaybackRate = function (rate) {
        this.videoElement.playbackRate = rate;
    };
    /**
     * 截取当前视频帧
     * @returns {HTMLCanvasElement} 返回一个包含当前视频帧的Canvas元素
     * @description 提供视频帧的截屏功能，将当前帧保存到Canvas中。
     */
    Video.prototype.captureFrame = function () {
        var canvas = document.createElement('canvas');
        canvas.width = this.videoElement.videoWidth;
        canvas.height = this.videoElement.videoHeight;
        var ctx = canvas.getContext('2d');
        if (ctx) {
            ctx.drawImage(this.videoElement, 0, 0, canvas.width, canvas.height);
        }
        return canvas;
    };
    /**
     * 销毁视频对象，清理资源
     * @description 释放视频相关的资源，包括缓存和视频元素对象，避免内存泄漏。
     */
    Video.prototype.destroy = function () {
        this.clearCache();
        this.videoElement.srcObject = null;
        this.videoElement.src = '';
        this.videoElement.load();
    };
    return Video;
}());
exports.Video = Video;
/*
使用示例：

const videoElement = document.querySelector('video') as HTMLVideoElement;
const videoPlayer = new Video(videoElement, { useCache: true, preload: true });

// 加载并播放视频
videoPlayer.loadAndPlay('https://example.com/video.mp4');

// 暂停视频
videoPlayer.pause();

// 调整播放速率
videoPlayer.setPlaybackRate(1.5);

// 捕捉当前帧
const frameCanvas = videoPlayer.captureFrame();
document.body.appendChild(frameCanvas);

// 切换到实时流
navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
      videoPlayer.enableStreaming(stream);
  });

// 销毁视频对象，清理资源
videoPlayer.destroy();

*/
