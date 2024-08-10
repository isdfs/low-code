/**
 * 图像比较模块，用于比较两张图像的相似度。
 * @module ImageComparator
 */

class ImageComparator {
  /**
   * 比较两张图像的相似度。
   * @param {Blob | HTMLImageElement} image1 - 第一个图像。
   * @param {Blob | HTMLImageElement} image2 - 第二个图像。
   * @returns {Promise<number>} 返回两张图像的相似度，0 表示完全不同，1 表示完全相同。
   */
  async compare(image1: Blob | HTMLImageElement, image2: Blob | HTMLImageElement): Promise<number> {
      const img1Data = await this.getImageData(image1);
      const img2Data = await this.getImageData(image2);

      if (img1Data.width !== img2Data.width || img1Data.height !== img2Data.height) {
          return 0; // 图像尺寸不同，认为完全不同
      }

      let diff = 0;
      for (let i = 0; i < img1Data.data.length; i++) {
          diff += Math.abs(img1Data.data[i] - img2Data.data[i]);
      }

      const maxDiff = img1Data.data.length * 255;
      return 1 - diff / maxDiff;
  }

  /**
   * 获取图像的 ImageData。
   * @param {Blob | HTMLImageElement} image - 图像源。
   * @returns {Promise<ImageData>} 返回图像的 ImageData。
   */
  private async getImageData(image: Blob | HTMLImageElement): Promise<ImageData> {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      if (image instanceof Blob) {
          const url = URL.createObjectURL(image);
          img.src = url;
      } else {
          img.src = image.src;
      }

      return new Promise((resolve, reject) => {
          img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx?.drawImage(img, 0, 0);
              resolve(ctx!.getImageData(0, 0, img.width, img.height));
          };

          img.onerror = () => {
              reject(new Error('图像加载失败'));
          };
      });
  }
}

const imageComparator = new ImageComparator();
export default imageComparator;
