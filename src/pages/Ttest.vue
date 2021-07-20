<template>
  <div>

  </div>
</template>

<script>
import { gsap, Power0 } from 'gsap'

export default {
  setup () {
    const dd = () => {
      document.querySelector('.line').style.animationPlayState = 'running'
      gsap.to('.line', {
        duration: 0, animationDuration: 0, delay: 4
      })
      gsap.to('.line', {
        duration: 1.5, y: 30, opacity: 0, delay: 4.8, ease: Power0.easeNone
      })
    }

    return {
      dd
    }
  }
}
</script>

<style scoped>

</style>
