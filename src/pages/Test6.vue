<template>
  <div class="a box"/>
  <div class="b box"/>
  <p class="remove">Now, I'm appearing</p>
  <div class="void"/>
  <!-- <div class="c box"/> -->
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      // gsap.to('.c', {
      //   scrollTrigger: {
      //     trigger: '.c',
      //     // pin: true,
      //     start: 'top 50%',
      //     end: 'bottom 30%',
      //     scrub: 1,
      //     markers: true
      //   },
      //   x: 400,
      //   rotation: 360,
      //   ease: 'none',
      //   duration: 3
      // })
      gsap.from('.remove', {
        scrollTrigger: {
          trigger: '.remove',
          pin: true,
          start: 'center center',
          end: 'bottom top',
          scrub: 2,
          markers: true
        },
        opacity: 0,
        ease: 'none',
        duration: 10
      })
    })
  }
}
</script>

<style scoped>
.remove {
  text-align: center;
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
.c {
  background: yellow;
  margin-bottom: 900px;
}
</style>
