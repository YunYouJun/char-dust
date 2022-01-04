const IMAGE_TYPES_RE: Record<string, RegExp> = {
  PNG: /image\/png/,
  JPG: /image\/jpe?g/,
  GIF: /image\/gif/,
}

/**
 * 获取图片类型(png, jpg, gif)
 *
 * @export
 * @param type
 * @returns
 */
export function getImageType(type: string): string {
  // eslint-disable-next-line no-restricted-syntax
  for (const typeName in IMAGE_TYPES_RE) {
    const typeRe = IMAGE_TYPES_RE[typeName]
    if (typeRe.test(type))
      return typeName
  }
  return ''
}

/**
 * 检测图片类型是否可用
 *
 * @export
 * @param type
 * @returns
 */
export function checkImageType(type: string): boolean {
  // eslint-disable-next-line no-restricted-syntax
  for (const typeName in IMAGE_TYPES_RE) {
    const typeRe = IMAGE_TYPES_RE[typeName]
    if (typeRe.test(type))
      return true
  }
  return false
}
