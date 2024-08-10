/**
 * 观察元素是否在视口内可见。
 * @param element - 要观察的HTML元素。
 * @param callback - 当元素可见时触发的回调函数。
 * @returns 返回一个解除观察的函数。
 */
export function observeElementVisibility(element: HTMLElement, callback: () => void): () => void {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              callback();
          }
      });
  });

  observer.observe(element);

  return () => {
      observer.unobserve(element);
  };
}
