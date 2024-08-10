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
export function cutAudio(segment: AudioSegment, start: number, end: number): AudioSegment {
  const startSample = Math.floor(start * segment.sampleRate);
  const endSample = Math.floor(end * segment.sampleRate);
  return {
    data: segment.data.slice(startSample, endSample),
    sampleRate: segment.sampleRate
  };
}

/**
 * @function mixAudio
 * 混合两个音频段。
 * @param segment1 第一个音频段。
 * @param segment2 第二个音频段。
 * @param weight1 第一个音频段的权重，默认为0.5。
 * @param weight2 第二个音频段的权重，默认为0.5。
 * @returns 混合后的音频段。
 */
export function mixAudio(segment1: AudioSegment, segment2: AudioSegment, weight1: number = 0.5, weight2: number = 0.5): AudioSegment {
  if (segment1.sampleRate !== segment2.sampleRate) {
    throw new Error('音频段的采样率必须相同。');
  }

  const length = Math.min(segment1.data.length, segment2.data.length);
  const mixedData = new Float32Array(length);

  for (let i = 0; i < length; i++) {
    mixedData[i] = segment1.data[i] * weight1 + segment2.data[i] * weight2;
  }

  return {
    data: mixedData,
    sampleRate: segment1.sampleRate
  };
}

/**
 * @function adjustVolume
 * 调整音频段的音量。
 * @param segment 音频段。
 * @param volume 音量调整因子，1表示不变，0.5表示减半。
 * @returns 调整音量后的音频段。
 */
export function adjustVolume(segment: AudioSegment, volume: number): AudioSegment {
  const adjustedData = segment.data.map(sample => sample * volume);
  return {
    data: new Float32Array(adjustedData),
    sampleRate: segment.sampleRate
  };
}
