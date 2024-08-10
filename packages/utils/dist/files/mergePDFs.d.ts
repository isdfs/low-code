/**
 * 将多个PDF文件合并为一个文件。
 * @param pdfFiles - 包含多个PDF文件的数组。
 * @returns 返回一个Promise，包含合并后的PDF文件Blob。
 */
export declare function mergePDFs(pdfFiles: ArrayBuffer[]): Promise<Blob>;
