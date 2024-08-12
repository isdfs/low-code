"use strict";
// 文件名: syncSubtitles.ts
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
exports.syncSubtitles = void 0;
/**
 * 实时字幕同步
 * @param {HTMLVideoElement} videoElement - 要同步字幕的视频元素
 * @param {string} subtitleUrl - 字幕文件的URL
 * @param {string} language - 字幕语言（可选）
 * @returns {Promise<void>}
 * @description 该函数加载指定URL的字幕文件，并在视频播放时同步显示字幕。
 */
function syncSubtitles(videoElement, subtitleUrl, language) {
    if (language === void 0) { language = 'en'; }
    return __awaiter(this, void 0, void 0, function () {
        function parseSRT(srtText, lang) {
            var subtitleEntries = [];
            var regex = /(\d+)\n(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})\n([\s\S]*?)(?=\n{2}|$)/g;
            var match;
            while ((match = regex.exec(srtText)) !== null) {
                subtitleEntries.push({
                    start: parseTime(match[2], match[3], match[4], match[5]),
                    end: parseTime(match[6], match[7], match[8], match[9]),
                    text: match[10].replace(/\n/g, ' ')
                });
            }
            return subtitleEntries;
            function parseTime(hh, mm, ss, ms) {
                return parseInt(hh) * 3600 + parseInt(mm) * 60 + parseInt(ss) + parseInt(ms) / 1000;
            }
        }
        function getSubtitleForTime(subtitles, currentTime) {
            return subtitles.find(function (subtitle) { return currentTime >= subtitle.start && currentTime <= subtitle.end; });
        }
        var response, subtitleText, subtitles, subtitleDiv;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(subtitleUrl)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.text()];
                case 2:
                    subtitleText = _a.sent();
                    subtitles = parseSRT(subtitleText, language);
                    subtitleDiv = document.createElement('div');
                    subtitleDiv.style.position = 'absolute';
                    subtitleDiv.style.bottom = '10px';
                    subtitleDiv.style.width = '100%';
                    subtitleDiv.style.textAlign = 'center';
                    subtitleDiv.style.color = 'white';
                    subtitleDiv.style.fontSize = '20px';
                    subtitleDiv.style.textShadow = '2px 2px 4px #000';
                    document.body.appendChild(subtitleDiv);
                    videoElement.addEventListener('timeupdate', function () {
                        var currentTime = videoElement.currentTime;
                        var subtitle = getSubtitleForTime(subtitles, currentTime);
                        subtitleDiv.textContent = subtitle ? subtitle.text : '';
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.syncSubtitles = syncSubtitles;
/*
使用示例:

import { syncSubtitles } from './syncSubtitles';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const subtitleUrl = 'https://example.com/subtitles.srt';

syncSubtitles(videoElement, subtitleUrl, 'en').then(() => {
  videoElement.play();
}).catch(error => {
  console.error('同步字幕失败:', error);
});

*/
