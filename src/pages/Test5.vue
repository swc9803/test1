<template>
  <div class="container" />
  <div class="box1 box" />
  <div class="box2 box" />
</template>

<script>
import { Draggable } from 'gsap/Draggable'
import { onMounted } from 'vue'

export default {
  setup () {
    const container = document.querySelector('.container')
    // const box1 = document.getElementById('.box1')
    // const box2 = document.getElementById('.box2')
    onMounted(() => {
      Draggable.create('.box1', {
        bounds: container,
        type: 'y, x'
      })
    })
  }
}
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.box {
  width: 300px;
  height: 300px;
  background: black;
  margin: 50px;
}
</style>
