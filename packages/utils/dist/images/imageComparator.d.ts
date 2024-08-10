/**
 * 图像比较模块，用于比较两张图像的相似度。
 * @module ImageComparator
 */
declare class ImageComparator {
    /**
     * 比较两张图像的相似度。
     * @param {Blob | HTMLImageElement} image1 - 第一个图像。
     * @param {Blob | HTMLImageElement} image2 - 第二个图像。
     * @returns {Promise<number>} 返回两张图像的相似度，0 表示完全不同，1 表示完全相同。
     */
    compare(image1: Blob | HTMLImageElement, image2: Blob | HTMLImageElement): Promise<number>;
    /**
     * 获取图像的 ImageData。
     * @param {Blob | HTMLImageElement} image - 图像源。
     * @returns {Promise<ImageData>} 返回图像的 ImageData。
     */
    private getImageData;
}
declare const imageComparator: ImageComparator;
export default imageComparator;
