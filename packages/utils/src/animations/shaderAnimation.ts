/**
 * ShaderAnimationOptions 用于配置着色器动画的选项。
 * @param vertexShaderSource - 顶点着色器的 GLSL 源代码。
 * @param fragmentShaderSource - 片段着色器的 GLSL 源代码。
 * @param uniforms - 着色器中使用的 uniform 变量及其初始值。
 */
interface ShaderAnimationOptions {
  vertexShaderSource: string;
  fragmentShaderSource: string;
  uniforms: { [key: string]: any };
}

/**
* ShaderAnimation 类实现了基于 WebGL 的着色器动画。
*/
class ShaderAnimation {
  private gl: WebGLRenderingContext;
  private program: WebGLProgram;
  private uniforms: { [key: string]: WebGLUniformLocation };
  private animationFrameId: number | null = null;

  constructor(canvas: HTMLCanvasElement, options: ShaderAnimationOptions) {
      this.gl = canvas.getContext('webgl')!;
      this.program = this.createShaderProgram(options.vertexShaderSource, options.fragmentShaderSource);
      this.uniforms = this.getUniformLocations(options.uniforms);
  }

  /**
   * start 方法开始着色器动画。
   */
  start() {
      const render = () => {
          this.updateUniforms();
          this.gl.clear(this.gl.COLOR_BUFFER_BIT);
          this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
          this.animationFrameId = requestAnimationFrame(render);
      };
      render();
  }

  /**
   * stop 方法停止着色器动画。
   */
  stop() {
      if (this.animationFrameId) {
          cancelAnimationFrame(this.animationFrameId);
      }
  }

  /**
   * createShaderProgram 方法创建并编译着色器程序。
   */
  private createShaderProgram(vertexSource: string, fragmentSource: string): WebGLProgram {
      const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
      const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);

      const program = this.gl.createProgram()!;
      this.gl.attachShader(program, vertexShader);
      this.gl.attachShader(program, fragmentShader);
      this.gl.linkProgram(program);

      if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
          console.error('Could not link shader program:', this.gl.getProgramInfoLog(program));
      }

      this.gl.useProgram(program);
      return program;
  }

  /**
   * createShader 方法编译单个着色器。
   */
  private createShader(type: number, source: string): WebGLShader {
      const shader = this.gl.createShader(type)!;
      this.gl.shaderSource(shader, source);
      this.gl.compileShader(shader);

      if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
          console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
      }

      return shader;
  }

  /**
   * getUniformLocations 方法获取着色器中 uniform 变量的位置。
   */
  private getUniformLocations(uniforms: { [key: string]: any }): { [key: string]: WebGLUniformLocation } {
      const locations: { [key: string]: WebGLUniformLocation } = {};
      Object.keys(uniforms).forEach(key => {
          locations[key] = this.gl.getUniformLocation(this.program, key)!;
      });
      return locations;
  }

  /**
   * updateUniforms 方法在每帧更新 uniform 变量。
   */
  private updateUniforms() {
      Object.keys(this.uniforms).forEach(key => {
          // 假设所有的 uniform 变量都是 float 类型，需要根据实际情况调整
          this.gl.uniform1f(this.uniforms[key], Math.random()); // 例如用随机数更新 uniform
      });
  }
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
