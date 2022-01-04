<template>
  <el-header>
    <BaseHeader />
  </el-header>

  <el-main>
    <ImageUpload />
  </el-main>

  <!-- <github-corner :url="url" color="#70b7fd" /> -->
  <BaseFooter />
</template>

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
