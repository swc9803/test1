<template>
<svg class="body d" preserveAspectRatio="none" width="1920" height="1080"  viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.130003 7.00111C4.57521 5.58767 7.49885 6.67125 11.6501 7.72807L21.4454 9.1978L21.1393 13.2166C13.7072 16.7371 4.60095 12.8776 4.60095 12.8776C4.60095 12.8776 0.545361 9.91556 0.130003 7.00111Z" fill="black"/>
</svg>
<svg class="wing d" preserveAspectRatio="none" width="1920" height="1080"  viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8697 5.70955C22.8697 5.70955 24.3063 1.85685 26.4801 1.41345C28.654 0.970042 29.0248 1.60633 30.7846 1.95932C32.5444 2.31231 32.3911 2.0213 32.9857 2.41443C33.5803 2.80755 30.9258 5.01557 30.9258 5.01557C30.6554 7.99759 29.165 11.4241 28.6639 12.1196C28.1627 12.815 21.7267 18.733 10.3075 17.3281L5.97862 18.8024L3.15643 21.3588L2.85424 19.8772C2.85424 19.8772 9.25476 13.4277 9.45132 13.1304C9.64788 12.8331 22.8697 5.70955 22.8697 5.70955Z" fill="black"/>
</svg>

</template>

<script>
import { onMounted } from 'vue'
import { gsap, CSSPlugin } from 'gsap'
CSSPlugin.useSVGTransformAttr = false

export default {
  setup () {
    onMounted(() => {
      gsap.to('#wing1', { y: 50, duration: 2, rotationX: -90, transformOrigin: '50% 50%', repeat: -1, yoyo: true })
    })
  }
}
</script>

<style scoped>
.d {
  position: absolute;
}
body,
html{
  margin: 0;
  padding: 0;
  height: 100%;
}
.box {
  width: 300px;
  height: 300px;
  background: black;
}
</style>
