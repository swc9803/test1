<template>
  <div class="wrapper">
    <Winter class="line svg" />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Winter from '@/components/winter/Winter'
gsap.registerPlugin(ScrollTrigger)

export default {
  components: {
    Winter
  },
  setup () {
    onMounted(() => {
      gsap.from('.before1', {
        scrollTrigger: {
          trigger: '.before1',
          toggleActions: 'restart none reverse none'
        },
        y: 500,
        opacity: 0,
        duration: 1
      })
    })
  }
}
</script>

<style scoped>
.wrapper {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.svg {
  display: block;
  /* width: 100%; */
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
