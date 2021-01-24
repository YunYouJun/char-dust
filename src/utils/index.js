import { TinyColor } from "@ctrl/tinycolor";

export const FONT_WIDTH = 6;
export const FONT_HEIGHT = 12;

// rgbToGray
// https://www.w3.org/TR/AERT/#color-contrast
// https://github.com/scttcper/tinycolor#getbrightness

/**
 * 亮度转字符
 * @param {number} brightness
 */
function grayToText(brightness) {
  // Todo
  return brightness;
}

/**
 * 图片转字符
 * @param {ImageData} imageData
 */
export function imageToText(imageData) {
  const data = imageData.data;
  const width = imageData.width;
  const height = imageData.height;
  const lines = [];
  for (let h = 0; h < height; h += FONT_HEIGHT) {
    let line = "";
    for (let w = 0; w < width; w += FONT_WIDTH) {
      const i = (w + width * h) * 4;
      const color = new TinyColor({
        r: data[i],
        g: data[i + 1],
        b: data[i + 2],
      });
      line += grayToText(color.getBrightness());
    }
    lines.push(line);
  }

  return lines;
}
