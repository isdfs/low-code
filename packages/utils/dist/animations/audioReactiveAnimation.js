"use strict";
/**
* AudioReactiveAnimation 类实现了音频响应动画。
*/
var AudioReactiveAnimation = /** @class */ (function () {
    function AudioReactiveAnimation(element, options) {
        this.animationFrameId = null;
        this.element = element;
        this.audioElement = options.audioElement;
        var audioContext = new (window.AudioContext || window.webkitAudioContext)();
        var source = audioContext.createMediaElementSource(this.audioElement);
        this.analyser = audioContext.createAnalyser();
        source.connect(this.analyser);
        this.analyser.connect(audioContext.destination);
        this.analyser.fftSize = 256;
        this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount);
        this.init(options.mapFrequencyToAnimation);
    }
    /**
     * init 方法初始化音频响应动画。
     */
    AudioReactiveAnimation.prototype.init = function (mapFrequencyToAnimation) {
        var _this = this;
        var animate = function () {
            _this.analyser.getByteFrequencyData(_this.frequencyData);
            mapFrequencyToAnimation(_this.frequencyData, _this.element);
            _this.animationFrameId = requestAnimationFrame(animate);
        };
        this.audioElement.addEventListener('play', function () {
            animate();
        });
        this.audioElement.addEventListener('pause', function () {
            if (_this.animationFrameId) {
                cancelAnimationFrame(_this.animationFrameId);
            }
        });
    };
    return AudioReactiveAnimation;
}());
/**
* 使用示例：
* const audioElement = document.querySelector('audio#myAudio') as HTMLAudioElement;
* const audioAnim = new AudioReactiveAnimation(myElement, {
*     audioElement,
*     mapFrequencyToAnimation: (frequencyData, element) => {
*         const maxFreq = Math.max(...frequencyData);
*         element.style.transform = `scale(${1 + maxFreq / 255})`;
*     }
* });
* // 根据音频的频率动态调整动画效果
*/
