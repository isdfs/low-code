"use strict";
/**
* ShaderAnimation 类实现了基于 WebGL 的着色器动画。
*/
var ShaderAnimation = /** @class */ (function () {
    function ShaderAnimation(canvas, options) {
        this.animationFrameId = null;
        this.gl = canvas.getContext('webgl');
        this.program = this.createShaderProgram(options.vertexShaderSource, options.fragmentShaderSource);
        this.uniforms = this.getUniformLocations(options.uniforms);
    }
    /**
     * start 方法开始着色器动画。
     */
    ShaderAnimation.prototype.start = function () {
        var _this = this;
        var render = function () {
            _this.updateUniforms();
            _this.gl.clear(_this.gl.COLOR_BUFFER_BIT);
            _this.gl.drawArrays(_this.gl.TRIANGLES, 0, 6);
            _this.animationFrameId = requestAnimationFrame(render);
        };
        render();
    };
    /**
     * stop 方法停止着色器动画。
     */
    ShaderAnimation.prototype.stop = function () {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
    };
    /**
     * createShaderProgram 方法创建并编译着色器程序。
     */
    ShaderAnimation.prototype.createShaderProgram = function (vertexSource, fragmentSource) {
        var vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexSource);
        var fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentSource);
        var program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        if (!this.gl.getProgramParameter(program, this.gl.LINK_STATUS)) {
            console.error('Could not link shader program:', this.gl.getProgramInfoLog(program));
        }
        this.gl.useProgram(program);
        return program;
    };
    /**
     * createShader 方法编译单个着色器。
     */
    ShaderAnimation.prototype.createShader = function (type, source) {
        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            console.error('Shader compile error:', this.gl.getShaderInfoLog(shader));
        }
        return shader;
    };
    /**
     * getUniformLocations 方法获取着色器中 uniform 变量的位置。
     */
    ShaderAnimation.prototype.getUniformLocations = function (uniforms) {
        var _this = this;
        var locations = {};
        Object.keys(uniforms).forEach(function (key) {
            locations[key] = _this.gl.getUniformLocation(_this.program, key);
        });
        return locations;
    };
    /**
     * updateUniforms 方法在每帧更新 uniform 变量。
     */
    ShaderAnimation.prototype.updateUniforms = function () {
        var _this = this;
        Object.keys(this.uniforms).forEach(function (key) {
            // 假设所有的 uniform 变量都是 float 类型，需要根据实际情况调整
            _this.gl.uniform1f(_this.uniforms[key], Math.random()); // 例如用随机数更新 uniform
        });
    };
    return ShaderAnimation;
}());
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
