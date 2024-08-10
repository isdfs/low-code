/**
 * 音频处理模块，提供剪切、混合和音量调整等功能。
 */
export interface AudioSegment {
    data: Float32Array;
    sampleRate: number;
}
/**
 * @function cutAudio
 * 剪切音频段。
 * @param segment 音频段。
 * @param start 开始时间，单位为秒。
 * @param end 结束时间，单位为秒。
 * @returns 剪切后的音频段。
 */
export declare function cutAudio(segment: AudioSegment, start: number, end: number): AudioSegment;
/**
 * @function mixAudio
 * 混合两个音频段。
 * @param segment1 第一个音频段。
 * @param segment2 第二个音频段。
 * @param weight1 第一个音频段的权重，默认为0.5。
 * @param weight2 第二个音频段的权重，默认为0.5。
 * @returns 混合后的音频段。
 */
export declare function mixAudio(segment1: AudioSegment, segment2: AudioSegment, weight1?: number, weight2?: number): AudioSegment;
/**
 * @function adjustVolume
 * 调整音频段的音量。
 * @param segment 音频段。
 * @param volume 音量调整因子，1表示不变，0.5表示减半。
 * @returns 调整音量后的音频段。
 */
export declare function adjustVolume(segment: AudioSegment, volume: number): AudioSegment;
