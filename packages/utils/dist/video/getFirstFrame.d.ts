/**
 * 获取视频的首帧
 * @param {string} url - 视频的URL地址
 * @returns {Promise<HTMLCanvasElement>} 返回一个包含首帧图像的Canvas元素
 * @description 该函数加载视频并提取首帧图像，适用于生成视频预览或缩略图。
 */
export declare function getFirstFrame(url: string): Promise<HTMLCanvasElement>;
