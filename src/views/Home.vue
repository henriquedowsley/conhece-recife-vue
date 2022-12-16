<template>
  <div class="home">
    <img src="@/assets/images/wave-top.svg" class="wave-top" />

    <img src="@/assets/images/logo-v1.svg" class="logo" />

    <Button @click="router.push('menu')">Vem conhecer!</Button>
    
    <img src="@/assets/images/wave-bottom.svg" class="wave-bottom" />
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/atoms'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  justify-items: center;
  .wave-bottom,
  .wave-top {
    width: 100%;
  }
  .wave-bottom {
    display: grid;
    justify-self: center;
    align-self: end;
  }
}
</style>
