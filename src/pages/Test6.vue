<template>
  <div class="a box"/>
  <div class="b box"/>
  <p class="remove">Now, I'm appearing</p>
  <div class="void"/>
  <p class="remove2">Now, I'm appearing</p>
  <div class="void"/>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      gsap.from('.remove', {
        scrollTrigger: {
          trigger: '.remove',
          // pin: true,
          start: 'top 90%',
          end: 'bottom center',
          scrub: 2,
          markers: true
        },
        opacity: 0,
        ease: 'none',
        duration: 10
      })
      gsap.from('.remove2', {
        scrollTrigger: {
          trigger: '.remove2',
          pin: true,
          start: 'top center',
          end: 'top top',
          scrub: 2,
          markers: true
        },
        opacity: 0,
        ease: 'none',
        duration: 1
      })
    })
  }
}
</script>

<style scoped>
.remove {
  text-align: center;
  font-size: 20px;
}
.void {
  margin-bottom: 1000px;
}
.box {
  width: 100px;
  height: 100px;
  margin-bottom: 300px;
}
.a {
  background: red;
}
.b {
  background: orange;
}
</style>
