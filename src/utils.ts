export function getImageData(image: HTMLImageElement): ImageData {
  let canvas: HTMLCanvasElement

  if (document) {
    canvas = document.createElement('canvas')
  }
  else if (require('canvas')) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { createCanvas } = require('canvas')
    canvas = createCanvas(image.width, image.height)
  }
  else {
    console.warn(
      'If you use it in Node.js without document, you need `npm install canvas`.',
    )
    return
  }

  const ctx = canvas.getContext('2d')

  const ratio = image.width / image.naturalWidth

  canvas.width = image.width
  canvas.height = image.height

  ctx.scale(ratio, ratio)
  ctx.drawImage(image, 0, 0)
  const imageData = ctx.getImageData(0, 0, image.width, image.height)

  return imageData
}
