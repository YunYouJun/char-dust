import { TinyColor } from "@ctrl/tinycolor";
import { DEFAULT_AVAILABLE_CHARS, FONT_WIDTH, FONT_HEIGHT } from "./constant";

export * from "./constant";
export * from "./utils";

// rgbToGray
// https://www.w3.org/TR/AERT/#color-contrast
// https://github.com/scttcper/tinycolor#getbrightness

/**
 * 亮度转字符
 * @param brightness
 */
export function grayToText(
  brightness: number,
  chars = DEFAULT_AVAILABLE_CHARS
): string {
  const gap = 255 / chars.length;

  let charIndex = Math.floor(brightness / gap);
  if (charIndex >= chars.length) {
    charIndex = chars.length - 1;
  }
  return chars[charIndex];
}

/**
 * 图片转字符
 * @param imageData
 * @param chars
 */
export function imageToText(
  imageData: ImageData,
  chars = DEFAULT_AVAILABLE_CHARS
): string[] {
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
      line += grayToText(color.getBrightness(), chars);
    }
    lines.push(line);
  }

  return lines;
}
