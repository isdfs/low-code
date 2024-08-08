"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retryFetch = exports.fetchWithTimeout = exports.createWebSocket = exports.batchRequest = void 0;
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
var batchRequest_1 = require("./batchRequest");
Object.defineProperty(exports, "batchRequest", { enumerable: true, get: function () { return batchRequest_1.batchRequest; } });
/**
 * 创建并管理一个WebSocket连接。
 *
 * @param {string} url - WebSocket服务器的URL。
 * @param {Record<string, (data: any) => void>} eventHandlers - WebSocket事件的处理程序。
 * @returns {{
 *  send: (message: any) => void,
 *  close: () => void
 * }} - 包含发送消息和关闭连接的方法。
 *
 * @example
 * const ws = createWebSocket('ws://example.com/socket', {
 *   open: () => console.log('WebSocket connection opened'),
 *   message: (data) => console.log('Received:', data),
 *   close: () => console.log('WebSocket connection closed'),
 *   error: (error) => console.error('WebSocket error:', error)
 * });
 * ws.send({ action: 'subscribe', channel: 'updates' });
 */
var createWebSocket_1 = require("./createWebSocket");
Object.defineProperty(exports, "createWebSocket", { enumerable: true, get: function () { return createWebSocket_1.createWebSocket; } });
/**
 * 带超时限制的fetch请求。
 *
 * @param {string} url - 请求的URL。
 * @param {RequestInit} [options] - 请求的配置选项。
 * @param {number} timeout - 请求的超时时间（毫秒）。
 * @returns {Promise<Response>} 请求的响应。
 *
 * @example
 * fetchWithTimeout('https://api.example.com/data', {}, 5000)
 *   .then(response => response.json())
 *   .then(data => console.log(data))
 *   .catch(error => console.error('Request failed or timed out', error));
 */
var fetchWithTimeout_1 = require("./fetchWithTimeout");
Object.defineProperty(exports, "fetchWithTimeout", { enumerable: true, get: function () { return fetchWithTimeout_1.fetchWithTimeout; } });
/**
 * 带有重试功能的fetch请求。
 * @param url - 请求的URL。
 * @param options - fetch请求的选项。
 * @param retries - 最大重试次数。
 * @param delay - 每次重试之间的延迟时间（毫秒）。
 * @returns 返回一个Promise，包含fetch请求的响应。
 */
var retryFetch_1 = require("./retryFetch");
Object.defineProperty(exports, "retryFetch", { enumerable: true, get: function () { return retryFetch_1.retryFetch; } });
