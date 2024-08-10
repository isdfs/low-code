/**
 * AudioReactiveAnimationOptions 用于配置音频响应动画的选项。
 * @param audioElement - 目标音频元素。
 * @param mapFrequencyToAnimation - 将频率数据映射到动画属性的函数。
 */
interface AudioReactiveAnimationOptions {
  audioElement: HTMLAudioElement;
  mapFrequencyToAnimation: (frequencyData: Uint8Array, element: HTMLElement) => void;
}

/**
* AudioReactiveAnimation 类实现了音频响应动画。
*/
class AudioReactiveAnimation {
  private audioElement: HTMLAudioElement;
  private element: HTMLElement;
  private analyser: AnalyserNode;
  private frequencyData: Uint8Array;
  private animationFrameId: number | null = null;

  constructor(element: HTMLElement, options: AudioReactiveAnimationOptions) {
      this.element = element;
      this.audioElement = options.audioElement;

      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const source = audioContext.createMediaElementSource(this.audioElement);
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
  private init(mapFrequencyToAnimation: (frequencyData: Uint8Array, element: HTMLElement) => void) {
      const animate = () => {
          this.analyser.getByteFrequencyData(this.frequencyData);
          mapFrequencyToAnimation(this.frequencyData, this.element);
          this.animationFrameId = requestAnimationFrame(animate);
      };
      this.audioElement.addEventListener('play', () => {
          animate();
      });
      this.audioElement.addEventListener('pause', () => {
          if (this.animationFrameId) {
              cancelAnimationFrame(this.animationFrameId);
          }
      });
  }
}

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
