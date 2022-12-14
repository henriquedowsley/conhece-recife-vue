<template>
  <Suspense>
    <div class="search">
      <GoBackButton />
    </div>
  </Suspense>
</template>

<script lang="ts" setup>
import { GoBackButton } from '@/components/atoms'
import { usePlacesStore } from '@/stores/places'

const places = usePlacesStore()

await places.fetchAll()
</script>

<style scoped lang="scss">
.search {
  padding: 2rem;
}
</style>
