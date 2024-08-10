/**
 * 图像格式转换模块，提供不同图像格式之间的转换功能。
 * @module ImageFormatConverter
 */

export interface ImageFormatOptions {
  format: 'jpeg' | 'png' | 'webp';
  quality?: number; // 质量, 仅对有损格式有效，如 jpeg, webp
}

class ImageFormatConverter {
  /**
   * 将图像转换为指定格式。
   * @param {HTMLImageElement | Blob} image - 要转换的图像。
   * @param {ImageFormatOptions} options - 转换选项。
   * @returns {Promise<Blob>} 转换后的图像 Blob。
   */
  async convert(image: HTMLImageElement | Blob, options: ImageFormatOptions): Promise<Blob> {
      return new Promise((resolve, reject) => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          const img = new Image();

          if (image instanceof Blob) {
              const url = URL.createObjectURL(image);
              img.src = url;
          } else {
              img.src = image.src;
          }

          img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx?.drawImage(img, 0, 0);

              canvas.toBlob(
                  (blob) => {
                      if (blob) resolve(blob);
                      else reject(new Error('图像格式转换失败'));
                  },
                  `image/${options.format}`,
                  options.quality || 0.92
              );
          };

          img.onerror = () => {
              reject(new Error('图像加载失败'));
          };
      });
  }
}

const imageFormatConverter = new ImageFormatConverter();
export default imageFormatConverter;
