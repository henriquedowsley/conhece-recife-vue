<template>
  <div :class="['collapse', { 'is-open': isOpen }]">
    <div class="trigger" @click="isOpen = !isOpen">
      <p>{{ title }}</p>
      <img src="@/assets/images/angle-up-solid.svg" class="up" />
      <img src="@/assets/images/angle-down-solid.svg" class="down" />
    </div>

    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface Props {
  title: string
}

defineProps<Props>()

const isOpen = ref(true)
</script>

<style scoped lang="scss">
.collapse {
  .trigger {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    p {
      font-weight: bold;
    }
    img {
      padding-right: 0.5rem;
      height: 19px;
      display: none;
      &.down {
        display: block;
      }
    }
  }
  .content {
    display: none;
    padding: 0.5rem 0;
  }
}

.collapse.is-open {
  .trigger {
    img {
      &.down {
        display: none;
      }
      &.up {
        display: block;
      }
    }
  }
  .content {
    display: block;
  }
}
</style>
