<template>
  <div class="wrapper">
    <div class="container">
      <div id="ring">
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
        <div class="img" />
      </div>
    </div>
    <div id="dragger" />
  </div>
</template>

<script>

import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { onMounted } from 'vue'

export default {
  setup () {
    onMounted(() => {
      let xPos = 0
      const dragger = document.querySelector('#dragger')
      const ring = document.querySelector('#ring')

      gsap.timeline()
        .set(dragger, { opacity: 0 }) // make the drag layer invisible
        .set(ring, { rotationY: 180 }) // set initial rotationY so the parallax jump happens off screen
        .set('.img', { // apply transform rotations to each image
          rotateY: (i) => i * -36,
          transformOrigin: '50% 50% 500px',
          z: -500,
          backgroundImage: (i) => 'url(https://picsum.photos/id/' + (i + 32) + '/700/300/)',
          backgroundPosition: (i) => getBgPos(i),
          backfaceVisibility: 'hidden'
        })
        .from('.img', {
          duration: 1.5,
          y: 200,
          opacity: 0,
          stagger: 0.1,
          ease: 'expo'
        })

      Draggable.create(dragger, {
        onDragStart: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX
          xPos = Math.round(e.clientX)
        },
        onDrag: (e) => {
          if (e.touches) e.clientX = e.touches[0].clientX
          gsap.to(ring, {
            rotationY: '-=' + ((Math.round(e.clientX) - xPos) % 360),
            onUpdate: () => { gsap.set('.img', { backgroundPosition: (i) => getBgPos(i) }) }
          })
          xPos = Math.round(e.clientX)
        },
        onDragEnd: () => {
          // gsap.to(ring, { rotationY: Math.round(gsap.getProperty(ring,'rotationY')/36)*36 }) // move to nearest photo...at the expense of the inertia effect
          gsap.set(dragger, { x: 0, y: 0 }) // reset drag layer
        }
      })
      function getBgPos (i) { // returns the background-position string to create parallax movement in each image
        return (-gsap.utils.wrap(0, 360, gsap.getProperty(ring, 'rotationY') - 180 - i * 36) / 360 * 400) + 'px 0px'
      }
    })
  }
}
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
html, body, #dragger, #ring, .img{
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}
div {
  position: absolute;
}
.container {
  perspective: 2000px;
  width: 300px;
  height: 300px;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>
