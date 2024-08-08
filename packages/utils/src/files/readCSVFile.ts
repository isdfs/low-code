/**
 * 读取并解析CSV文件，将其转换为对象数组。
 * @param file - 要读取的CSV文件。
 * @returns 返回一个Promise，包含解析后的对象数组。
 */
export function readCSVFile(file: File): Promise<object[]> {
  return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function(event) {
          const text = event.target?.result as string;
          const rows = text.split('\n').map(row => row.split(','));
          const header = rows[0];
          const data = rows.slice(1).map(row => {
              const obj: Record<string, string> = {};
              row.forEach((value, index) => {
                  obj[header[index]] = value;
              });
              return obj;
          });
          resolve(data);
      };
      reader.onerror = function() {
          reject(new Error('Error reading file'));
      };
      reader.readAsText(file);
  });
}
