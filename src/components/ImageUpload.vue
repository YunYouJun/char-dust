<template>
  <el-upload
    class="upload-demo"
    drag
    action="https://jsonplaceholder.typicode.com/posts/"
    multiple>
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div class="el-upload__tip" slot="tip">只能上传 jpg/png 文件，且不超过 xx mb</div>
  </el-upload>
</template>

<script>
export default {

}
</script>

<style>

</style>
