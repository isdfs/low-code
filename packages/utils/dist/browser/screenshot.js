"use strict";
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
exports.captureScreenshot = void 0;
/**
 * 页面截图。
 *
 * 该方法使用 HTML5 Canvas API 截取指定元素的屏幕快照，并将其转换为图片数据。
 *
 * @param {HTMLElement} element - 要截取的元素。
 * @returns {Promise<string>} 返回一个 Promise，解析为 base64 格式的图片数据。
 *
 * @example
 * ```
 * captureScreenshot(document.getElementById('myElement'))
 *   .then(dataUrl => {
 *     console.log('截图完成:', dataUrl);
 *     // 可以将 dataUrl 赋值给 img 标签的 src 属性以显示截图
 *   })
 *   .catch(error => {
 *     console.error('截图失败:', error);
 *   });
 * ```
 */
function captureScreenshot(element) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    try {
                        var canvas = document.createElement('canvas');
                        var context = canvas.getContext('2d');
                        var rect = element.getBoundingClientRect();
                        canvas.width = rect.width;
                        canvas.height = rect.height;
                        context === null || context === void 0 ? void 0 : context.drawImage(document.documentElement, -rect.left, -rect.top);
                        resolve(canvas.toDataURL('image/png'));
                    }
                    catch (error) {
                        reject("\u622A\u56FE\u5931\u8D25: ".concat(error.message));
                    }
                })];
        });
    });
}
exports.captureScreenshot = captureScreenshot;
