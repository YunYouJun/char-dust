<template>
  <el-header>
    <base-header />
  </el-header>

  <el-main>
    <image-upload />
  </el-main>

  <github-corner :url="url" color="#70b7fd" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseHeader from "./components/BaseHeader.vue";
import ImageUpload from "./components/ImageUpload.vue";
import GithubCorner from "./components/GithubCorner.vue";

import pkg from "../../package.json";

export default defineComponent({
  name: "App",
  components: {
    BaseHeader,
    ImageUpload,
    GithubCorner,
  },
  data() {
    return {
      url: pkg.repository.url,
    };
  },
});
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
