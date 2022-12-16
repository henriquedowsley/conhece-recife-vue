<template>
  <button :class="['filter-button', { active }]">
    <span>{{ text }}</span>
    <img
      :src="icon || 'https://cdn-icons-png.flaticon.com/512/180/180862.png'"
    />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface Props {
  text: string
  icon: string
  active: boolean
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.filter-button {
  background-color: #000;
  outline: none;
  border: none;
  color: #fff;
  padding-left: 1rem;
  border-radius: 10rem;
  position: relative;
  text-align: left;
  font-size: 14px;
  width: 100%;
  height: 42px;
  &.active {
    background-color: var(--primary-color);
  }
  img {
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 10rem;
    position: absolute;
    right: 0;
    top: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
}
</style>
