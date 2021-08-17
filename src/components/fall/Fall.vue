<template>
  <Background class="fall" />
  <FallText class="fall" />
  <Reed class="fall" />
  <Leaf class="fall" />
</template>

<script>
import Background from '@/components/fall/Background'
import FallText from '@/components/fall/FallText'
import Reed from '@/components/fall/Reed'
import Leaf from '@/components/fall/Leaf'

export default {
  components: {
    Background,
    FallText,
    Reed,
    Leaf
  }
}
</script>

<style scoped>
.fall {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
