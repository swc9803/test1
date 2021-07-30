<template>
  <div class="wrapper">
    <div class="scrollElement" />
    <Scroll class="svg" />
    <Fall class="svg" />
    <Leaf/>
  </div>
</template>

<script>
import Scroll from '@/components/fall/Scroll'
import Fall from '@/components/fall/Fall'
import Leaf from '@/components/fall/Leaf'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Scroll,
    Fall,
    Leaf
  },
  setup () {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0)
    }
    onMounted(() => {

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
  height: 8000px;
  width: 100px;
  top: 0;
  opacity: 0;
}
</style>
