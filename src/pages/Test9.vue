<template>
  <div class="scrollElement" />
  <Scroll />
  <Fall class="line" />
  <Leaf1 class="Leaf1 Leaf" />
  <Leaf2 class="Leaf2 Leaf" />
  <Leaf3 class="Leaf3 Leaf" />
</template>

<script>
import Fall from '@/components/Fall'
import Leaf1 from '@/components/Leaf1'
import Leaf2 from '@/components/Leaf2'
import Leaf3 from '@/components/Leaf3'
import Scroll from '@/components/Scroll'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Fall, Leaf1, Leaf2, Leaf3, Scroll
  },
  setup () {
    onMounted(() => {
      const Fall = gsap.timeline()
      ScrollTrigger.create({
        animation: Fall,
        trigger: '.scrollElement',
        start: '10% 10%',
        end: '20% 40%',
        scrub: 2,
        markers: true
      })
      Fall.to('.line', { y: '-300%' }, 0)
      Fall.to('.line', { opacity: 1 }, 0)

      const Leaf1 = gsap.timeline()
      ScrollTrigger.create({
        animation: Leaf1,
        trigger: '.scrollElement',
        start: '17% 10%',
        end: '20% 40%',
        scrub: 2,
        markers: true
      })
      Leaf1.to('.Leaf1', { x: -2000, y: 400 }, 0)
    })
  }
}
</script>

<style scoped>
.line {
  top: 100%;
  position: fixed;
  display: block;
  opacity: 0;
}
.scrollElement {
  position: absolute;
  height: 6000px;
  width: 100px;
  top: 0;
  opacity: 0;
}
.Leaf {
  top: 100%;
  position: fixed;
  display: block;
  z-index: 1;
}
</style>
