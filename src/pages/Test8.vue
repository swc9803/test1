<template>
  <div class="wrapper">
    <div id="container">
      <section class="section01">
        <h1>section01</h1>
      </section>
      <section class="section02">
        <h1>section02</h1>
      </section>
      <section class="section03">
        <h1>section03</h1>
      </section>
      <section class="section04">
        <h1>section04</h1>
      </section>
      <section class="section05">
        <h1>section05</h1>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    onMounted(() => {
      const SECTIONS = gsap.utils.toArray('section')
      gsap.to(SECTIONS, {
        xPercent: -100 * (SECTIONS.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: '#container',
          end: () => '+=' + document.querySelector('#container').offsetWidth,
          pin: true,
          scrub: 1
        }
      })
    })
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#container {
  width: 500%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}
section {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.section01 {
  background: orange;
}
.section02 {
  background: yellowgreen;
}
.section03 {
  background: firebrick;
}
.section04 {
  background: cornflowerblue;
}
.section05 {
  background: seagreen;
}
</style>
