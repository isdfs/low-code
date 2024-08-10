/**
 * 使指定元素可拖动。
 * @param element - 要设置为可拖动的HTML元素。
 */
export function draggableElement(element: HTMLElement): void {
  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  element.style.position = 'absolute';
  element.addEventListener('mousedown', (event) => {
      offsetX = event.clientX - element.getBoundingClientRect().left;
      offsetY = event.clientY - element.getBoundingClientRect().top;
      isDragging = true;
  });

  document.addEventListener('mousemove', (event) => {
      if (isDragging) {
          element.style.left = `${event.clientX - offsetX}px`;
          element.style.top = `${event.clientY - offsetY}px`;
      }
  });

  document.addEventListener('mouseup', () => {
      isDragging = false;
  });
}
