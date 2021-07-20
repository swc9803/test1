<template>
  <div class="section">
    <div class="section1">
      <h1>section1</h1>
    </div>
    <div class="section2">
      <h1>section2</h1>
    </div>
    <div class="section3">
      <h1>section3</h1>
    </div>
    <div class="section4">
      <h1>section4</h1>
    </div>
    <div class="section5">
      <h1>section5</h1>
    </div>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    gsap.utils.toArray('section').forEach((section, i) => {
      ScrollTrigger.create({
        trigger: '.section',
        start: 'bottom center',
        pin: true
        // pinSpacing: false
      })
    })
    ScrollTrigger.create({
      snap: 1 / 4
    })
  }
}
</script>

<style scoped>
.section {
  width: 100%;
  height: 100%;
  position: absolute;
}
.section1 {
  background: orange;
  width: 100%;
  height: 100%;
}
.section2 {
  background: yellowgreen;
  width: 100%;
  height: 200%;
}
.section3 {
  background: firebrick;
  width: 100%;
  height: 100%;
}
.section4 {
  background: cornflowerblue;
  width: 100%;
  height: 100%;
}
.section5 {
  background: seagreen;
  width: 100%;
  height: 100%;
}
</style>
