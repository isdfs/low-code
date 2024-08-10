import { PDFDocument } from 'pdf-lib';

/**
 * 将PDF文件按页分割为多个PDF文件。
 * @param pdfFile - 原始PDF文件的ArrayBuffer。
 * @returns 返回一个Promise，包含分割后的PDF文件Blob数组。
 */
export async function splitPDF(pdfFile: ArrayBuffer): Promise<Blob[]> {
    const pdf = await PDFDocument.load(pdfFile);
    const totalPages = pdf.getPageCount();
    const pdfBlobs: Blob[] = [];

    for (let i = 0; i < totalPages; i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(pdf, [i]);
        newPdf.addPage(copiedPage);
        const pdfBytes = await newPdf.save();
        pdfBlobs.push(new Blob([pdfBytes], { type: 'application/pdf' }));
    }

    return pdfBlobs;
}
