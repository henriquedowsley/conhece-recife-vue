<template>
  <div class="result">
    <GoBackButton />

    <PlacesSlides />

    <PlacesList />
  </div>
</template>

<script lang="ts" setup>
  import { usePlacesStore } from '@/stores/places'
  import { GoBackButton } from '@/components/atoms'
  import { PlacesSlides, PlacesList } from '@/components/molecules'
  import { useRouter } from 'vue-router'
  import { onMounted } from 'vue'

  const router = useRouter()

  const places = usePlacesStore()

  onMounted(async () => {
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    let categoriesList: Array<number> = [];
    let accessibilitiesList: Array<number> = [];

    params.get("categories")?.split(',').forEach(function(c) {categoriesList.push(+c)})
    params.get("accessibilities")?.split(',').forEach(function(a) {accessibilitiesList.push(+a)})
    await places.fetchAll()
    await places.filter(categoriesList, accessibilitiesList)
  })

  </script>

  <style scoped lang="scss">
  .result {
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
