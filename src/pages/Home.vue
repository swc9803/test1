<template>
  <div>
    <transition name="fade" mode="out-in"/>
      <div class="box" @click="go"/>
    <div class="box" @click="go"/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup () {
    const router = useRouter()

    const go = () => {
      router.push({
        name: 'Test'
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
  width: 200px;
  height: 200px;
  background: cyan;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
