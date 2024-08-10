"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQRCode = void 0;
var qrcode_1 = __importDefault(require("qrcode"));
/**
 * 生成指定内容的二维码。
 * @param text - 要编码的文本内容。
 * @param options - 可选的二维码生成配置。
 * @returns 返回一个Promise，包含生成的二维码DataURL字符串。
 */
function generateQRCode(text, options) {
    return qrcode_1.default.toDataURL(text, options);
}
exports.generateQRCode = generateQRCode;
