<template>
  <el-form :inline="true" :model="config">
    <el-form-item label="图片大小">
      <el-input-number
        v-model="config.size"
        @change="handleChange"
        :min="0"
        :step="step"
        label="图片大小"
      ></el-input-number>
    </el-form-item>
    <el-form-item label="转换字符">
      <el-input v-model="config.char" placeholder="转换字符"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="convert">转换</el-button>
    </el-form-item>
  </el-form>

  <hr />
  <br />

  <el-upload
    ref="imageUpload"
    drag
    action="/"
    :limit="1"
    :accept="'image/*'"
    :auto-upload="false"
    :on-change="onChange"
    :before-upload="beforeImageUpload"
  >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip">
      只能上传 {{ supportedFormats.join("/") }} 文件，且尽量不要过大
    </div>
    <img class="preview-image" :src="image.src" />
  </el-upload>

  <hr />

  <el-input type="textarea" autosize placeholder="ASCII 画" v-model="textarea">
  </el-input>
</template>

<script lang="ts">
import { UploadFile } from "element-plus/lib/el-upload/src/upload.type";
import { defineComponent } from "vue";
import { checkImageType } from "../utils/imageCommon";
import { imageToText, getImageData } from "char-dust";

export default defineComponent({
  data() {
    return {
      config: {
        size: 300,
        char: "@#&$%863!i1uazvno~;*^+-. ",
      },

      step: 50,
      image: new Image(),
      supportedFormats: ["jpg", "png", "gif"],

      textarea: "",
    };
  },
  methods: {
    handleChange() {
      if (this.image) {
        this.scaleImageContainer(this.image);
      }
    },

    convert() {
      const imageData = getImageData(this.image);
      const text = imageToText(imageData);
      this.textarea = text.join("\n");
      console.log(text);
      this.$message.success("转化完成");
    },

    /**
     * 当改变设置的图片大小时
     */
    onChange(file: UploadFile) {
      if (file) {
        this.previewImage(file);
        (this.$refs.imageUpload as any).clearFiles();
      }
    },

    beforeImageUpload(file: File) {
      if (!checkImageType(file.type)) {
        this.$message.error(
          `目前只支持 ${this.supportedFormats.join("/")} 格式的文件`
        );
        return false;
      }
      return true;
    },
    /**
     * 预览图片
     */
    previewImage(file: UploadFile) {
      const reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = (event) => {
        this.image = new Image();
        this.image.onload = () => {
          if (this.image) {
            this.scaleImageContainer(this.image);
          }
        };
        if (event.target) {
          this.image.src = event.target.result as string;
        }
      };
    },
    /**
     * 缩放 Upload Image 容器大小
     */
    scaleImageContainer(image: HTMLImageElement) {
      const uploadContainer = document.querySelector(
        ".el-upload-dragger"
      ) as HTMLElement;

      let targetWidth = this.config.size;
      if (!targetWidth) {
        targetWidth = image.width;
      }

      const ratio = image.width / targetWidth;
      const targetHeight = image.height / ratio;

      image.width = targetWidth;
      image.height = targetHeight;

      uploadContainer.style.width = targetWidth + "px";
      uploadContainer.style.height = targetHeight + "px";
    },
  },
});
</script>

<style lang="scss">
.preview-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.preview-image[src=""] {
  visibility: hidden;
}

.el-textarea__inner {
  font-family: Menlo, monospace;
  font-size: 12px !important;
  margin: 0 auto;
  text-align: center;
}
</style>
