<template>
  <div class="result">
    <GoBackButton />

    <PlacesSlide />

    <PlaceList />
  </div>
</template>

<script lang="ts" setup>
import { GoBackButton } from '@/components/atoms'
import { PlacesSlide } from '@/components/molecules'
import { PlaceList } from '@/components/organisms'
</script>

<style scoped lang="scss">
.result {
  padding: 1rem;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: max-content;
}
</style>
