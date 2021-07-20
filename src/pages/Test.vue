<template>
  <div style="margin: auto; width: 80%">
    <transition name="fade" mode="out-in" />
    <div class="box" @click="go"/>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <div class="boxx"/>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  setup () {
    const router = useRouter()

    onMounted(() => {
      gsap.from('.boxx', {
        scrollTrigger: {
          trigger: '.boxx',
          toggleActions: 'restart none reverse none'
        },
        y: 400,
        duration: 2
      })
    })

    const go = () => {
      router.push({
        name: 'Ttest'
      })
    }
    return {
      go
    }
  }
}
</script>

<style scoped>
.box {
  width: 500px;
  height: 500px;
  background: black;
}
.boxx {
  width: 300px;
  height: 300px;
  background: rgb(224, 218, 218);
}
</style>
