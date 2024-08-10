/**
 * 压缩PDF文件以减少文件大小。
 * @param pdfFile - 原始PDF文件的ArrayBuffer。
 * @param quality - 压缩质量（0到1之间的浮点数）。
 * @returns 返回一个Promise，包含压缩后的PDF文件Blob。
 */
export declare function compressPDF(pdfFile: ArrayBuffer, quality?: number): Promise<Blob>;
