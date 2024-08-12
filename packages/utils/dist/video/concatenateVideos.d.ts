/**
 * 视频拼接
 * @param {Blob[]} videoBlobs - 需要拼接的视频Blob对象数组
 * @param {string} mimeType - 生成的视频MIME类型
 * @returns {Promise<Blob>} 返回拼接后的视频Blob对象
 * @description 该函数将多个视频片段拼接为一个新的视频文件。
 */
export declare function concatenateVideos(videoBlobs: Blob[], mimeType: string): Promise<Blob>;
