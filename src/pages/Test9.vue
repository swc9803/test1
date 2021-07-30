<template>
  <div class="wrapper">
    <div class="scrollElement" />
    <Scroll class="Scroll svg" />
    <Fall class="svg" />
    <!-- <Leaf1 class="Leaf1 Leaf svg" />
    <Leaf2 class="Leaf2 Leaf svg" />
    <Leaf3 class="Leaf3 Leaf svg" /> -->
  </div>
</template>

<script>
import Fall from '@/components/fall/Fall'
// import Leaf1 from '@/components/fall/Leaf1'
// import Leaf2 from '@/components/fall/Leaf2'
// import Leaf3 from '@/components/fall/Leaf3'
import Scroll from '@/components/fall/Scroll'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Scroll,
    Fall
    // Leaf1, Leaf2, Leaf3,
  },
  setup () {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
    onMounted(() => {
      const Scroll = gsap.timeline()
      ScrollTrigger.create({
        animation: Scroll,
        trigger: '.scrollElement',
        start: 'top top',
        end: '4% top',
        scrub: 2,
        markers: true
      })
      Scroll.to('.Scroll', { opacity: 0 }, 0)
      Scroll.to('.Scroll', { y: 100 }, 0)
    })
  }
}
</script>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  height: 100%;
}
.svg {
  display: block;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
.scrollElement {
  position: absolute;
  height: 6000px;
  width: 100px;
  top: 0;
  opacity: 0;
}
.rotate1{
  position: fixed;
  display: block;
}
</style>
