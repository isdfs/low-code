"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
/**
 * 创建一个简单的状态管理存储器。
 *
 * @template T - 存储器状态的类型。
 * @param {T} initialState - 初始状态。
 * @returns {{
*  getState: () => T,
*  setState: (newState: Partial<T>) => void,
*  subscribe: (listener: (state: T) => void) => () => void
* }} - 包含获取状态、设置状态和订阅状态变化的方法。
*
* @example
* const store = createStore({ count: 0 });
* store.subscribe((state) => console.log('State updated:', state));
* store.setState({ count: store.getState().count + 1 });
* console.log(store.getState()); // { count: 1 }
*/
function createStore(initialState) {
    var state = initialState;
    var listeners = [];
    function getState() {
        return state;
    }
    function setState(newState) {
        state = __assign(__assign({}, state), newState);
        listeners.forEach(function (listener) { return listener(state); });
    }
    function subscribe(listener) {
        listeners.push(listener);
        return function () {
            var index = listeners.indexOf(listener);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }
    return {
        getState: getState,
        setState: setState,
        subscribe: subscribe
    };
}
exports.createStore = createStore;
