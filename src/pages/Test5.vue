<template>
  <div class="scene1" />
  <h1 class="resize"> 안녕하세요 </h1>
  <div class="scrollElement" />
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    return {

    }
  }
}
</script>

<style scoped>
.scene1 {
  background: cyan;
  width: 100%;
  height: 100%;
  position: relative;
}
.scrollElement {
  position: absolute;
  height: 6000px;
  width: 100px;
  top: 0;
  z-index: 0;
}
</style>
