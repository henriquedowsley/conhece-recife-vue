<template>
  <div class="search">
    <GoBackButton />

    <PlacesSlides />

    <CategoryFilter />

    <AccessibilityFilter />
    
    <Button class=button @click="router.push('/result?categories=1&accessibilities=2  ')">Buscar</Button>
  </div>
</template>

<script lang="ts" setup>
  import { Button } from '@/components/atoms'
  import { usePlacesStore } from '@/stores/places'
  import { GoBackButton } from '@/components/atoms'
  import { PlacesSlides, CategoryFilter, AccessibilityFilter } from '@/components/molecules'
  import { useRouter } from 'vue-router'

  const router = useRouter()

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
    .button {
        justify-self: center;
    }
  }
</style>
