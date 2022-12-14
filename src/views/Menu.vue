<template>
  <div class="menu">
    <img src="@/assets/images/logo-v2.svg" class="logo" />

    <div class="options">
      <MenuOption @click="router.push('/search')">Conheça Locais</MenuOption>
      <MenuOption @click="router.push('/about')">Quem somos</MenuOption>
      <MenuOption @click="router.push('/contact')">Contato</MenuOption>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuOption } from '@/components/molecules'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style scoped lang="scss">
.menu {
  display: grid;
  justify-items: center;
  gap: 4.5rem;
  grid-auto-rows: max-content;
  align-content: center;
  height: 100%;
  .options {
    display: grid;
    gap: 2rem;
    grid-auto-rows: max-content;
    .menu-option {
      &:nth-child(1) {
        background-image: url('@/assets/images/menu-options/maps.jpg');
        background-size: 100%;
      }
      &:nth-child(2) {
        background-image: url('@/assets/images/menu-options/teste.jpg');
        background-size: 100%;
        background-position: center;
      }
      &:nth-child(3) {
        background-image: url('@/assets/images/menu-options/support.jpg');
        background-size: cover;
        background-position: center;
      }
    }
  }
}
</style>
