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
exports.batchRequest = void 0;
/**
 * 批量发送网络请求，并在所有请求完成后返回结果。
 *
 * @template T - 请求结果的类型。
 * @param {Array<() => Promise<T>>} requests - 包含请求的Promise数组。
 * @param {number} batchSize - 每批并发执行的请求数量。
 * @returns {Promise<T[]>} 返回包含所有请求结果的Promise。
 *
 * @example
 * const request1 = () => fetch('/api/data1').then(res => res.json());
 * const request2 = () => fetch('/api/data2').then(res => res.json());
 * batchRequest([request1, request2], 1).then(results => console.log(results));
 */
function batchRequest(requests, batchSize) {
    var results = [];
    function executeBatch(batch) {
        return __awaiter(this, void 0, void 0, function () {
            var batchResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(batch.map(function (request) { return request(); }))];
                    case 1:
                        batchResults = _a.sent();
                        results.push.apply(results, batchResults);
                        return [2 /*return*/];
                }
            });
        });
    }
    function processBatches() {
        return __awaiter(this, void 0, void 0, function () {
            var i, batch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < requests.length)) return [3 /*break*/, 4];
                        batch = requests.slice(i, i + batchSize);
                        return [4 /*yield*/, executeBatch(batch)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        i += batchSize;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
    return processBatches().then(function () { return results; });
}
exports.batchRequest = batchRequest;
