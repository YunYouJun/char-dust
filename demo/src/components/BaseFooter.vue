<template>
  <el-footer>
    <vue-about-me :copyright="copyright" />
  </el-footer>
</template>

<script lang="ts" setup>
import VueAboutMe from 'vue-about-me'
import 'vue-about-me/style.css'

import pkg from '~/../../package.json'

const copyright = {
  name: 'Char Dust',
  repo: pkg.name,
  author: pkg.author.name,
  logo: 'ri:character-recognition-line',
  link: 'https://github.com/YunYouJun/char-dust',
  color: 'black',
}
</script>
