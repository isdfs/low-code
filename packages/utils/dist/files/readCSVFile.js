"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCSVFile = void 0;
/**
 * 读取并解析CSV文件，将其转换为对象数组。
 * @param file - 要读取的CSV文件。
 * @returns 返回一个Promise，包含解析后的对象数组。
 */
function readCSVFile(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var text = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            var rows = text.split('\n').map(function (row) { return row.split(','); });
            var header = rows[0];
            var data = rows.slice(1).map(function (row) {
                var obj = {};
                row.forEach(function (value, index) {
                    obj[header[index]] = value;
                });
                return obj;
            });
            resolve(data);
        };
        reader.onerror = function () {
            reject(new Error('Error reading file'));
        };
        reader.readAsText(file);
    });
}
exports.readCSVFile = readCSVFile;
