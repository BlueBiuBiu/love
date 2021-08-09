<template>
  <div class="cover">
    <el-image
      style="width: 100%; height: 350px; opacity: 0.1"
      src="https://img2.baidu.com/it/u=3536308322,3017002126&fm=26&fmt=auto&gp=0.jpg"
    ></el-image>
    <div class="title animate__animated animate__fadeInTopRight">七夕节快乐!</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "HelloWorld",
  props: {}
})
</script>

<style scoped lang="less">
.cover {
  position: relative;

  .title {
    position: absolute;
    top: 80%;
    left: 15%;
    font-size: 60px;
    color: #ff5777;
    text-shadow: 1px 1px 1px#ff5777, 5px 5px 5px#ff5777, 8px 8px 12px#ff5777;
  }
}
</style>
