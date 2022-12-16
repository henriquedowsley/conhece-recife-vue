<template>
  <div class="place-title">
    <h2>{{ places.current.name }}</h2>
    <img :src="places.current.category?.icon" />
  </div>
</template>

<script lang="ts" setup>
import { usePlacesStore } from '@/stores/places'

const places = usePlacesStore()
</script>

<style scoped lang="scss">
.place-title {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  img {
    width: 42px;
    height: 42px;
    background-color: #fff;
    border-radius: 10rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  h2 {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
