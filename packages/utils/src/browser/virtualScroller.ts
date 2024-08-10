/**
 * 虚拟滚动模块，用于处理大规模列表的高效渲染。
 * @module VirtualScroller
 */

interface VirtualScrollerOptions {
  itemHeight: number; // 每个列表项的高度
  containerHeight: number; // 容器的高度
}

class VirtualScroller {
  private container: HTMLElement;
  private content: HTMLElement;
  private itemHeight: number;
  private containerHeight: number;
  private itemCount: number;
  private totalHeight: number;
  private startIndex: number = 0;
  private endIndex: number = 0;

  constructor(container: HTMLElement, options: VirtualScrollerOptions) {
      this.container = container;
      this.itemHeight = options.itemHeight;
      this.containerHeight = options.containerHeight;

      this.content = document.createElement('div');
      this.content.style.position = 'relative';
      this.container.appendChild(this.content);

      this.container.addEventListener('scroll', this.onScroll.bind(this));
  }

  /**
   * 设置列表的总项数。
   * @param {number} itemCount - 列表项的总数。
   */
  setItemCount(itemCount: number): void {
      this.itemCount = itemCount;
      this.totalHeight = this.itemHeight * this.itemCount;
      this.content.style.height = `${this.totalHeight}px`;
      this.updateVisibleItems();
  }

  private onScroll(): void {
      this.updateVisibleItems();
  }

  private updateVisibleItems(): void {
      const scrollTop = this.container.scrollTop;
      const visibleItemCount = Math.ceil(this.containerHeight / this.itemHeight);

      this.startIndex = Math.floor(scrollTop / this.itemHeight);
      this.endIndex = Math.min(this.startIndex + visibleItemCount, this.itemCount - 1);

      this.renderItems();
  }

  private renderItems(): void {
      this.content.innerHTML = '';

      for (let i = this.startIndex; i <= this.endIndex; i++) {
          const item = this.createItem(i);
          item.style.position = 'absolute';
          item.style.top = `${i * this.itemHeight}px`;
          this.content.appendChild(item);
      }
  }

  private createItem(index: number): HTMLElement {
      const item = document.createElement('div');
      item.style.height = `${this.itemHeight}px`;
      item.style.lineHeight = `${this.itemHeight}px`;
      item.style.boxSizing = 'border-box';
      item.style.borderBottom = '1px solid #ddd';
      item.textContent = `Item ${index}`;
      return item;
  }
}

export default VirtualScroller;
