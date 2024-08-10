"use strict";
/**
 * 事件总线模块，实现发布/订阅模式的事件处理。
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
exports.EventBus = void 0;
var EventBus = /** @class */ (function () {
    function EventBus() {
        this.listeners = new Map();
    }
    /**
     * 订阅指定事件的监听器。
     * @param event 事件名称。
     * @param listener 监听器函数。
     */
    EventBus.prototype.subscribe = function (event, listener) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(listener);
    };
    /**
     * 发布指定事件。
     * @param event 事件名称。
     * @param payload 事件数据。
     * @returns 一个Promise，表示所有监听器执行完成。
     */
    EventBus.prototype.publish = function (event, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var listeners;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listeners = this.listeners.get(event) || [];
                        return [4 /*yield*/, Promise.all(listeners.map(function (listener) { return listener(payload); }))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 取消订阅指定事件的监听器。
     * @param event 事件名称。
     * @param listener 要取消的监听器函数。
     */
    EventBus.prototype.unsubscribe = function (event, listener) {
        var listeners = this.listeners.get(event);
        if (!listeners)
            return;
        this.listeners.set(event, listeners.filter(function (l) { return l !== listener; }));
    };
    return EventBus;
}());
exports.EventBus = EventBus;
/**
 * 使用示例：
 * ```typescript
 * const eventBus = new EventBus();
 *
 * const onUserCreated = (user: { id: string; name: string }) => {
 *   console.log(`User created: ${user.name}`);
 * };
 *
 * eventBus.subscribe('userCreated', onUserCreated);
 *
 * eventBus.publish('userCreated', { id: '1', name: 'Alice' });
 * // 输出: User created: Alice
 *
 * eventBus.unsubscribe('userCreated', onUserCreated);
 * ```
 */
