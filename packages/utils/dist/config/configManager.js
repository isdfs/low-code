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
exports.createConfigManager = void 0;
/**
 * 动态配置管理器，用于管理和应用动态加载的配置。
 *
 * @template T - 配置的类型。
 * @param {() => Promise<T>} fetchConfig - 异步获取配置的函数。
 * @param {number} [refreshInterval] - 自动刷新配置的时间间隔（毫秒），可选。
 * @returns {{
*   getConfig: () => T | undefined,
*   reload: () => Promise<void>,
*   onUpdate: (callback: (config: T) => void) => void
* }} - 包含获取当前配置、重新加载配置和注册配置更新回调的方法。
*
* @example
* const configManager = createConfigManager(() => fetch('/api/config').then(res => res.json()), 60000);
* configManager.onUpdate((config) => console.log('Config updated:', config));
* configManager.reload(); // 手动触发配置加载
*/
function createConfigManager(fetchConfig, refreshInterval) {
    var currentConfig;
    var listeners = [];
    function reload() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetchConfig()];
                    case 1:
                        currentConfig = _a.sent();
                        listeners.forEach(function (listener) { return listener(currentConfig); });
                        return [2 /*return*/];
                }
            });
        });
    }
    function getConfig() {
        return currentConfig;
    }
    function onUpdate(callback) {
        listeners.push(callback);
    }
    if (refreshInterval) {
        setInterval(reload, refreshInterval);
    }
    return {
        getConfig: getConfig,
        reload: reload,
        onUpdate: onUpdate,
    };
}
exports.createConfigManager = createConfigManager;
