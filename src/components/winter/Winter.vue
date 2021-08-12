<template>
  <WinterText class="winter" />
  <Snow class="winter" />
  <Snowman class="winter" />
</template>

<script>
import WinterText from '@/components/winter/WinterText'
import Snow from '@/components/winter/Snow'
import Snowman from '@/components/winter/Snowman'

export default {
  components: {
    WinterText,
    Snow,
    Snowman
  }
}
</script>

<style scoped>
.winter {
  display: block;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
