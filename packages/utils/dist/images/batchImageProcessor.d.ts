/**
 * 批量图像处理模块，支持对多个图像进行批量操作。
 * @module BatchImageProcessor
 */
import { ImageFormatOptions } from './imageFormatConverter';
declare class BatchImageProcessor {
    private formatConverter;
    constructor();
    /**
     * 对多个图像进行格式转换。
     * @param {Blob[]} images - 要转换的图像数组。
     * @param {ImageFormatOptions} options - 转换选项。
     * @returns {Promise<Blob[]>} 转换后的图像数组。
     */
    convertImages(images: Blob[], options: ImageFormatOptions): Promise<Blob[]>;
}
declare const batchImageProcessor: BatchImageProcessor;
export default batchImageProcessor;
