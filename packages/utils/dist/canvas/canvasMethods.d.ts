/**
 * 在 Canvas 上绘制文本
 * @param ctx Canvas 渲染上下文
 * @param text 要绘制的文本
 * @param x 文本的起始 x 坐标
 * @param y 文本的起始 y 坐标
 * @param options 绘制选项，如字体、颜色、对齐方式等
 *
 * @example
 * // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
 * // const ctx = canvas.getContext("2d");
 * // drawTextOnCanvas(ctx, "Hello World", 100, 100, { font: "20px Arial", color: "black", textAlign: "center" });
 */
export declare function drawTextOnCanvas(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, options?: {
    font?: string;
    color?: string;
    textAlign?: CanvasTextAlign;
    maxWidth?: number;
    lineHeight?: number;
}): void;
/**
* 在 Canvas 上绘制图像并应用滤镜效果
* @param ctx Canvas 渲染上下文
* @param img HTMLImageElement 或者 CanvasImageSource
* @param x 图像的起始 x 坐标
* @param y 图像的起始 y 坐标
* @param width 图像的宽度
* @param height 图像的高度
* @param filter CSS 滤镜字符串，如 "grayscale(100%)"
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // const img = new Image();
* // img.src = "path/to/image.jpg";
* // img.onload = () => {
* //     drawImageWithFilter(ctx, img, 50, 50, 200, 200, "blur(5px)");
* // };
*/
export declare function drawImageWithFilter(ctx: CanvasRenderingContext2D, img: CanvasImageSource, x: number, y: number, width: number, height: number, filter?: string): void;
/**
* 创建可重复的图案并应用到 Canvas
* @param ctx Canvas 渲染上下文
* @param img HTMLImageElement 或者 CanvasImageSource
* @param repetition 图案重复方式，可选 "repeat", "repeat-x", "repeat-y", "no-repeat"
* @returns CanvasPattern 对象
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // const img = new Image();
* // img.src = "path/to/pattern.jpg";
* // img.onload = () => {
* //     const pattern = createPattern(ctx, img, "repeat");
* //     ctx.fillStyle = pattern!;
* //     ctx.fillRect(0, 0, canvas.width, canvas.height);
* // };
*/
export declare function createPattern(ctx: CanvasRenderingContext2D, img: CanvasImageSource, repetition?: string): CanvasPattern | null;
/**
* 测量文本在 Canvas 上的宽度
* @param ctx Canvas 渲染上下文
* @param text 要测量的文本
* @returns 文本的宽度
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // const width = measureTextWidth(ctx, "Hello World");
* // console.log("Text width:", width);
*/
export declare function measureTextWidth(ctx: CanvasRenderingContext2D, text: string): number;
/**
* 将 Canvas 内容保存为图像文件并下载
* @param canvas HTMLCanvasElement 对象
* @param format 图像格式，如 "png", "jpeg"
* @param fileName 下载的文件名
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // saveCanvasToFile(canvas, "png", "myCanvas.png");
*/
export declare function saveCanvasToFile(canvas: HTMLCanvasElement, format?: string, fileName?: string): void;
/**
* 在 Canvas 上应用渐变效果
* @param ctx Canvas 渲染上下文
* @param x0 渐变的起始 x 坐标
* @param y0 渐变的起始 y 坐标
* @param x1 渐变的结束 x 坐标
* @param y1 渐变的结束 y 坐标
* @param colors 渐变颜色数组，每个元素包含颜色值和位置（0~1之间）
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // applyGradient(ctx, 0, 0, canvas.width, canvas.height, [
* //   { color: "red", stop: 0 },
* //   { color: "blue", stop: 1 }
* // ]);
*/
export declare function applyGradient(ctx: CanvasRenderingContext2D, x0: number, y0: number, x1: number, y1: number, colors: {
    color: string;
    stop: number;
}[]): void;
/**
* 绘制带圆角的矩形
* @param ctx Canvas 渲染上下文
* @param x 矩形的起始 x 坐标
* @param y 矩形的起始 y 坐标
* @param width 矩形的宽度
* @param height 矩形的高度
* @param radius 圆角半径
* @param fillColor 填充颜色
* @param strokeColor 边框颜色
* @param lineWidth 边框宽度
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // drawRoundedRectangle(ctx, 50, 50, 200, 100, 10, "blue", "black", 2);
*/
export declare function drawRoundedRectangle(ctx: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius?: number, fillColor?: string, strokeColor?: string, lineWidth?: number): void;
/**
* 绘制复杂的几何图形
* @param ctx Canvas 渲染上下文
* @param points 形状的顶点坐标数组
* @param fillColor 填充颜色
* @param strokeColor 边框颜色
* @param lineWidth 边框宽度
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // drawComplexShape(ctx, [
* //   { x: 100, y: 100 },
* //   { x: 150, y: 50 },
* //   { x: 200, y: 100 },
* //   { x: 150, y: 150 }
* // ], "red", "black", 2);
*/
export declare function drawComplexShape(ctx: CanvasRenderingContext2D, points: {
    x: number;
    y: number;
}[], fillColor?: string, strokeColor?: string, lineWidth?: number): void;
/**
* 实现 Canvas 元素的动画效果
* @param ctx Canvas 渲染上下文
* @param drawFunction 自定义的绘制函数，定义动画的内容
* @param duration 动画持续时间，单位为毫秒
* @param easing 动画缓动函数，控制动画速度曲线
* @param onComplete 动画完成时的回调函数
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // const ctx = canvas.getContext("2d");
* // animateCanvasElement(ctx, (progress) => {
* //     ctx.clearRect(0, 0, canvas.width, canvas.height);
* //     ctx.beginPath();
* //     ctx.arc(100 + progress * 100, 100, 50, 0, Math.PI * 2);
* //     ctx.fill();
* // }, 1000, (t) => t, () => console.log("Animation complete"));
*/
export declare function animateCanvasElement(ctx: CanvasRenderingContext2D, drawFunction: (progress: number) => void, duration?: number, easing?: (t: number) => number, onComplete?: () => void): void;
/**
* 处理 Canvas 上的用户交互事件
* @param canvas HTMLCanvasElement 对象
* @param eventHandlers 一个包含事件处理函数的对象
*
* @example
* // const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
* // handleCanvasEvents(canvas, {
* //     click: (event) => console.log("Canvas clicked", event),
* //     mousemove: (event) => console.log("Mouse moved", event),
* //     touchstart: (event) => console.log("Touch started", event)
* // });
*/
export declare function handleCanvasEvents(canvas: HTMLCanvasElement, eventHandlers: {
    [eventType: string]: (event: Event) => void;
}): void;
