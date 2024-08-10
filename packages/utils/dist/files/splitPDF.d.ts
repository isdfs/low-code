/**
 * 将PDF文件按页分割为多个PDF文件。
 * @param pdfFile - 原始PDF文件的ArrayBuffer。
 * @returns 返回一个Promise，包含分割后的PDF文件Blob数组。
 */
export declare function splitPDF(pdfFile: ArrayBuffer): Promise<Blob[]>;
