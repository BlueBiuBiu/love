<template>
  <div class="home">
    <home-cover />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import HomeCover from "@/components/home-cover.vue" // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HomeCover
  }
})
</script>

<style lang="less" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
</style>
