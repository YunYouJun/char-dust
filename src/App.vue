<template>
  <el-header>
    <base-header />
  </el-header>

  <el-main>
    <image-upload />
  </el-main>

  <github-corner />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseHeader from "./components/BaseHeader.vue";
import ImageUpload from "./components/ImageUpload.vue";
import GithubCorner from "./components/GithubCorner.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseHeader,
    ImageUpload,
    GithubCorner,
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
</style>
