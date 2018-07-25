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
      <image-upload></image-upload>
    </el-main>

    <el-footer>
      <vue-about-me :copyright="copyright"></vue-about-me>
    </el-footer>
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
      copyright: {
        name: 'char-dust',
        repoName: 'char-dust',
        author: 'YunYouJun',
        logo: '#icon-cloud'
      }
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
