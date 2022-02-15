<template>
  <el-form :inline="true" :model="config">
    <el-form-item label="图片大小">
      <el-input-number
        v-model="config.size"
        :min="0"
        :step="step"
        label="图片大小"
        @change="handleChange"
      />
    </el-form-item>
    <el-form-item label="转换字符">
      <el-input v-model="config.char" placeholder="转换字符" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" circle title="转换" @click="convert">
        <el-icon><i-ri-qr-scan-2-line /></el-icon>
      </el-button>
    </el-form-item>
  </el-form>

  <div>
    <el-color-picker v-model="textColor" />
  </div>

  <hr>
  <br>

  <el-upload
    ref="imageUploadRef"
    drag
    action="/"
    :limit="1"
    :accept="'image/*'"
    :auto-upload="false"
    :on-change="onChange"
    :before-upload="beforeImageUpload"
  >
    <div class="flex h-full flex-col justify-center items-center">
      <i-ri-upload-cloud-line text="5xl" />
      <div class="el-upload__text" m="t-2">
        将文件拖到此处，或<em>点击上传</em>
      </div>
      <div class="el-upload__tip">
        只能上传 {{ supportedFormats.join("/") }} 文件，且尽量不要过大
      </div>
    </div>
    <img v-if="image" class="preview-image" :src="image.src">
  </el-upload>

  <el-slider v-model="config.scale" show-input />
  <el-input
    v-model="textarea"
    class="cd-text-container"
    type="textarea"
    autosize
    placeholder="ASCII 画"
    :style="textareaStyle"
  />
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { useCssVar } from '@vueuse/core'

import type { UploadFile } from 'element-plus/lib/components/upload/src/upload.type'

import { DEFAULT_AVAILABLE_CHARS, getImageData, imageToText } from 'char-dust'
import { ElMessage } from 'element-plus'
import { checkImageType } from '../utils/imageCommon'

const config = reactive({
  size: 300,
  char: DEFAULT_AVAILABLE_CHARS,
  scale: 100,
})

const textColor = useCssVar('--cd-text-color')

const step = ref(50)
const image = ref<HTMLImageElement>()
const supportedFormats = ['jpg', 'png', 'gif']
const textarea = ref('')
const imageUploadRef = ref()

const textareaStyle = computed(() => {
  return {
    width: `${100 / (config.scale / 100)}%`,
    transformOrigin: 'left top',
    transform: `scale(${config.scale / 100})`,
  }
})

function handleChange() {
  if (!image.value) return
  scaleImageContainer(image.value)
}

/**
 * 开始转换
 */
function convert() {
  if (!image.value) {
    ElMessage.warning('请先上传图片～')
    return
  }
  const imageData = getImageData(image.value)
  const text = imageToText(imageData, config.char)
  textarea.value = text.join('\n')
  // eslint-disable-next-line no-console
  console.log(text)
  ElMessage.success('转化完成')
}

/**
 * 当改变设置的图片大小时
 */
function onChange(file: UploadFile) {
  if (file) {
    previewImage(file);
    (imageUploadRef.value as any).clearFiles()
  }
}

function beforeImageUpload(file: File) {
  if (!checkImageType(file.type)) {
    ElMessage.error(`目前只支持 ${supportedFormats.join('/')} 格式的文件`)
    return false
  }
  return true
}

/**
 * 预览图片
 */
function previewImage(file: UploadFile) {
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = (event) => {
    image.value = new Image()
    image.value.onload = () => {
      if (image.value)
        scaleImageContainer(image.value)
    }
    if (event.target)
      image.value.src = event.target.result as string
  }
}

/**
 * 缩放 Upload Image 容器大小
 */
function scaleImageContainer(image: HTMLImageElement) {
  const uploadContainer = document.querySelector(
    '.el-upload-dragger',
  ) as HTMLElement

  let targetWidth = config.size
  if (!targetWidth && image.width)
    targetWidth = image.width

  const ratio = image.width / targetWidth
  const targetHeight = image.height / ratio

  image.width = targetWidth
  image.height = targetHeight

  uploadContainer.style.width = `${targetWidth}px`
  uploadContainer.style.height = `${targetHeight}px`
}
</script>
