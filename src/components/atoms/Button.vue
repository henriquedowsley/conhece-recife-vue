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
  padding: 1rem 3rem;
  border-radius: 0.7rem;
  width: max-content;
  height: max-content;
  font-weight: bold;
  cursor: pointer;
  cursor: #fff;
  border: none;
  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
