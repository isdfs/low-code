/**
 * 虚拟滚动模块，用于处理大规模列表的高效渲染。
 * @module VirtualScroller
 */
interface VirtualScrollerOptions {
    itemHeight: number;
    containerHeight: number;
}
declare class VirtualScroller {
    private container;
    private content;
    private itemHeight;
    private containerHeight;
    private itemCount;
    private totalHeight;
    private startIndex;
    private endIndex;
    constructor(container: HTMLElement, options: VirtualScrollerOptions);
    /**
     * 设置列表的总项数。
     * @param {number} itemCount - 列表项的总数。
     */
    setItemCount(itemCount: number): void;
    private onScroll;
    private updateVisibleItems;
    private renderItems;
    private createItem;
}
export default VirtualScroller;
