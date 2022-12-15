<template>
  <div class="search">
    <GoBackButton />

    <PlacesSlides />
  </div>
</template>

<script lang="ts" setup>
import { usePlacesStore } from '@/stores/places'
import { GoBackButton } from '@/components/atoms'
import { PlacesSlides } from '@/components/molecules'

const places = usePlacesStore()

places.fetchAll()
</script>

<style scoped lang="scss">
.search {
  padding: 1rem;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: max-content;
}
</style>
