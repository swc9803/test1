<template>
  <Background class="spring" />
  <Tree class="spring" />
  <Birds class="spring" />
  <SpringText class="spring" />
</template>

<script>
import Background from '@/components/spring/Background'
import Birds from '@/components/spring/Birds'
import SpringText from '@/components/spring/SpringText'
import Tree from '@/components/spring/Tree'

export default {
  components: {
    Background,
    Birds,
    SpringText,
    Tree
  }
}
</script>

<style scoped>
.spring {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
