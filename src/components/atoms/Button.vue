<template>
  <button :class="['button', { disabled }]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

interface Props {
  type?: 'button' | 'submit'
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'button'
})
</script>

<style scoped lang="scss">
.button {
  background-color: var(--primary-color);
  text-transform: uppercase;
  border-radius: 0.7rem;
  width: 231px;
  height: 59px;
  font-weight: bold;
  cursor: pointer;
  cursor: #fff;
  border: none;
  color: #fff;
  letter-spacing: 1.25px;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
  
</style>
