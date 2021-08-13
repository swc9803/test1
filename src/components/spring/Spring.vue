<template>
  <Background class="spring wSpring" />
  <Tree class="spring wSpring" />
  <Birds class="spring wSpring" />
  <SpringText class="spring wSpring" />
</template>

<script>
import Background from '@/components/spring/Background'
import Birds from '@/components/spring/Birds'
import SpringText from '@/components/spring/SpringText'
import Tree from '@/components/spring/Tree'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  components: {
    Background,
    Birds,
    SpringText,
    Tree
  },
  setup () {
    onMounted(() => {
      const Springon = gsap.timeline()
      ScrollTrigger.create({
        animation: Springon,
        trigger: '.scrollElement',
        start: '-1% top',
        end: '34% 100%',
        scrub: 0
      })
      Springon.from('.wSpring', { display: 'none' })

      const Springoff = gsap.timeline()
      ScrollTrigger.create({
        animation: Springoff,
        trigger: '.scrollElement',
        start: '34% top',
        end: '34% 100%',
        scrub: 0
      })
      Springoff.to('.wSpring', { display: 'none' })
    })
  }
}
</script>

<style scoped>
.spring {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
