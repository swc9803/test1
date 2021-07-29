<template>
  <div class="void"/>
  <p class="remove">Now, I'm appearing</p>
  <div class="void"/>
  <p class="remove2">Now, I'm appearing</p>
  <div class="void"/>
  <Test7 class="dd" />
  <div class="void"/>
</template>

<script>
import Test7 from '@/pages/Test7'
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Test7
  },
  setup () {
    onMounted(() => {
      gsap.from('.remove', {
        scrollTrigger: {
          trigger: '.remove',
          // pin: true,
          start: 'top 90%',
          end: 'top center',
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
    gsap.to('.dd', {
      scrollTrigger: {
        trigger: '.dd',
        pin: true,
        start: 'top 90%',
        end: 'top top',
        scrub: 2,
        markers: true
      },
      ease: 'none'
    })
    gsap.to('.rotate3', {
      duration: 20, rotate: 360, ease: 'none', x: -6000, y: 1000
    })
  }
}
</script>

<style scoped>
.dd {
  top: 500%
}
.remove {
  font-size: 20px;
}
.remove2 {
  font-size: 20px;
}
.void {
  margin-bottom: 100%;
}
</style>
