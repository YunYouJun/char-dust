<template>
  <div id="app">
    <el-header>
      <h2>
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-image"></use>
        </svg>
        &nbsp;
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right"></use>
        </svg>
        &nbsp;
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-text"></use>
        </svg>
      </h2>
    </el-header>
  
    <el-main>
      <convert-config></convert-config>
      <hr>
      <br>
      <image-upload></image-upload>
    </el-main>
  </div>
</template>

<script>
import ConvertConfig from '@/components/ConvertConfig'
import ImageUpload from '@/components/ImageUpload'

export default {
  name: 'app',
  components: {
    ConvertConfig,
    ImageUpload
  },
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
