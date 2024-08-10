/**
 * 批量图像处理模块，支持对多个图像进行批量操作。
 * @module BatchImageProcessor
 */

import ImageFormatConverter, { ImageFormatOptions } from './imageFormatConverter';

class BatchImageProcessor {
    private formatConverter: typeof ImageFormatConverter;

    constructor() {
        this.formatConverter = new (ImageFormatConverter as any)();
    }

    /**
     * 对多个图像进行格式转换。
     * @param {Blob[]} images - 要转换的图像数组。
     * @param {ImageFormatOptions} options - 转换选项。
     * @returns {Promise<Blob[]>} 转换后的图像数组。
     */
    async convertImages(images: Blob[], options: ImageFormatOptions): Promise<Blob[]> {
        const convertedImages: Blob[] = [];

        for (const image of images) {
            const convertedImage = await this.formatConverter.convert(image, options);
            convertedImages.push(convertedImage);
        }

        return convertedImages;
    }
}

const batchImageProcessor = new BatchImageProcessor();
export default batchImageProcessor;
