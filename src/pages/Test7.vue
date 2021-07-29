<template>
  <div class="wrapper">
    <Fall class="line" />
    <Leaf1 class="Leaf1 Leaf" />
    <Leaf2 class="Leaf2 Leaf" />
    <Leaf3 class="Leaf3 Leaf" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Fall from '@/components/Fall'
import Leaf1 from '@/components/Leaf1'
import Leaf2 from '@/components/Leaf2'
import Leaf3 from '@/components/Leaf3'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Fall, Leaf1, Leaf2, Leaf3
  },
  setup () {
    onMounted(() => {
      // gsap.to('.Leaf1', {
      //   duration: 7, x: -1000, y: 200, ease: 'none'
      // })
    })
  }
}
</script>

<style scoped>
.wrapper{
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}
.Leaf {
  position: absolute;
  height: 100%;
  left: 0;
}
.line {
  position: absolute;
  z-index: -1;
  /* opacity: 0; */
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: draw 1.5s linear alternate both;
  /* animation-play-state: paused; */
}
@keyframes draw {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
</style>
