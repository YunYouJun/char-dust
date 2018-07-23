<template>
  <el-upload
    class="upload-demo"
    ref="imageUpload"
    drag
    action="/"
    :limit=1
    :accept="'image/*'"
    :auto-upload="false"
    :on-change="onChange"
    >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传 jpg/png/gif 文件，且尽量不要过大</div>
    <img class="preview-image" :src="image.src">
  </el-upload>
</template>

<script>
/* eslint-disable */
import { checkImageType } from '@/utils/imageCommon'
export default {
  data () {
    return {
      image: ''
    }
  },
  methods: {
    onChange (file) {
      if (file) {
        console.log(file)
        this.previewImage(file)
        this.$refs.imageUpload.clearFiles()
      }
    },
    previewImage(file) {
      if (!checkImageType(file.raw.type)) {
        alert('不支持该格式的文件')
        return
      }
      let self = this
      const reader = new FileReader()
      reader.readAsDataURL(file.raw)
      reader.onload = function(event) {
        self.image = new Image()
        self.image.onload = function () {
          self.scaleImageContainer(self.image)
        }
        self.image.src = event.target.result
      }
    },
    scaleImageContainer(image) {
      let container = document.getElementsByClassName('el-upload-dragger')[0]
      container.style.width = image.width + 'px'
      container.style.height = image.height + 'px'
    }
  }
}
</script>

<style>
.preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.preview-image[src=''] {
  visibility: hidden;
}
</style>
