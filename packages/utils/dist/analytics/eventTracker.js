"use strict";
/**
 * 事件追踪器模块，用于收集和记录用户行为事件。
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
exports.EventTracker = void 0;
var EventTracker = /** @class */ (function () {
    function EventTracker(endpoint) {
        this.events = [];
        this.endpoint = endpoint;
    }
    /**
     * 记录一个事件。
     * @param eventType 事件类型。
     * @param payload 事件数据。
     */
    EventTracker.prototype.track = function (eventType, payload) {
        var event = {
            eventType: eventType,
            payload: payload,
            timestamp: Date.now(),
        };
        this.events.push(event);
    };
    /**
     * 将收集的事件发送到服务器。
     * @returns 返回发送的结果。
     */
    EventTracker.prototype.sendEvents = function () {
        return __awaiter(this, void 0, void 0, function () {
            var eventsToSend, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.events.length === 0) {
                            return [2 /*return*/];
                        }
                        eventsToSend = this.events.slice();
                        this.events = [];
                        return [4 /*yield*/, fetch(this.endpoint, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify(eventsToSend),
                            })];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error("\u4E8B\u4EF6\u53D1\u9001\u5931\u8D25\uFF0C\u72B6\u6001\u7801: ".concat(response.status));
                        }
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    /**
     * 启动事件批量发送的定时器。
     * @param interval 发送间隔时间，单位为毫秒。
     */
    EventTracker.prototype.startBatchSending = function (interval) {
        var _this = this;
        setInterval(function () { return _this.sendEvents(); }, interval);
    };
    return EventTracker;
}());
exports.EventTracker = EventTracker;
/**
 * 使用示例：
 * ```typescript
 * const tracker = new EventTracker('https://example.com/events');
 *
 * tracker.track('page_view', { url: window.location.href });
 * tracker.track('button_click', { id: 'submit_button' });
 *
 * tracker.startBatchSending(10000); // 每10秒发送一次事件
 * ```
 */
