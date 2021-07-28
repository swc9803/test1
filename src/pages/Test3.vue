<template>
  <div class="section">
    <section class="section1">
      section1
    </section>
    <section class="section2">
      <div class="fixed" />
    </section>
    <section class="section3">
      section3
    </section>
    <section class="section4">
      section4
    </section>
    <section class="section5">
      section5
    </section>
    <section class="section6">
      section6
    </section>
  </div>
</template>

<script>
import gsap from 'gsap'
import { onMounted } from 'vue'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    gsap.utils.toArray('section').forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        pin: true,
        pinSpacing: false
      })
    })
    ScrollTrigger.create({
      snap: 1 / 5
    })

    onMounted(() => {
      gsap.from('.fixed', {
        scrollTrigger: {
          trigger: '.fixed',
          // pin: true,
          start: 'top center',
          end: 'top top',
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
.fixed {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/city.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: 100%; */
  background-attachment: fixed;
  position: absolute;
}
.section {
  width: 100%;
  height: 100%;
  position: absolute;
}
.section1 {
  /* background: orange; */
  width: 100%;
  height: 100%;
}
.section2 {
  /* background: yellowgreen; */
  position: relative;
  width: 100%;
  height: 100%;
}
.section3 {
  /* background: firebrick; */
  width: 100%;
  height: 100%;
}
.section4 {
  /* background: cornflowerblue; */
  width: 100%;
  height: 100%;
}
.section5 {
  /* background: seagreen; */
  width: 100%;
  height: 100%;
}
.section6 {
  /* background: cyan; */
  width: 100%;
  height: 100%;
}
</style>
