<template>
  <svg class="dd" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1012 525">
    <defs/>
    <g id="Spring" clip-path="url(#clip0)">
      <g id="birds" fill="#000">
        <g id="bird3">
          <path id="body3" d="M20.9 166.7s1.4-3.8 3.6-4.3c2.2-.4 2.5.2 4.3.6 1.7.3 1.6 0 2.2.4.6.4-2 2.6-2 2.6-.3 3-1.8 6.4-2.3 7.1-.5.7-7 6.6-18.4 5.2L4 179.8l-2.8 2.6-.3-1.5 6.6-6.8c.1-.3 13.4-7.4 13.4-7.4z"/>
          <path id="wing3" d="M1.1 164c4.5-1.4 7.4-.3 11.6.7l9.7 1.5-.3 4c-7.4 3.5-16.5-.3-16.5-.3s-4-3-4.5-5.9z"/>
        </g>
        <g id="bird2">
          <path id="body2" d="M73.3 133s1.7-3.6 3.9-4c2.2-.2 2.5.5 4.2 1 1.8.4 1.6.1 2.2.6.6.4-2.3 2.4-2.3 2.4-.4 3-2.2 6.3-2.7 7-.6.6-7.4 6-18.7 3.7l-4.5 1.2-3 2.3-.2-1.5 7.1-6.2c.2-.3 14-6.4 14-6.4z"/>
          <path id="wing2" d="M53.8 129c4.5-1.2 7.4.1 11.4 1.5l9.7 2.2-.6 4c-7.7 3-16.5-1.6-16.5-1.6s-3.8-3.2-4-6.2z"/>
        </g>
        <g id="bird1">
          <path id="body1" d="M104.9 157.7s1.4-3.8 3.6-4.3c2.2-.4 2.5.2 4.3.6 1.7.3 1.6 0 2.2.4.6.4-2 2.6-2 2.6-.3 3-1.8 6.4-2.3 7.1-.5.7-7 6.6-18.4 5.2l-4.3 1.5-2.8 2.6-.3-1.5 6.6-6.8c.1-.3 13.4-7.4 13.4-7.4z"/>
          <path id="wing1" d="M85.1 155c4.5-1.4 7.4-.3 11.6.7l9.7 1.5-.3 4c-7.4 3.5-16.5-.3-16.5-.3s-4-3-4.5-5.9z"/>
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0">
        <path fill="#fff" d="M0 0h1012v525H0z"/>
      </clipPath>
    </defs>
  </svg>
  <div class="box"/>
</template>

<script>
import { gsap } from 'gsap'
import { onMounted } from 'vue'
import { CSSPlugin } from 'gsap/CSSPlugin'
CSSPlugin.useSVGTransformAttr = false

export default {
  setup () {
    onMounted(() => {
      gsap.to('#wing1', { transformOrigin: 'bottom', rotateX: 180, repeat: -1 })
      gsap.to('.box', { transformOrigin: 'bottom', rotateX: 180, repeat: -1 })
    })
    return {

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
