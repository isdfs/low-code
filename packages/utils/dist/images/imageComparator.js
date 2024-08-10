"use strict";
/**
 * 图像比较模块，用于比较两张图像的相似度。
 * @module ImageComparator
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var ImageComparator = /** @class */ (function () {
    function ImageComparator() {
    }
    /**
     * 比较两张图像的相似度。
     * @param {Blob | HTMLImageElement} image1 - 第一个图像。
     * @param {Blob | HTMLImageElement} image2 - 第二个图像。
     * @returns {Promise<number>} 返回两张图像的相似度，0 表示完全不同，1 表示完全相同。
     */
    ImageComparator.prototype.compare = function (image1, image2) {
        return __awaiter(this, void 0, void 0, function () {
            var img1Data, img2Data, diff, i, maxDiff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getImageData(image1)];
                    case 1:
                        img1Data = _a.sent();
                        return [4 /*yield*/, this.getImageData(image2)];
                    case 2:
                        img2Data = _a.sent();
                        if (img1Data.width !== img2Data.width || img1Data.height !== img2Data.height) {
                            return [2 /*return*/, 0]; // 图像尺寸不同，认为完全不同
                        }
                        diff = 0;
                        for (i = 0; i < img1Data.data.length; i++) {
                            diff += Math.abs(img1Data.data[i] - img2Data.data[i]);
                        }
                        maxDiff = img1Data.data.length * 255;
                        return [2 /*return*/, 1 - diff / maxDiff];
                }
            });
        });
    };
    /**
     * 获取图像的 ImageData。
     * @param {Blob | HTMLImageElement} image - 图像源。
     * @returns {Promise<ImageData>} 返回图像的 ImageData。
     */
    ImageComparator.prototype.getImageData = function (image) {
        return __awaiter(this, void 0, void 0, function () {
            var canvas, ctx, img, url;
            return __generator(this, function (_a) {
                canvas = document.createElement('canvas');
                ctx = canvas.getContext('2d');
                img = new Image();
                if (image instanceof Blob) {
                    url = URL.createObjectURL(image);
                    img.src = url;
                }
                else {
                    img.src = image.src;
                }
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        img.onload = function () {
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0);
                            resolve(ctx.getImageData(0, 0, img.width, img.height));
                        };
                        img.onerror = function () {
                            reject(new Error('图像加载失败'));
                        };
                    })];
            });
        });
    };
    return ImageComparator;
}());
var imageComparator = new ImageComparator();
exports.default = imageComparator;
