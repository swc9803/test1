<template>
  <div>
    <button @mousedown="mousedown">button</button>
    <div class="box"></div>
  </div>
</template>

<script>
import anime from 'animejs/lib/anime.es.js'

export default {
  setup () {
    function mousedown () {
      anime({
        /* anime 할 녀석 id 또는 클래스명 */
        targets: '.box',
        /* anime 할 CSS 속성들 */
        scale: 1,
        rotate: '1turn',
        backgroundColor: 'rgb(200, 100, 0)',
        delay: 100,
        duration: 1000,
        // https://animejs.com/documentation/#linearEasing
        easing: 'spring', // linear
        /* 방향 */
        direction: 'alternate', // 갔다가 제자리로.
        /* lifecycle callback */
        begin: (anim) => { console.log(anim.began) }, // true
        change: () => { console.log('change!') },
        update: (anim) => { console.log(anim.progress) }, // 0 ~ 100 진행 상황
        complete: (anim) => { console.log(anim.completed) } // true
      })
    }
    return {
      mousedown
    }
  }
}

</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: rgb(0, 100, 200);
}
</style>
