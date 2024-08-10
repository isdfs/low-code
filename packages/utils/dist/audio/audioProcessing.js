"use strict";
/**
 * 音频处理模块，提供剪切、混合和音量调整等功能。
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.adjustVolume = exports.mixAudio = exports.cutAudio = void 0;
/**
 * @function cutAudio
 * 剪切音频段。
 * @param segment 音频段。
 * @param start 开始时间，单位为秒。
 * @param end 结束时间，单位为秒。
 * @returns 剪切后的音频段。
 */
function cutAudio(segment, start, end) {
    var startSample = Math.floor(start * segment.sampleRate);
    var endSample = Math.floor(end * segment.sampleRate);
    return {
        data: segment.data.slice(startSample, endSample),
        sampleRate: segment.sampleRate
    };
}
exports.cutAudio = cutAudio;
/**
 * @function mixAudio
 * 混合两个音频段。
 * @param segment1 第一个音频段。
 * @param segment2 第二个音频段。
 * @param weight1 第一个音频段的权重，默认为0.5。
 * @param weight2 第二个音频段的权重，默认为0.5。
 * @returns 混合后的音频段。
 */
function mixAudio(segment1, segment2, weight1, weight2) {
    if (weight1 === void 0) { weight1 = 0.5; }
    if (weight2 === void 0) { weight2 = 0.5; }
    if (segment1.sampleRate !== segment2.sampleRate) {
        throw new Error('音频段的采样率必须相同。');
    }
    var length = Math.min(segment1.data.length, segment2.data.length);
    var mixedData = new Float32Array(length);
    for (var i = 0; i < length; i++) {
        mixedData[i] = segment1.data[i] * weight1 + segment2.data[i] * weight2;
    }
    return {
        data: mixedData,
        sampleRate: segment1.sampleRate
    };
}
exports.mixAudio = mixAudio;
/**
 * @function adjustVolume
 * 调整音频段的音量。
 * @param segment 音频段。
 * @param volume 音量调整因子，1表示不变，0.5表示减半。
 * @returns 调整音量后的音频段。
 */
function adjustVolume(segment, volume) {
    var adjustedData = segment.data.map(function (sample) { return sample * volume; });
    return {
        data: new Float32Array(adjustedData),
        sampleRate: segment.sampleRate
    };
}
exports.adjustVolume = adjustVolume;
