/**
 * 实时字幕同步
 * @param {HTMLVideoElement} videoElement - 要同步字幕的视频元素
 * @param {string} subtitleUrl - 字幕文件的URL
 * @param {string} language - 字幕语言（可选）
 * @returns {Promise<void>}
 * @description 该函数加载指定URL的字幕文件，并在视频播放时同步显示字幕。
 */
export declare function syncSubtitles(videoElement: HTMLVideoElement, subtitleUrl: string, language?: string): Promise<void>;
