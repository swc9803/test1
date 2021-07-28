<template>
  <div class="a box"/>
  <div class="b box"/>
  <div class="c box"/>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      gsap.to('.c', {
        scrollTrigger: {
          trigger: '.c',
          start: 'top center',
          end: '+=100',
          markers: true,
          toggleActions: 'restart none reverse none'
        },
        x: 400,
        rotation: 360,
        duration: 3
      })
    })
  }
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 350px;
}
.a {
  background: red;
}
.b {
  background: orange;
}
.c {
  background: yellow;
}
</style>
