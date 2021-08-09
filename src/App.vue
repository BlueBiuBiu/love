<template>
  <div class="app">
    <div class="meteor">
      <meteor />
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import Meteor from "@/base-ui/meteor/meteor.vue"

export default defineComponent({
  name: "App",
  components: {
    Meteor
  }
})
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);

  .meteor {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
