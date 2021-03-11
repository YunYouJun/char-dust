export function getImageData(image: HTMLImageElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const ratio = image.width / image.naturalWidth;

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.scale(ratio, ratio);
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, image.width, image.height);

  return imageData;
}
