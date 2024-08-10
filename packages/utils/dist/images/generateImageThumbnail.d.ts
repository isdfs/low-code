/**
 * 从图像文件生成缩略图。
 * @param file - 原始图像文件。
 * @param width - 缩略图的宽度。
 * @param height - 缩略图的高度。
 * @returns 返回一个Promise，包含生成的缩略图Blob。
 */
export declare function generateImageThumbnail(file: File, width: number, height: number): Promise<Blob>;
