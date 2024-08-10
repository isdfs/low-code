"use strict";
/**
 * Promise池模块，用于控制并发的Promise数量。
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
exports.PromisePool = void 0;
var PromisePool = /** @class */ (function () {
    /**
     * 创建一个Promise池实例。
     * @param tasks 要执行的Promise任务数组，每个任务是一个返回Promise的函数。
     * @param concurrency 最大并发数量。
     */
    function PromisePool(tasks, concurrency) {
        if (concurrency <= 0) {
            throw new Error('并发数量必须大于0');
        }
        this.tasks = tasks;
        this.concurrency = concurrency;
    }
    /**
     * 开始执行所有任务，并在所有任务完成后返回结果数组。
     * @returns 所有任务的结果数组。
     */
    PromisePool.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var results, executing, _loop_1, this_1, _i, _a, task;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        results = [];
                        executing = [];
                        _loop_1 = function (task) {
                            var p;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        p = Promise.resolve().then(function () { return task(); }).then(function (result) {
                                            results.push(result);
                                        });
                                        executing.push(p);
                                        if (!(executing.length >= this_1.concurrency)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, Promise.race(executing)];
                                    case 1:
                                        _c.sent();
                                        executing.splice(executing.findIndex(function (e) { return e === p; }), 1);
                                        _c.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, _a = this.tasks;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        task = _a[_i];
                        return [5 /*yield**/, _loop_1(task)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [4 /*yield*/, Promise.all(executing)];
                    case 5:
                        _b.sent();
                        return [2 /*return*/, results];
                }
            });
        });
    };
    return PromisePool;
}());
exports.PromisePool = PromisePool;
/**
 * 使用示例：
 * ```typescript
 * const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
 *
 * const tasks = [
 *   () => delay(1000).then(() => 'Task 1'),
 *   () => delay(500).then(() => 'Task 2'),
 *   () => delay(2000).then(() => 'Task 3'),
 *   () => delay(1500).then(() => 'Task 4'),
 * ];
 *
 * const pool = new PromisePool(tasks, 2);
 * pool.start().then(results => {
 *   console.log(results); // 输出: ['Task 1', 'Task 2', 'Task 3', 'Task 4']
 * });
 * ```
 */
