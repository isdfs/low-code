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
declare class AudioReactiveAnimation {
    private audioElement;
    private element;
    private analyser;
    private frequencyData;
    private animationFrameId;
    constructor(element: HTMLElement, options: AudioReactiveAnimationOptions);
    /**
     * init 方法初始化音频响应动画。
     */
    private init;
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
