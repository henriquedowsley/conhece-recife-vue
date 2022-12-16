<template>
  <div class="search">
    <GoBackButton />

    <PlacesSlide />

    <CategoriesFilter />

    <AccessibilitiesFilter />

    <Button @click="router.push('/result')"> Buscar </Button>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@/components/atoms'
import { usePlacesStore } from '@/stores/places'
import { useCategoriesStore } from '@/stores/categories'
import { useAccessibilitiesStore } from '@/stores/accessibilities'
import { useRouter } from 'vue-router'

// components
import { GoBackButton } from '@/components/atoms'
import { PlacesSlide } from '@/components/molecules'
import { CategoriesFilter, AccessibilitiesFilter } from '@/components/organisms'

const router = useRouter()
const places = usePlacesStore()
const categories = useCategoriesStore()
const accessibilities = useAccessibilitiesStore()

places.fetchAll()

categories.fetchAll()

accessibilities.fetchAll()
</script>

<style scoped lang="scss">
.search {
  padding: 1rem;
  height: 100%;
  display: grid;
  gap: 1rem;
  grid-auto-rows: max-content;
  .button {
    margin-top: 3rem;
    justify-self: center;
  }
}
</style>
