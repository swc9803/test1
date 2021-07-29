<template>
  <div class="section">
    <section class="section1">
      section1
    </section>
    <section class="section2">
      <div class="fixed">
        <p class="dd">City</p>
      </div>
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
    // ScrollTrigger.create({
    //   snap: 1 / 5
    // })

    onMounted(() => {
      gsap.to('.fixed', {
        scrollTrigger: {
          trigger: '.fixed',
          // pin: true,
          start: 'center 90%',
          end: 'top center',
          scrub: 2,
          markers: true
        },
        filter: 'grayscale(0) blur(0px)',
        // progress
        ease: 'none'
      })
      // gsap.from('.dd', {
      //   scrollTrigger: {
      //     trigger: '.dd',
      //     // pin: true,
      //     start: 'center bottom',
      //     end: 'top top',
      //     scrub: 2,
      //     markers: true
      //   },
      //   y: 100,
      //   opacity: 0,
      //   ease: 'none',
      //   duration: 10
      // })
    })
  }
}
</script>

<style scoped>
.dd {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px
}
.fixed {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/city.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: 100%; */
  background-attachment: fixed;
  position: absolute;
  filter: grayscale(10) blur(3px);
}
.section {
  width: 100%;
  height: 100%;
  position: absolute;
}
.section1 {
  width: 100%;
  height: 100%;
}
.section2 {
  position: relative;
  width: 100%;
  height: 100%;
}
.section3 {
  width: 100%;
  height: 100%;
}
.section4 {
  width: 100%;
  height: 100%;
}
.section5 {
  width: 100%;
  height: 100%;
}
.section6 {
  width: 100%;
  height: 100%;
}
</style>
