<template>
  <div class="box" @mouseover="move()" @mouseout="stop"/>
</template>

<script>
import { ref } from 'vue'
import { gsap } from 'gsap'

export default {
  setup () {
    const yellowmoving = ref(false)
    const move = () => {
      if (yellowmoving.value === false) {
        yellowmoving.value = true
        const go = gsap.from('.box', { transformOrigin: 'right', scaleX: 0, duration: 1.5, ease: 'none' })
        go.play()
        setTimeout(() => {
          yellowmoving.value = false
        }, 1500)
      }
    }
    const stop = () => {
      if (yellowmoving.value === false) {
        yellowmoving.value = true
        const go = gsap.to('.box', { transformOrigin: 'right', scaleX: 0, duration: 1.5, ease: 'none' })
        go.play()
        setTimeout(() => {
          yellowmoving.value = false
        }, 1500)
      }
    }
    return {
      yellowmoving,
      move,
      stop
    }
  }
}
</script>

<style scoped>
.box {
  width: 300px;
  height: 300px;
  background: black;
}
</style>
