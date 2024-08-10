/**
 * 将指定滤镜应用到图像上。
 * @param image - 原始图像的HTMLImageElement。
 * @param filter - 要应用的CSS滤镜，如"grayscale(100%)"。
 * @returns 返回一个Promise，包含应用滤镜后的图像Blob。
 */
export declare function applyFilterToImage(image: HTMLImageElement, filter: string): Promise<Blob>;
