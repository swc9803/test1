<template>
  <Remain class="summer wSummer" />
  <Rain class="summer wSummer" />
</template>

<script>
import Remain from '@/components/summer/Remain'
import Rain from '@/components/summer/Rain'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  components: {
    Remain,
    Rain
  },
  setup () {
    onMounted(() => {
      const Summeron = gsap.timeline()
      ScrollTrigger.create({
        animation: Summeron,
        trigger: '.scrollElement',
        start: '34% top',
        end: '60% 100%',
        scrub: 0
      })
      Summeron.from('.wSummer', { display: 'none' })

      const Summeroff = gsap.timeline()
      ScrollTrigger.create({
        animation: Summeroff,
        trigger: '.scrollElement',
        start: '60% top',
        end: '60% 100%',
        scrub: 0
      })
      Summeroff.to('.wSummer', { display: 'none' })
    })
  }
}
</script>

<style scoped>
.summer {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
