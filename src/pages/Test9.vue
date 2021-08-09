<template>
  <div class="wrapper">
    <div class="scrollElement" />
    <Scroll class="svg" />
    <Fall class="svg" />
    <Reed />
    <Leaf />
    <Winter class="svg" />
    <Snow />
    <Snowman class="svg"/>
  </div>
</template>

<script>
import Scroll from '@/components/fall/Scroll'
import Fall from '@/components/fall/Fall'
import Reed from '@/components/fall/Reed'
import Leaf from '@/components/fall/Leaf'
import Winter from '@/components/winter/Winter'
import Snow from '@/components/winter/Snow'
import Snowman from '@/components/winter/Snowman'

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
export default {
  components: {
    Scroll,
    Fall,
    Reed,
    Leaf,
    Winter,
    Snow,
    Snowman
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
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.scrollElement {
  position: absolute;
  height: 800%;
  width: 100px;
  top: 0;
  opacity: 0;
}
</style>
