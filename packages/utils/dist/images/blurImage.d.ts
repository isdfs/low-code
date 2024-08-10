/**
 * 为图像添加模糊效果。
 * @param image - 原始图像的HTMLImageElement。
 * @param blurAmount - 模糊程度，默认为5px。
 * @returns 返回一个Promise，包含模糊处理后的图像Blob。
 */
export declare function blurImage(image: HTMLImageElement, blurAmount?: number): Promise<Blob>;
