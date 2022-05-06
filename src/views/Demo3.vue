<template>
  <v-form-designer :designerConfig="obj"></v-form-designer>
</template>

<script>
export default {
  data() {
    return {
      obj: { generateSFCButton: false, }
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0; /* 如果页面出现垂直滚动条，则加入此行CSS以消除之 */
}
</style>