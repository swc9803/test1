<template>
  <div class="dd">
    <div class="box dd"/>
    <div class="circle dd"/>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  setup () {
    onMounted(() => {
      const Bdddird = gsap.timeline()
      ScrollTrigger.create({
        animation: Bdddird,
        trigger: '.scrollElement',
        start: 'top top',
        end: '30% 100%',
        scrub: 1
      })
      gsap.to('.box', { duration: 2, morphSVG: '.circle' })
    })
  }
}
</script>

<style scoped>
body,
html{
  margin: 0;
  padding: 0;
  height: 100%;
}
.dd {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box {
  width: 300px;
  height: 300px;
  background: black;
}
.circle {
  width: 200px;
  height: 200px;
  background: cyan;
  border-radius: 50%;
}
</style>
