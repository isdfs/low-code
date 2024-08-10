// 文件名: syncSubtitles.ts

/**
 * 实时字幕同步
 * @param {HTMLVideoElement} videoElement - 要同步字幕的视频元素
 * @param {string} subtitleUrl - 字幕文件的URL
 * @param {string} language - 字幕语言（可选）
 * @returns {Promise<void>}
 * @description 该函数加载指定URL的字幕文件，并在视频播放时同步显示字幕。
 */
export async function syncSubtitles(videoElement: HTMLVideoElement, subtitleUrl: string, language: string = 'en'): Promise<void> {
  const response = await fetch(subtitleUrl);
  const subtitleText = await response.text();
  const subtitles = parseSRT(subtitleText, language);

  const subtitleDiv = document.createElement('div');
  subtitleDiv.style.position = 'absolute';
  subtitleDiv.style.bottom = '10px';
  subtitleDiv.style.width = '100%';
  subtitleDiv.style.textAlign = 'center';
  subtitleDiv.style.color = 'white';
  subtitleDiv.style.fontSize = '20px';
  subtitleDiv.style.textShadow = '2px 2px 4px #000';
  document.body.appendChild(subtitleDiv);

  videoElement.addEventListener('timeupdate', () => {
      const currentTime = videoElement.currentTime;
      const subtitle = getSubtitleForTime(subtitles, currentTime);
      subtitleDiv.textContent = subtitle ? subtitle.text : '';
  });

  function parseSRT(srtText: string, lang: string) {
      const subtitleEntries = [];
      const regex = /(\d+)\n(\d{2}):(\d{2}):(\d{2}),(\d{3}) --> (\d{2}):(\d{2}):(\d{2}),(\d{3})\n([\s\S]*?)(?=\n{2}|$)/g;
      let match;
      while ((match = regex.exec(srtText)) !== null) {
          subtitleEntries.push({
              start: parseTime(match[2], match[3], match[4], match[5]),
              end: parseTime(match[6], match[7], match[8], match[9]),
              text: match[10].replace(/\n/g, ' ')
          });
      }
      return subtitleEntries;

      function parseTime(hh: string, mm: string, ss: string, ms: string) {
          return parseInt(hh) * 3600 + parseInt(mm) * 60 + parseInt(ss) + parseInt(ms) / 1000;
      }
  }

  function getSubtitleForTime(subtitles: any[], currentTime: number) {
      return subtitles.find(subtitle => currentTime >= subtitle.start && currentTime <= subtitle.end);
  }
}

/*
使用示例:

import { syncSubtitles } from './syncSubtitles';

const videoElement = document.getElementById('myVideo') as HTMLVideoElement;
const subtitleUrl = 'https://example.com/subtitles.srt';

syncSubtitles(videoElement, subtitleUrl, 'en').then(() => {
  videoElement.play();
}).catch(error => {
  console.error('同步字幕失败:', error);
});

*/
