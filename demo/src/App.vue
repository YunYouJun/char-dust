<template>
  <el-header>
    <base-header />
  </el-header>

  <el-main>
    <image-upload />
  </el-main>

  <!-- <github-corner :url="url" color="#70b7fd" /> -->
  <el-footer>
    <vue-about-me :copyright="copyright" />
  </el-footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import BaseHeader from "./components/BaseHeader.vue";
import ImageUpload from "./components/ImageUpload.vue";

import VueAboutMe from "vue-about-me";
import "vue-about-me/style.css";

import pkg from "../../package.json";

const copyright = {
  name: "Char Dust",
  repo: pkg.name,
  author: pkg.author.name,
  logo: "ri:character-recognition-line",
  link: "https://github.com/YunYouJun/char-dust",
  color: "black",
};

const url = ref(pkg.repository.url);
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.el-main {
  overflow: hidden !important;
}
</style>
