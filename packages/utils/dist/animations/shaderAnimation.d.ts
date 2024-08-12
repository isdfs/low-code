/**
 * ShaderAnimationOptions 用于配置着色器动画的选项。
 * @param vertexShaderSource - 顶点着色器的 GLSL 源代码。
 * @param fragmentShaderSource - 片段着色器的 GLSL 源代码。
 * @param uniforms - 着色器中使用的 uniform 变量及其初始值。
 */
interface ShaderAnimationOptions {
    vertexShaderSource: string;
    fragmentShaderSource: string;
    uniforms: {
        [key: string]: any;
    };
}
/**
* ShaderAnimation 类实现了基于 WebGL 的着色器动画。
*/
declare class ShaderAnimation {
    private gl;
    private program;
    private uniforms;
    private animationFrameId;
    constructor(canvas: HTMLCanvasElement, options: ShaderAnimationOptions);
    /**
     * start 方法开始着色器动画。
     */
    start(): void;
    /**
     * stop 方法停止着色器动画。
     */
    stop(): void;
    /**
     * createShaderProgram 方法创建并编译着色器程序。
     */
    private createShaderProgram;
    /**
     * createShader 方法编译单个着色器。
     */
    private createShader;
    /**
     * getUniformLocations 方法获取着色器中 uniform 变量的位置。
     */
    private getUniformLocations;
    /**
     * updateUniforms 方法在每帧更新 uniform 变量。
     */
    private updateUniforms;
}
/**
* 使用示例：
* const vertexShaderSource = `
*     attribute vec4 a_position;
*     void main() {
*         gl_Position = a_position;
*     }
* `;
* const fragmentShaderSource = `
*     precision mediump float;
*     uniform float u_time;
*     void main() {
*         gl_FragColor = vec4(sin(u_time), cos(u_time), 0.5, 1.0);
*     }
* `;
* const shaderAnim = new ShaderAnimation(canvasElement, {
*     vertexShaderSource,
*     fragmentShaderSource,
*     uniforms: { u_time: 0.0 }
* });
* shaderAnim.start(); // 启动着色器动画
*/
