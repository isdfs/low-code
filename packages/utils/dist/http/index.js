"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpPost = exports.httpGet = exports.httpRequest = void 0;
/**
 * 发起 HTTP 请求
 *
 * @param {string} url - 请求 URL
 * @param {RequestInit} [options] - 请求配置
 * @returns {Promise<any>} 请求结果
 *
 * @example
 * httpRequest('https://jsonplaceholder.typicode.com/todos/1')
 *   .then(data => console.log(data))
 *   .catch(error => console.error(error));
 */
var httpRequest_1 = require("./httpRequest");
Object.defineProperty(exports, "httpRequest", { enumerable: true, get: function () { return httpRequest_1.httpRequest; } });
/**
 * GET 请求
 *
 * @param {string} url - 请求 URL
 * @returns {Promise<any>} 请求结果
 */
var httpRequest_2 = require("./httpRequest");
Object.defineProperty(exports, "httpGet", { enumerable: true, get: function () { return httpRequest_2.httpGet; } });
/**
 * POST 请求
 *
 * @param {string} url - 请求 URL
 * @param {any} body - 请求体
 * @returns {Promise<any>} 请求结果
 */
var httpRequest_3 = require("./httpRequest");
Object.defineProperty(exports, "httpPost", { enumerable: true, get: function () { return httpRequest_3.httpPost; } });
