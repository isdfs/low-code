"use strict";
/**
 * 虚拟滚动模块，用于处理大规模列表的高效渲染。
 * @module VirtualScroller
 */
Object.defineProperty(exports, "__esModule", { value: true });
var VirtualScroller = /** @class */ (function () {
    function VirtualScroller(container, options) {
        this.startIndex = 0;
        this.endIndex = 0;
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
    VirtualScroller.prototype.setItemCount = function (itemCount) {
        this.itemCount = itemCount;
        this.totalHeight = this.itemHeight * this.itemCount;
        this.content.style.height = "".concat(this.totalHeight, "px");
        this.updateVisibleItems();
    };
    VirtualScroller.prototype.onScroll = function () {
        this.updateVisibleItems();
    };
    VirtualScroller.prototype.updateVisibleItems = function () {
        var scrollTop = this.container.scrollTop;
        var visibleItemCount = Math.ceil(this.containerHeight / this.itemHeight);
        this.startIndex = Math.floor(scrollTop / this.itemHeight);
        this.endIndex = Math.min(this.startIndex + visibleItemCount, this.itemCount - 1);
        this.renderItems();
    };
    VirtualScroller.prototype.renderItems = function () {
        this.content.innerHTML = '';
        for (var i = this.startIndex; i <= this.endIndex; i++) {
            var item = this.createItem(i);
            item.style.position = 'absolute';
            item.style.top = "".concat(i * this.itemHeight, "px");
            this.content.appendChild(item);
        }
    };
    VirtualScroller.prototype.createItem = function (index) {
        var item = document.createElement('div');
        item.style.height = "".concat(this.itemHeight, "px");
        item.style.lineHeight = "".concat(this.itemHeight, "px");
        item.style.boxSizing = 'border-box';
        item.style.borderBottom = '1px solid #ddd';
        item.textContent = "Item ".concat(index);
        return item;
    };
    return VirtualScroller;
}());
exports.default = VirtualScroller;
