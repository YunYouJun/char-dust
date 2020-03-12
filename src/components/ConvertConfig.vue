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
</template>

<script>
import bus from "@/utils/eventBus";
export default {
  data() {
    return {
      config: {
        size: null,
        char: "@#&$%863!i1uazvno~;*^+-. "
      },
      step: 50
    };
  },
  methods: {
    handleChange(value) {
      bus.$emit("scaleImage", value);
    },
    convert() {
      alert("Deving...");
    }
  }
};
</script>

<style></style>
