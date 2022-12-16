<template>
  <div class="result">
    <pre>
      {{ filters.categoryIds }}
    </pre>

    <pre>
      {{ filters.accessibilityIds }}
    </pre>
    <GoBackButton />

    <PlacesSlide />

    <PlaceList />
  </div>
</template>

<script lang="ts" setup>
import { GoBackButton } from '@/components/atoms'
import { PlacesSlide } from '@/components/molecules'
import { PlaceList } from '@/components/organisms'
import { useFilters } from '@/stores/filters'

const filters = useFilters()
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
