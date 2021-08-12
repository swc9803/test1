<template>
  <div class="scrollElement" />
  <svg class="svg wing" preserveAspectRatio="none" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1012 525">
    <defs/>
    <g id="wing">
      <g id="birds">
        <g id="bird3">
          <path id="wing3" fill="#000" d="M85.7 158.26c4.4-1.6 7.36-.63 11.55.25l9.85 1.06-.14 4.03c-7.28 3.83-16.54.35-16.54.35s-4.18-2.8-4.71-5.69z"/>
        </g>
        <g id="bird2">
          <path id="wing2" fill="#000" d="M55.09 134.83c4.5-1.2 7.38.03 11.47 1.3l9.71 1.94-.5 4c-7.6 3.15-16.5-1.15-16.5-1.15s-3.9-3.16-4.18-6.1z"/>
        </g>
        <g id="bird1">
          <path id="wing1" fill="#000" d="M4.41 163.97c4.45-1.41 7.37-.33 11.52.73l9.8 1.47-.3 4.02c-7.44 3.52-16.55-.34-16.55-.34s-4.05-2.97-4.47-5.88z"/>
        </g>
      </g>
    </g>
  </svg>
  <svg class="svg body" preserveAspectRatio="none" width="1920" height="1080" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1012 525">
  <defs/>
  <g id="body" clip-path="url(#clip0)">
    <g id="birds">
      <g id="bird3">
        <path id="body3" fill="#000" d="M105.54 160.15s1.28-3.9 3.43-4.44c2.16-.53 2.55.09 4.33.37 1.77.28 1.6 0 2.21.36.61.37-1.95 2.68-1.95 2.68-.14 3-1.49 6.48-1.96 7.2-.47.71-6.66 6.9-18.13 5.96l-4.26 1.65-2.71 2.67-.37-1.46s6.13-6.71 6.31-7.02c.19-.3 13.1-7.97 13.1-7.97z"/>
      </g>
      <g id="bird2">
        <path id="body2" fill="#000" d="M74.67 138.5s1.63-3.77 3.82-4.1c2.2-.34 2.53.3 4.27.75 1.74.44 1.6.14 2.18.56.57.42-2.19 2.5-2.19 2.5a19.55 19.55 0 01-2.6 6.98c-.54.67-7.26 6.27-18.6 4.3l-4.4 1.26-2.94 2.42-.23-1.5s6.71-6.13 6.92-6.41c.22-.29 13.77-6.75 13.77-6.75z"/>
      </g>
      <g id="bird1">
        <path id="body1" fill="#000" d="M24.15 166.68s1.44-3.86 3.61-4.3c2.18-.44 2.55.2 4.3.55 1.77.35 1.61.06 2.2.45.6.4-2.05 2.6-2.05 2.6a19.56 19.56 0 01-2.26 7.1c-.5.7-6.94 6.62-18.36 5.22l-4.33 1.47-2.82 2.56-.3-1.49s6.4-6.44 6.6-6.74c.2-.3 13.41-7.42 13.41-7.42z"/>
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="clip0">
      <path fill="#fff" d="M0 0h1012v525H0z"/>
    </clipPath>
  </defs>
</svg>
</template>

<script>
import { onMounted } from 'vue'
import { gsap, CSSPlugin } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default {
  setup () {
    onMounted(() => {
      CSSPlugin.useSVGTransformAttr = false
      const Bdddird = gsap.timeline()
      ScrollTrigger.create({
        animation: Bdddird,
        trigger: '.scrollElement',
        start: '2% top',
        end: '10% 100%',
        scrub: 1
      })
      // Bird.to('#wing1', { rotationX: -180, transformOrigin: '50% 50%', duration: 1, ease: 'none' })
    })
  }
}
</script>

<style scoped>
body,
html{
  margin: 0;
  padding: 0;
  height: 100%;
}
.scrollElement {
  position: absolute;
  height: 800%;
  width: 100px;
  top: 0;
  opacity: 0;
}
.svg {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 50px;
}
</style>
