// src/images/compressImage.ts

/**
 * 压缩图片
 *
 * @param {File} imageFile - 图片文件
 * @param {number} quality - 压缩质量（0 - 1）
 * @returns {Promise<Blob>} 压缩后的图片 Blob 对象
 *
 * @example
 * const imageFile = new File(["..."], "image.png", { type: "image/png" });
 * compressImage(imageFile, 0.8).then(blob => console.log(blob));
 */
export function compressImage(imageFile: File, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = URL.createObjectURL(imageFile);

      img.onload = () => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          if (!ctx) {
              reject(new Error('Canvas context is not available.'));
              return;
          }

          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0);

          canvas.toBlob(
              (blob) => {
                  if (blob) resolve(blob);
                  else reject(new Error('Image compression failed.'));
              },
              imageFile.type,
              quality
          );
      };

      img.onerror = reject;
  });
}
