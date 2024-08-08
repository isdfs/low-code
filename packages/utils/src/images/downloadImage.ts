// src/images/downloadImage.ts

/**
 * 生成图片文件的下载链接并自动触发下载
 *
 * @param {Blob} blob - 图片 Blob 对象
 * @param {string} filename - 文件名
 *
 * @example
 * const blob = new Blob(["..."], { type: "image/png" });
 * downloadImage(blob, 'download.png');
 */
export function downloadImage(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;

  document.body.appendChild(link);
  link.click();

  // 清理
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
