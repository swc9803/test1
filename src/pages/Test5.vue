<template>
d
</template>

<script>
import { onMounted } from 'vue'
import { gsap, CSSPlugin } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  setup () {
    onMounted(() => {
      CSSPlugin.useSVGTransformAttr = false
      const Bdddird = gsap.timeline()
      ScrollTrigger.create({
        animation: Bdddird,
        trigger: '.scrollElement',
        start: '2% top',
        end: '10% 100%',
        scrub: 1
      })
      // Bird.to('#wing1', { rotationX: -180, transformOrigin: '50% 50%', duration: 1, ease: 'none' })
    })
  }
}
</script>

<style scoped>
body,
html{
  margin: 0;
  padding: 0;
  height: 100%;
}
.dd {
  width: 10%;
  height: 10%;
}
</style>
