import QRCode from 'qrcode';
/**
 * 生成指定内容的二维码。
 * @param text - 要编码的文本内容。
 * @param options - 可选的二维码生成配置。
 * @returns 返回一个Promise，包含生成的二维码DataURL字符串。
 */
export declare function generateQRCode(text: string, options?: QRCode.QRCodeToDataURLOptions): Promise<string>;
