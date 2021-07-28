<template>
  <div style="background: cyan">
    <div class="screen"><h1 class="remove" style="text-align: center; opacity: 1;">Please keep scrolling</h1></div>
    <div class="screen"></div>
    <p class="remove">Now, I'm disappearing</p>
    <div class="screen"></div>
    <!-- <div class="scrollElement" /> -->
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    // const remove = gsap.timeline()
    // ScrollTrigger.create({
    //   animation: remove,
    //   trigger: '.scrollElement',
    //   markers: true,
    //   start: '20px 80%',
    //   end: 'bottom 100px',
    //   scrub: 2
    //   // 스크롤이 끝나고도 2초동안 더 움직인다.
    // })
    // remove.to('.remove', { opacity: 0 }, 2)
    // remove.to('.remove', { y: 3, scale: 0.5 }, 2)
    gsap.to('.remove', {
      scrollTrigger: {
        trigger: '.remove',
        start: 'top center',
        end: '+= 100',
        scrub: 2,
        markers: true
      },
      x: 400,
      rotation: 360,
      ease: 'none',
      duration: 3
    })
  }
}
</script>

<style scoped>
.screen {
  width: 100%;
  height: 100vh;
}
.scrollElement {
  position: absolute;
  height: 2000px;
  width: 100px;
  top: 0;
  z-index: -1;
}
.remove {
  text-align: center;
}
</style>
