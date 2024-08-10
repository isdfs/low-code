/**
 * 图像格式转换模块，提供不同图像格式之间的转换功能。
 * @module ImageFormatConverter
 */
export interface ImageFormatOptions {
    format: 'jpeg' | 'png' | 'webp';
    quality?: number;
}
declare class ImageFormatConverter {
    /**
     * 将图像转换为指定格式。
     * @param {HTMLImageElement | Blob} image - 要转换的图像。
     * @param {ImageFormatOptions} options - 转换选项。
     * @returns {Promise<Blob>} 转换后的图像 Blob。
     */
    convert(image: HTMLImageElement | Blob, options: ImageFormatOptions): Promise<Blob>;
}
declare const imageFormatConverter: ImageFormatConverter;
export default imageFormatConverter;
