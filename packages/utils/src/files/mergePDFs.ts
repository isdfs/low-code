import { PDFDocument } from 'pdf-lib';

/**
 * 将多个PDF文件合并为一个文件。
 * @param pdfFiles - 包含多个PDF文件的数组。
 * @returns 返回一个Promise，包含合并后的PDF文件Blob。
 */
export async function mergePDFs(pdfFiles: ArrayBuffer[]): Promise<Blob> {
    const mergedPdf = await PDFDocument.create();
    for (const file of pdfFiles) {
        const pdf = await PDFDocument.load(file);
        const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
    }
    const mergedPdfFile = await mergedPdf.save();
    return new Blob([mergedPdfFile], { type: 'application/pdf' });
}
