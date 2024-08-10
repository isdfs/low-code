import { PDFDocument } from 'pdf-lib';

/**
 * 压缩PDF文件以减少文件大小。
 * @param pdfFile - 原始PDF文件的ArrayBuffer。
 * @param quality - 压缩质量（0到1之间的浮点数）。
 * @returns 返回一个Promise，包含压缩后的PDF文件Blob。
 */
export async function compressPDF(pdfFile: ArrayBuffer, quality: number = 0.8): Promise<Blob> {
    const pdf = await PDFDocument.load(pdfFile);
    const pages = pdf.getPages();
    
    for (const page of pages) {
        const { width, height } = page.getSize();
        const scaleFactor = Math.sqrt(quality);
        page.scaleContent(scaleFactor, scaleFactor);
        page.setSize(width * scaleFactor, height * scaleFactor);
    }

    const compressedPdfFile = await pdf.save();
    return new Blob([compressedPdfFile], { type: 'application/pdf' });
}
